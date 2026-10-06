# auntys-marketpalce-site
Aunties Marketplace Site — a single-page "coming soon" site with email sign-up, hosted on GitHub Pages.

## Files
- `index.html` — page content and sections
- `styles.css` — forest green / ivory theme, sticky nav, mobile layout
- `script.js` — active-tab highlighting and email form submission

## Email sign-up
GitHub Pages only serves static files, so sign-ups are sent to [Formspree](https://formspree.io), form `xeaeegjg`.
To use a different form, change the form's `action` in `index.html`.

Sign-ups appear in the Formspree dashboard, and can be exported as CSV.

## Publish on GitHub Pages
1. Push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at https://aunties.online after a minute or two (custom domain set in `CNAME`, DNS at Namecheap).
