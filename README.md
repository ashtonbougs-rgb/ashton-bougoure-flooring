# Ashton Bougoure — static website

Simple, free, mobile-first static site for Ashton Bougoure (residential & commercial flooring, Sunshine Coast QLD).

Vanilla HTML / CSS / JS only. No frameworks, no paid services, no GPL/AGPL libs.

## Preview locally

From this folder:

```bash
cd /workspace/branding/website/site
python3 -m http.server 8080
```

Then open http://localhost:8080 in a browser.

Or just open `index.html` directly in a browser (file:// works for all pages; the mailto form still works).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, services snapshot, areas, CTA |
| `services.html` | Full services list from the business card |
| `about.html` | Ashton, areas, ABN, insurance |
| `contact.html` | Phone / email / mailto quote form |
| `styles.css` | Shared styles (navy `#0B1F3A` + orange `#F5A623`) |
| `site.js` | Mobile nav + mailto form helper |
| `favicon.svg` | Orange plank mark on navy |

## Deploy free (no secrets needed in this repo)

### Cloudflare Pages (drag & drop)

1. Go to https://pages.cloudflare.com (free account)
2. **Upload assets** → drag the whole `site/` folder
3. Publish. You get a `*.pages.dev` URL. Custom domain optional later.

### Netlify (drag & drop)

1. Go to https://app.netlify.com/drop
2. Drop the `site/` folder
3. Instant free URL. Custom domain optional later.

### GitHub Pages

1. Push this `site/` folder to a public repo (or `/docs`)
2. Settings → Pages → deploy from that folder/branch

No API keys, env vars, or paid plans required for any of the above.

## Content rules

- Card facts only: phone, email, ABN, $10M PL, listed services
- Temp name: **Ashton Bougoure Commercial Flooring** (trading name TBD)
- Residential **and** commercial
- Areas: Sunshine Coast first, then Moreton Bay / Brisbane north
- No invented testimonials, job photos, or partners not on the card

## Colours (from business card art)

- Navy: `#0B1F3A`
- Orange: `#F5A623`
- White / off-white backgrounds
