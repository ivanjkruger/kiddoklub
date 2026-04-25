#!/usr/bin/env python3
"""
seed_clients.py — Push the past-client CSV into Supabase clients table.

Usage:
  python scripts/seed_clients.py content/seed/past-clients.csv

Requires:
  KIDDOKLUB_SUPABASE_URL + KIDDOKLUB_SUPABASE_SERVICE_KEY in env
  (read from macOS Keychain via .env.local once Supabase is provisioned).

Idempotent: upserts on parent_phone (matches CRM source-of-truth).
Skips comment rows (starting with `#` in name column).
"""

from __future__ import annotations

import csv
import os
import sys
from pathlib import Path
from typing import Any

try:
    from supabase import create_client
except ImportError:
    sys.exit("supabase-py required: pip install supabase")


def normalize_phone(raw: str) -> str:
    """Strip non-digits, ensure +974 prefix for QA numbers."""
    raw = raw.strip()
    if not raw:
        return ""
    digits = "".join(c for c in raw if c.isdigit() or c == "+")
    if not digits.startswith("+"):
        digits = "+" + digits.lstrip("0")
    return digits


def parse_kids(raw: str) -> list[str]:
    return [k.strip() for k in raw.split(",") if k.strip()]


def parse_bool(raw: str) -> bool:
    return raw.strip().upper() in {"TRUE", "T", "YES", "Y", "1"}


def main(csv_path: str) -> None:
    url = os.environ.get("KIDDOKLUB_SUPABASE_URL")
    key = os.environ.get("KIDDOKLUB_SUPABASE_SERVICE_KEY")
    if not url or not key:
        sys.exit("Missing KIDDOKLUB_SUPABASE_URL / KIDDOKLUB_SUPABASE_SERVICE_KEY in env")

    sb = create_client(url, key)

    rows: list[dict[str, Any]] = []
    with Path(csv_path).open() as fh:
        reader = csv.DictReader(fh)
        for r in reader:
            name = (r.get("name") or "").strip()
            if not name or name.startswith("#"):
                continue
            phone = normalize_phone(r.get("parent_phone") or "")
            if not phone:
                print(f"skipping row without phone: {name}")
                continue
            rows.append(
                {
                    "name": name,
                    "parent_phone": phone,
                    "parent_email": (r.get("parent_email") or "").strip() or None,
                    "kid_names": parse_kids(r.get("kid_names") or ""),
                    "first_event_date": (r.get("first_event_date") or "").strip() or None,
                    "compound": (r.get("compound") or "").strip() or None,
                    "language": (r.get("language") or "en").strip(),
                    "source": "past_client",
                    "vip": parse_bool(r.get("vip") or ""),
                    "notes": (r.get("notes") or "").strip() or None,
                }
            )

    if not rows:
        sys.exit("no rows to insert (only comment lines or empty CSV)")

    res = sb.table("clients").upsert(rows, on_conflict="parent_phone").execute()
    print(f"upserted {len(res.data)} client rows")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(f"usage: {sys.argv[0]} <csv-path>")
    main(sys.argv[1])
