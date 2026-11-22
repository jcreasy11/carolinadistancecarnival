# ASICS Carolina Distance Carnival website

Static site for carolinadistancecarnival.com. No build step: the files in the repo root are the site.

- `index.html` is the homepage (same as `Main.dc.html`), plus `Entries.dc.html` and `Records.dc.html`
- `support.js` is the page runtime the pages load. Do not edit it.
- `images/` holds logo files

Hosting: connect this repo to Netlify or Cloudflare Pages (publish directory: repository root, no build command). Every push to `main` redeploys the site.
