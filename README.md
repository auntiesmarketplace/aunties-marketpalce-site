# auntys-marketpalce-site
Aunties Marketplace Site — a single-page "coming soon" site with email sign-up, hosted on GitHub Pages.

## Files
- `index.html` — page content and sections
- `styles.css` — forest green / ivory theme, sticky nav, mobile layout
- `script.js` — active-tab highlighting and email form submission

## Connect the email sign-up
GitHub Pages only serves static files, so sign-ups are sent to [Formspree](https://formspree.io) (free tier available).

1. Create a Formspree account and a new form.
2. Copy the form ID (the part after `/f/` in its endpoint URL).
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action` with it.

Sign-ups then appear in your Formspree dashboard, and can be exported as CSV.

## Publish on GitHub Pages
1. Push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://tamimalmahdi.github.io/auntys-marketpalce-site/` after a minute or two.
