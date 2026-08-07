#!/usr/bin/env node
// Generates content/packages.gen.ts from content/packages.yaml (the pricing SSOT).
// Only public-safe fields are emitted; internal notes, margins, and role strategy
// never reach the client bundle. Runs automatically via the prebuild hook.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "js-yaml";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = load(readFileSync(join(root, "content/packages.yaml"), "utf8"));

const fmtFootprint = (f) => `${String(f).replace(/\s*x\s*/, " × ")}m`;

const out = {
  currency: src.currency,
  packages: src.packages.map((p) => ({
    id: p.id,
    shortId: p.id.replace(/^klub_/, ""),
    name: p.name,
    nameAr: p.name_ar,
    publicPrice: p.public_price ?? null,
    priceLabel: p.public_price_label ?? null,
    showPrice: !!p.show_price_publicly,
    durationHours: p.duration_hours,
    capacityLabel: p.capacity_label,
    footprint: fmtFootprint(p.footprint_m),
    inclusions: p.inclusions,
  })),
  addons: src.addons.map((a) => ({
    id: a.id,
    name: a.name,
    nameAr: a.name_ar,
    price: a.price,
    perKid: !!a.per_kid,
  })),
  weekdayDiscount: {
    multiplier: src.modifiers.weekday_discount.multiplier,
    label: src.modifiers.weekday_discount.label,
  },
  rushPremium: {
    multiplier: src.modifiers.rush_premium.multiplier,
    thresholdDays: src.modifiers.rush_premium.threshold_days,
  },
  deposit: {
    pct: src.deposit.pct,
    refundableOutsideDays: src.deposit.refundable_outside_days,
    outsideCreditPct: src.deposit.outside_14_credit_pct,
  },
  cancellation: {
    rescheduleFreeOutsideDays: src.cancellation.reschedule_free_outside_days,
    weatherClause: src.cancellation.weather_clause,
  },
  referral: { discountQar: src.referral.discount_qar },
  capacity: { partiesPerMonth: src.capacity.parties_per_month },
};

for (const p of out.packages) {
  if (!p.capacityLabel) throw new Error(`packages.yaml: ${p.id} missing capacity_label`);
  if (p.showPrice && p.publicPrice == null) throw new Error(`packages.yaml: ${p.id} public but no price`);
}

const banner =
  "// AUTO-GENERATED from content/packages.yaml (pricing SSOT). Do not edit by hand.\n" +
  "// Regenerate: node scripts/gen-packages.mjs (also runs via the prebuild hook).\n";
writeFileSync(
  join(root, "content/packages.gen.ts"),
  `${banner}export const PRICING = ${JSON.stringify(out, null, 2)} as const;\n`,
);
console.log("content/packages.gen.ts written");
