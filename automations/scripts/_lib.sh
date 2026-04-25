#!/bin/zsh
# Shared library for KiddoKlub automation scripts.
# Source this at the top of every cron entry-point.

set -euo pipefail

KK_ROOT="${HOME}/Projects/kiddoklub"
KK_LOG_DIR="${HOME}/ivan-ops/logs/kiddoklub"
mkdir -p "${KK_LOG_DIR}"

kk_log() {
  local level="$1"; shift
  printf '%s [%s] %s\n' "$(date -u +%FT%TZ)" "${level}" "$*" \
    | tee -a "${KK_LOG_DIR}/$(date +%Y-%m-%d).log"
}

# Read Keychain secret (length-only verification — never echoes the value)
kk_secret() {
  local name="$1"
  security find-generic-password -s "${name}" -a ivan -w 2>/dev/null
}

kk_have_secret() {
  local name="$1"
  security find-generic-password -s "${name}" -a ivan -g >/dev/null 2>&1
}

# Telegram alert via James's existing bot bridge
kk_telegram() {
  local msg="$*"
  local bot_token chat_id
  if ! kk_have_secret IVAN_JAMES_BOT_TOKEN || ! kk_have_secret IVAN_TELEGRAM_CHAT_ID; then
    kk_log WARN "Telegram secrets not provisioned; would have sent: ${msg}"
    return 0
  fi
  bot_token="$(kk_secret IVAN_JAMES_BOT_TOKEN)"
  chat_id="$(kk_secret IVAN_TELEGRAM_CHAT_ID)"
  curl -s -X POST "https://api.telegram.org/bot${bot_token}/sendMessage" \
    -d "chat_id=${chat_id}" \
    --data-urlencode "text=${msg}" \
    -d parse_mode=Markdown \
    -o /dev/null
}

# Supabase REST helper (read-only)
kk_supabase() {
  local path="$1"
  local url anon
  if ! kk_have_secret KIDDOKLUB_SUPABASE_URL; then
    kk_log WARN "Supabase not provisioned; skipping query: ${path}"
    return 1
  fi
  url="$(kk_secret KIDDOKLUB_SUPABASE_URL)"
  anon="$(kk_secret KIDDOKLUB_SUPABASE_ANON_KEY)"
  curl -s "${url}/rest/v1/${path}" \
    -H "apikey: ${anon}" \
    -H "Authorization: Bearer ${anon}"
}

# Gate: every script checks readiness before doing real work
kk_gate() {
  local missing=()
  for s in KIDDOKLUB_SUPABASE_URL KIDDOKLUB_SUPABASE_ANON_KEY IVAN_JAMES_BOT_TOKEN IVAN_TELEGRAM_CHAT_ID; do
    kk_have_secret "$s" || missing+=("$s")
  done
  if (( ${#missing[@]} > 0 )); then
    kk_log INFO "Gated: missing secrets ${missing[*]}. Skill skipping real work, logging dry-run only."
    return 1
  fi
  return 0
}

# Invoke a Claude Code skill non-interactively
kk_claude() {
  local prompt="$*"
  if ! command -v claude >/dev/null 2>&1; then
    kk_log ERROR "claude CLI not found in PATH"
    return 1
  fi
  cd "${KK_ROOT}"
  claude -p --dangerously-skip-permissions "${prompt}" 2>&1 | tee -a "${KK_LOG_DIR}/$(date +%Y-%m-%d)-claude.log"
}
