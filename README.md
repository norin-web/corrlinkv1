# CorrLink — promo site

Static promo site for the CorrLink app (iPhone). React + TypeScript + Vite + Tailwind CSS 4 + React Router.

## Run locally

    pnpm install
    pnpm dev

## Build

    pnpm run build

## Where content lives

- `src/app/content/site.ts` — brand, support email, App Store ID and link, navigation, features, steps, FAQ.
  The store button stays «Coming soon» while `app.url` is `null`. Set it to `https://apps.apple.com/app/id6832091020` at release.
- `src/app/pages/Privacy.tsx`, `Terms.tsx` — placeholders until the owner's texts arrive. Insert the text verbatim; do not paraphrase.

## Deployment (GitHub Pages)

- Live at `https://corrlink.site/` (custom domain). `vite.config.ts` uses `base: "/"` and `public/CNAME` holds the domain. The two must change together.
- Without the domain, the site lives at `https://norin-web.github.io/corrlinkv1/`: set `base: "/corrlinkv1/"` and delete `public/CNAME` in the same commit.
- Pages source must be **GitHub Actions**.
- Deploys run from `.github/workflows/deploy.yml` on every push to `main`. The workflow copies `index.html` to `404.html` so deep links work.

## Rules that bite

- Every image `src` goes through `img()` (`src/app/utils/img.ts`), otherwise the base path breaks on Pages.
- Reveal animations never hide content for good: the fallbacks in `useReveal` are gated on the element being on screen.
