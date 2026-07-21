# Gide — Legacy website

Public landing and invitation-onboarding website for
[`legacy.trustedstranger.app`](https://legacy.trustedstranger.app/).

## Routes

- `/` explains Gide — Legacy and links to the Android app.
- `/join/?code=ABCD-1234#key=...` provides the fallback invitation experience
  when the app is not installed. The private family key stays in the URL
  fragment and is processed only in the visitor's browser.
- `/.well-known/assetlinks.json` lets Android verify that invitation links for
  this domain belong to `com.gidelegacy.app`.

The site is deployed through GitHub Pages from the `main` branch. The `CNAME`
file keeps the custom domain connected.
