# CommerceGuardian OS Site

Public marketing website for CommerceGuardian OS, a Shopify app that helps merchants protect orders before fulfillment.

Primary website URL:

`https://commerceguardianos.com/`

GitHub Pages repository URL before custom-domain routing:

`https://karimbaidar.github.io/commerceguardianos-site/`

Shopify App Store listing:

`https://apps.shopify.com/commerceguardianos`

## Tech Stack

- SvelteKit
- TypeScript
- `@sveltejs/adapter-static`
- GitHub Pages custom domain: `commerceguardianos.com`

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The static site is generated into `build/`. The adapter also generates `404.html` for GitHub Pages fallback behavior.

## Deploy

Deployment is configured in `.github/workflows/deploy.yml`.

The workflow:

- Uses Node 20
- Installs with `npm ci`
- Builds with `npm run build`
- Uploads the `build/` folder with `actions/upload-pages-artifact@v3`
- Deploys with `actions/deploy-pages@v4`

## GitHub Pages Setup

GitHub Pages should be configured for GitHub Actions deployment with this custom domain:

`commerceguardianos.com`

If GitHub Pages is not already configured:

1. Open the GitHub repo.
2. Go to Settings.
3. Open Pages.
4. Set Source to GitHub Actions.
5. Set Custom domain to `commerceguardianos.com`.
6. Save.
7. Wait for the deploy workflow to finish.
8. Enable Enforce HTTPS when GitHub makes it available.

## Cloudflare DNS Records

Keep existing email records in place. Add only the web records below.

For `commerceguardianos.com`:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

For `www.commerceguardianos.com`:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| CNAME | `www` | `karimbaidar.github.io` | DNS only |

Optional IPv6 records for `commerceguardianos.com`:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` | DNS only |
| AAAA | `@` | `2606:50c0:8001::153` | DNS only |
| AAAA | `@` | `2606:50c0:8002::153` | DNS only |
| AAAA | `@` | `2606:50c0:8003::153` | DNS only |

## Shopify App Store Badge

The official Shopify App Store badge assets from the local `Shopify App Store Badges` folder have been copied into:

- `static/assets/shopify-app-store-badge-black.png`
- `static/assets/shopify-app-store-badge-light.png`
- `static/assets/shopify-app-store-badge-black.svg`
- `static/assets/shopify-app-store-badge-light.svg`

Do not alter badge colors, crop, stretch, rotate, animate, or add shadows.

## Placeholders To Replace

- Replace `[official email placeholder]` in the site content with the official support or media contact email.
- Add a live form endpoint if the free audit placeholder form should collect submissions.
- Configure `commerceguardianos.com` in GitHub Pages and DNS when the custom domain is ready.

## Privacy And Claims

This repository contains only the public marketing site. It does not include private app source code, secrets, environment files, customer data, or Shopify app internals.

The site intentionally uses careful wording such as compliance-readiness, privacy-conscious workflows, and customer-data handling visibility. It does not present the app as a substitute for legal review, payment risk tooling, or merchant fulfillment decisions.
