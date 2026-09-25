# Iorio Lab website — first design prototype

A fully static, responsive website prototype built around the existing Iorio Lab identity.

## Structure
- `index.html` — homepage
- `research.html` — research programmes
- `people.html` — team
- `publications.html` — selected publications / future ORCID-PubMed integration
- `resources.html` — software and data resources
- `join.html` — recruitment
- `assets/` — logo, CSS and JS

## Preview locally
From this directory run:

```bash
python -m http.server 8000
```

then open `http://localhost:8000`.

## Before production launch
1. Confirm current team names/roles and add portraits.
2. Replace the publications placeholders with verified metadata (ideally automated from ORCID/PubMed).
3. Add final URLs for CRISPRcleanR, ADaM, CRISPR-VUS/DAM and consortium resources.
4. Add real news items and dates.
5. Add privacy/cookie text only if analytics or trackers are introduced.
6. Point `ioriolab.org` to the chosen static host (Cloudflare Pages, Netlify, GitHub Pages, etc.).

The site deliberately uses no external JS framework or webfont, keeping it fast and low-maintenance.
