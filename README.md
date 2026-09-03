# S.B. Auto Sales & Service — John Deere Tractors, Sirsaganj

Hindi-language dealer site for **S.B. Auto Sales & Service** (Etawah Road, Sirsaganj),
covering John Deere India tractors, GreenSystem implements, and Precision Ag products.

Built with **Next.js 16 (App Router)**, React 19, and Tailwind CSS 4. Deployed on **Netlify**.

## Stack

- **Framework:** Next.js 16 App Router with Turbopack
- **Styling:** Tailwind CSS 4 + CSS Modules, with a vendored shadcn catalog in `vendor/`
- **UI primitives:** shadcn / Radix / Base UI components in `components/ui/`
- **Content:** the whole catalog is static data in `lib/catalog.ts` — no database, no API routes

Every route is prerendered at build time (71 static pages, including 62 product
detail pages generated from `generateStaticParams`). The site has no server-side
data fetching, no authentication, and no runtime environment variables.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build into `.next/`
- `npm run start` — serve the production build locally
- `npm run lint` — ESLint (`eslint-config-next`)
- `npm test` — build, then run the Node test-runner suite in `tests/`

## Project layout

- `app/` — App Router pages: home, `/tractors`, `/implements`, `/precision-ag`,
  `/finance`, `/service`, `/dealer`, and `/products/[slug]`
- `components/` — site components (`site-shell`, `mobile-dock`, WhatsApp enquiry
  forms, PWA installer) plus the `components/ui/` registry
- `lib/catalog.ts` — the product catalog that drives every listing and detail page
- `lib/whatsapp.ts` — WhatsApp deep-link helpers for enquiries
- `public/` — images, PWA icons, `manifest.webmanifest`, and `sw.js`

## Deploying to Netlify

`netlify.toml` holds the whole configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

Netlify's Next.js runtime (`@netlify/plugin-nextjs`) turns the `.next` output into
CDN assets and functions. To deploy:

1. Push this repository to GitHub.
2. In Netlify, **Add new site → Import an existing project**, and pick the repo.
3. Netlify reads `netlify.toml`, so the build command and publish directory are
   already set. No environment variables are required.

Because every page is static, you can alternatively add `output: "export"` to
`next.config.ts` and publish `out/` as a pure static site — no functions involved.
