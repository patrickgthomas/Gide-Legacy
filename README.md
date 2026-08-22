# Gide Legacy website

Public landing and invitation-onboarding site for
[`legacy.gidehub.com`](https://legacy.gidehub.com/).

## Routes

- `/` explains Gide Legacy and links to the Android app.
- `/join/?code=ABCD-1234#key=...` provides the fallback invitation experience
  when the app is not installed. The private family key stays in the URL
  fragment and is processed only in the visitor's browser.
- `/.well-known/assetlinks.json` lets Android verify that invitation links for
  this domain belong to `com.gidelegacy.app`.

Deployed through GitHub Pages from the `main` branch; the `CNAME` file keeps the
custom domain connected.

## What is generated vs. hand-maintained

`index.html`, `assets/css/app.css` and `assets/js/nav.js` are **generated**. Edit
`src/data/apps/legacy.json` and `src/data/palettes.json` in the main Gide site
repo, then run `node tools/build-app-sites.mjs`.

`join/index.html`, `join/join.js`, `assets/css/join.css` and `.well-known/` are
hand-maintained here and are never touched by the generator.
