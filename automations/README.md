# KiddoKlub Automations

6 scheduled jobs running via macOS launchd. Mirrors the Equipt + James OS pattern.

## Schedule (Doha tz)

| Job | When | Skill |
|---|---|---|
| daily-pipeline | Daily 06:00 | (composite digest) |
| sunday-content | Sunday 09:00 | `kiddoklub-content-engine` |
| monday-dream100 | Monday 08:30 | `kiddoklub-outreach-draft` |
| tuesday-postparty | Tuesday 10:00 | `kiddoklub-postparty-followup` |
| wednesday-reactivation | Wednesday 11:00 | `kiddoklub-reactivation` |
| friday-weekendprep | Friday 16:00 | `kiddoklub-weekend-prep` |

Note: launchd `Weekday` is 0=Sunday, 1=Monday, ... 6=Saturday.

## Install

```sh
# Symlink plists into LaunchAgents
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.daily-pipeline.plist ~/Library/LaunchAgents/
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.sunday-content.plist ~/Library/LaunchAgents/
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.monday-dream100.plist ~/Library/LaunchAgents/
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.tuesday-postparty.plist ~/Library/LaunchAgents/
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.wednesday-reactivation.plist ~/Library/LaunchAgents/
ln -sf ~/Projects/kiddoklub/automations/launchd/com.kiddoklub.friday-weekendprep.plist ~/Library/LaunchAgents/

# chmod the scripts
chmod +x ~/Projects/kiddoklub/automations/scripts/*.sh

# Bootstrap each plist into the user's GUI session
for p in ~/Library/LaunchAgents/com.kiddoklub.*.plist; do
  launchctl bootstrap gui/$(id -u) "$p"
done

# Verify
launchctl list | grep kiddoklub
```

## Test (manual fire, no schedule wait)

```sh
~/Projects/kiddoklub/automations/scripts/daily_pipeline_digest.sh
```

Or via launchd:
```sh
launchctl kickstart -k gui/$(id -u)/com.kiddoklub.daily-pipeline
```

## Uninstall

```sh
for p in ~/Library/LaunchAgents/com.kiddoklub.*.plist; do
  launchctl bootout gui/$(id -u)/$(basename "$p" .plist)
  rm "$p"
done
```

## Gate behavior (Phase 0)

Every script calls `kk_gate` first. If required Keychain secrets are not yet provisioned, the script:
1. Logs a "gated, dry-run only" line to `~/ivan-ops/logs/kiddoklub/{date}.log`
2. Pings Telegram (if Telegram-bot secrets are present) so Ivan knows the job ran but skipped real work
3. Exits 0 (does NOT fail; we don't want launchd marking the job broken)

This means Phase 0 can install all 6 jobs immediately. They start doing real work the moment Skipcash + Wati + Supabase are live and secrets are seeded.

## Required Keychain secrets (added incrementally)

```sh
security add-generic-password -A -s KIDDOKLUB_SUPABASE_URL -a ivan -w 'https://...supabase.co'
security add-generic-password -A -s KIDDOKLUB_SUPABASE_ANON_KEY -a ivan -w '<anon>'
security add-generic-password -A -s KIDDOKLUB_SUPABASE_SERVICE_KEY -a ivan -w '<service>'
security add-generic-password -A -s KIDDOKLUB_SKIPCASH_API_KEY -a ivan -w '<skipcash>'
security add-generic-password -A -s KIDDOKLUB_SKIPCASH_WEBHOOK_SECRET -a ivan -w '<hmac>'
security add-generic-password -A -s KIDDOKLUB_WATI_API_KEY -a ivan -w '<wati>'
security add-generic-password -A -s KIDDOKLUB_RESEND_API_KEY -a ivan -w '<resend>'
security add-generic-password -A -s KIDDOKLUB_CAL_WEBHOOK_SECRET -a ivan -w '<cal>'

# Telegram (likely shared with James — verify or create kiddoklub-specific)
security add-generic-password -A -s IVAN_JAMES_BOT_TOKEN -a ivan -w '<bot token>'
security add-generic-password -A -s IVAN_TELEGRAM_CHAT_ID -a ivan -w '<chat id>'
```

## macOS sleep + Full Disk Access caveats

Same as `~/ivan-ops/README.md` — laptop-lid-shut + power-off prevents launchd. Full Disk Access required if scripts read protected paths. KiddoKlub scripts read only `~/Projects/kiddoklub/**` and Keychain → no FDA needed.
