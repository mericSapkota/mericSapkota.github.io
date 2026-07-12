# 0xm3r1c — portfolio

A pixel-art portfolio, CTF writeup log and blog. Built with **Astro** (static
output), **React** components, and **Tailwind CSS v4**. One project, one build,
one deploy.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site → ./dist/
npm run preview  # preview the built site
```

## How the site is organised

| Route         | Source                                             | What it is                             |
| ------------- | -------------------------------------------------- | -------------------------------------- |
| `/`           | `src/pages/index.astro` + `src/components/Home.tsx`| Landing page                           |
| `/projects`   | `src/data/projects.ts`                             | Project showcase (structured data)     |
| `/writeups`   | `src/content/writeups/*.md`                        | CTF writeups (Markdown)                |
| `/blog`       | `src/content/blog/*.md`                            | Blog posts (Markdown)                  |
| `/contact`    | `src/pages/contact.astro`                          | Contact links                          |
| `/rss.xml`    | `src/pages/rss.xml.ts`                             | RSS feed (blog + writeups)             |

The look lives in one place: `src/styles/global.css` (Tailwind theme tokens for
the palette + fonts, plus the pixel-art helpers). Shared UI is in
`src/components/` as React components (`Nav`, `Home`, `PostCard`, `ProjectCard`,
`SiteFooter`); pages compose them from `src/layouts/Base.astro`.

---

## Publishing content

Everything is **files in this repo**. Write a file, commit, push — the host
rebuilds and it's live. No CMS, no database.

### ✍️ Add a blog post

Create `src/content/blog/my-post.md`. The filename becomes the URL
(`/blog/my-post`). Start with frontmatter, then write Markdown:

```markdown
---
title: "My post title"
date: 2026-07-13
excerpt: "One-line summary shown on the blog index."
tags: [security, notes]      # optional
draft: false                 # optional — set true to hide it
---

Your post body in Markdown. Code fences get syntax highlighting:

​```python
print("hello")
​```
```

### 🚩 Add a CTF writeup

Same as a blog post, but under `src/content/writeups/` and with a `category`:

```markdown
---
title: "Challenge name"
date: 2026-07-10
excerpt: "One-line teaser."
category: web                # web | pwn | crypto | forensics | rev | misc
event: "picoCTF 2026"        # optional — the competition
tags: [xss, cookies]         # optional
---

## Recon
...
```

The `category` drives the colored label and the filter row on `/writeups`.

### 🛠️ Add a project

Projects are structured data, not prose. Edit `src/data/projects.ts` and append
an object to the `projects` array:

```ts
{
  name: 'my-tool',
  blurb: 'What it does, in a sentence.',
  tags: ['rust', 'cli'],
  year: 2026,
  repo: 'https://github.com/you/my-tool',   // optional
  demo: 'https://my-tool.example.com',       // optional
  color: 'text-blue',                        // optional accent
}
```

The `/projects` grid renders newest-first automatically.

### 🖼️ Images

Drop images in `public/assets/` and reference them with an absolute path, e.g.
`![alt](/assets/screenshot.png)` in a post, or `/assets/thumb.png` in data.

---

## Deploying

This is a static site, so any static host works. The simplest path:

1. Push this repo to GitHub.
2. Connect it to **Netlify**, **Vercel**, or **Cloudflare Pages** (all free for
   this). Build command: `npm run build`. Publish directory: `dist`.
3. Every `git push` triggers a rebuild and deploy.

Before going live, set your real domain in `astro.config.mjs` (`site:`) so the
RSS feed uses correct absolute URLs, and swap the placeholder handles in
`src/pages/contact.astro`.

## Optional: a web editor instead of files

If you'd rather click "New Post" than edit Markdown by hand, you can later add
[Keystatic](https://keystatic.com) — it gives you a `/keystatic` admin UI that
commits the same Markdown files to this repo. Not set up yet; the file-based
flow above is all you need to start.
