# Zero Level, Siliguri - website (GitHub Pages)

Static site for https://www.zerolevelslg.com

## Deploy
1. Upload all files in this folder to the repo root (keep folders; include hidden files `.nojekyll` and `CNAME`).
2. Settings > Pages > Deploy from branch `main` / root. Custom domain: `www.zerolevelslg.com`. Enable "Enforce HTTPS" once the domain verifies.
3. DNS: CNAME `www` -> `<github-username>.github.io`; A records for `@` -> 185.199.108.153, .109.153, .110.153, .111.153 (confirm in GitHub docs).
4. Add `logo.png` (your existing logo, ideally 1200x630) to the repo root, used for social sharing previews.
5. Search Console: verify the www property, submit `sitemap.xml`, request indexing for `/` and each page in the sitemap.

## Files
- `index.html` homepage (one title, one H1, one canonical, Google reviews section)
- Service pages, `courses/`, `about/`, `contact/`, `guides/nios-vs-bosse/`
- `assets/zerobot.js` ZeroBot chatbot (loaded on every page; edit the `KB` list at the top to change answers)
- `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`, `404.html`, `manifest.webmanifest`, `favicon.svg`, `assets/style.css`

## Maintenance
- Reviews: edit the "What students say" section in `index.html`. Quote reviews exactly as posted and keep star ratings accurate. Update the rating line when it changes.
- Update `sitemap.xml` lastmod dates whenever a page changes.
- Forms open WhatsApp with the visitor's details (no server needed).
