# untrustedusercontent.github.io

## What is it?

Untrusted User Content is a website designed for iframes to load content / js from untrusted sources.

## How to use it?

1. Encode a JS file into base64.
2. Create an iframe element with the `src` attribute set to `https://untrustedusercontent.github.io/?js=<base64_encoded_js>`.
3. Enjoy!

## Why?

Many websites have strict Content Security Policies (CSP) that prevent iframes from loading content from untrusted sources. This website provides a way to bypass these policies by allowing iframes to load content from untrusted sources while being isolated from the parent page.
