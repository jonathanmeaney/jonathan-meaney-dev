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
```

## Content locations

- `src/content/posts` for blog posts
- `src/content/projects` for project writeups
- `src/content/other/about.mdx` for the homepage about text
- `src/content/info.json` for quick profile facts
- `src/content/socials.json` for social links
- `src/content/work.json` for work history

## Deployment

The project now builds as a static Astro site. The production output is written to `dist`, and Pagefind search indexes are generated into `dist/pagefind` during `postbuild`.
