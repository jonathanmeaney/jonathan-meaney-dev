# jonathan-meaney.dev

Personal developer site built with Astro.

## Stack

- Astro
- MDX content collections
- Expressive Code for code blocks
- Pagefind for search
- Static output for simple hosting

## Useful commands

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm build
corepack pnpm preview
corepack pnpm cf:preview
corepack pnpm deploy
```

## Content locations

- `src/content/posts` for blog posts
- `src/content/projects` for project writeups
- `src/content/other/about.mdx` for the homepage about text
- `src/content/info.json` for quick profile facts
- `src/content/socials.json` for social links
- `src/content/work.json` for work history

## Deployment

The project builds as a static Astro site. The production output is written to `dist`, and Pagefind search indexes are generated into `dist/pagefind` during `postbuild`.

### Cloudflare

Cloudflare now routes new static-site setups through Workers static assets rather than the old Pages-only flow.

Repository config for that flow lives in `wrangler.jsonc`:

- `assets.directory` points at `./dist`
- `assets.not_found_handling` is set to `404-page`

If you are configuring the project in the Cloudflare dashboard, use:

- Build command: `corepack enable && pnpm build`
- Deploy command: `npx wrangler deploy`

If you prefer local deploys from your machine, use:

```bash
corepack pnpm install
corepack pnpm deploy
```
