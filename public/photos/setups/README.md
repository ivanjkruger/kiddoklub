# Setup photos

12 stills from Mar 30, 2026. Empty / pre-event setups. We own + no faces in frame = unrestricted use.

Source-of-truth: Drive `Business/KiddoKlub/Photos/Setups/` (managed by Session B). These are mirrored into the repo so the booking site can serve them without runtime Drive auth.

## Files
- `setup-01.jpeg` through `setup-12.jpeg` — see `content/proof-pack/INVENTORY.md` for full mapping when Session B catalogs which is which.

## To re-sync from Drive
```sh
cp "/Users/ivankruger/Library/CloudStorage/GoogleDrive-ivanjkruger@gmail.com/My Drive/Business/KiddoKlub/Photos/Setups/"*.jpeg ~/Projects/kiddoklub/public/photos/setups/
```

## Optimization
Next.js `<Image>` will generate AVIF/WebP at build time per `next.config.ts` `images.formats`. Source JPEGs stay as is.
