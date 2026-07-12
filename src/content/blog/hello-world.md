---
title: "Setting up shop"
date: 2026-07-13
excerpt: "Why I finally built a place to keep the tools, the writeups and the half-finished thoughts."
tags: [meta, security]
---

I kept losing things. A neat little exploit script here, a half-written writeup
there, a screenshot of a bug that no longer reproduces. This is the fix: one
place for the projects I ship, the CTF challenges I solve, and the notes I take
along the way.

## What lives here

- **Projects** — tools and experiments, with links to the code.
- **CTF writeups** — how I solved things, category by category.
- **Blog** — everything that doesn't fit the other two boxes.

## How posts work

Every post is a Markdown file. Frontmatter at the top carries the title, date
and tags; the body is plain Markdown, so code blocks get syntax highlighting:

```js
const flag = atob("ZmxhZ3tuMHRfdGgzX3IzYWxfZmxhZ30=")
console.log(flag)
```

That's the whole system. Write a file, push it, done.
