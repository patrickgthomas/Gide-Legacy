# Gide Legacy website

Public landing and invitation-onboarding site for
[`legacy.gidehub.com`](https://legacy.gidehub.com/).

## Routes

- `/` explains Gide Legacy and links to the app stores.
- `/join?code=ABCD-1234` provides the fallback invitation experience
  when the app is not installed. Current invitations carry a code, not an encryption key.
- `/.well-known/assetlinks.json` lets Android verify that invitation links for
  this domain belong to `com.gidelegacy.app`.

Deployed through GitHub Pages from the `main` branch; the `CNAME` file keeps the
custom domain connected.

- `/.well-known/apple-app-site-association` declares the iPhone association for
  `6BA793H479.com.gidelegacy.app`, limited to the app's `/join` route.
  Deploying this file is not proof of working universal links: verify the live
  response, Apple association processing, and an invitation tap on a real iPhone.

## What is generated vs. hand-maintained

`index.html`, `assets/css/app.css` and `assets/js/nav.js` are **generated**. Edit
`src/data/apps/legacy.json` and `src/data/palettes.json` in the main Gide site
repo, then run `node tools/build-app-sites.mjs`.

`join/index.html`, `join/join.js`, `assets/css/join.css` and `.well-known/` are
hand-maintained here and are never touched by the generator.

