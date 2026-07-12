import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Blog posts — long-form notes. Add a .md/.mdx file under src/content/blog/.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

// CTF writeups — same Markdown pipeline as the blog, plus a category.
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    category: z.enum(['web', 'pwn', 'crypto', 'forensics', 'rev', 'misc']),
    event: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog, writeups }
