// AUTO-GENERATED from content/packages.yaml (pricing SSOT). Do not edit by hand.
// Regenerate: node scripts/gen-packages.mjs (also runs via the prebuild hook).
export const PRICING = {
  "currency": "QAR",
  "packages": [
    {
      "id": "klub_mini",
      "shortId": "mini",
      "name": "Klub Mini",
      "nameAr": "كلب ميني",
      "publicPrice": 1400,
      "priceLabel": null,
      "priceLabelAr": null,
      "showPrice": true,
      "durationHours": 4,
      "capacityKids": 6,
      "capacityLabel": "Up to 6 kids",
      "footprint": "3 × 3m",
      "inclusions": [
        "Soft play set with slide, steps, rocker",
        "Foam mat flooring",
        "Delivery + setup + sanitization + pickup"
      ]
    },
    {
      "id": "klub_classic",
      "shortId": "classic",
      "name": "Klub Classic",
      "nameAr": "كلب كلاسيك",
      "publicPrice": 2200,
      "priceLabel": null,
      "priceLabelAr": null,
      "showPrice": true,
      "durationHours": 4,
      "capacityKids": 10,
      "capacityLabel": "Up to 10 kids",
      "footprint": "4 × 5m",
      "inclusions": [
        "Premium soft play set with slide, climbing, rocker",
        "Foam mat flooring",
        "Pastel ball pit",
        "Delivery + setup + sanitization + pickup"
      ]
    },
    {
      "id": "klub_signature",
      "shortId": "signature",
      "name": "Klub Signature",
      "nameAr": "كلب سيجنتشر",
      "publicPrice": null,
      "priceLabel": "Starting from QAR 3,800",
      "priceLabelAr": "يبدأ من 3,800 ريال قطري",
      "showPrice": false,
      "durationHours": 4,
      "capacityKids": 15,
      "capacityLabel": "15+ kids",
      "footprint": "5 × 6m",
      "inclusions": [
        "Grand soft play set with slide, climbing, rocker, ball pit, sensory zone",
        "Foam mat flooring",
        "90-min photographer",
        "Themed decor (Neutral Nest, White Wonderland, Color Pop, or custom)",
        "Branded thank-you gift bags",
        "Delivery + setup + sanitization + pickup"
      ]
    }
  ],
  "addons": [
    {
      "id": "bouncy_castle",
      "name": "Bouncy castle",
      "nameAr": "قلعة نطّاطة",
      "price": 400,
      "perKid": false
    },
    {
      "id": "balloon_arch",
      "name": "Balloon arch",
      "nameAr": "قوس بالونات",
      "price": 350,
      "perKid": false
    },
    {
      "id": "soft_serve_cart",
      "name": "Soft-serve / popcorn cart",
      "nameAr": "عربة آيس كريم / فشار",
      "price": 500,
      "perKid": false
    },
    {
      "id": "photographer_90",
      "name": "90-min photographer",
      "nameAr": "مصوّر ٩٠ دقيقة",
      "price": 600,
      "perKid": false
    },
    {
      "id": "extra_hour",
      "name": "Extra rental hour",
      "nameAr": "ساعة إضافية",
      "price": 250,
      "perKid": false
    },
    {
      "id": "themed_gift_bags",
      "name": "Themed gift bags (per kid)",
      "nameAr": "كيس هدايا (لكل طفل)",
      "price": 35,
      "perKid": true
    }
  ],
  "weekdayDiscount": {
    "multiplier": 0.8,
    "label": "Weekday Klub - 20% off Sun-Thu"
  },
  "rushPremium": {
    "multiplier": 1.15,
    "thresholdDays": 7
  },
  "deposit": {
    "pct": 30,
    "refundableOutsideDays": 14,
    "outsideCreditPct": 50
  },
  "cancellation": {
    "rescheduleFreeOutsideDays": 14,
    "weatherClause": "Outdoor reschedule free; we never refund weather, we shift the date"
  },
  "referral": {
    "discountQar": 200
  },
  "capacity": {
    "partiesPerMonth": 10
  }
} as const;
