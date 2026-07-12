import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const [blog, writeups] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('writeups', ({ data }) => !data.draft),
  ])

  const items = [
    ...blog.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.excerpt,
      link: `/blog/${p.id}`,
    })),
    ...writeups.map((w) => ({
      title: `[${w.data.category}] ${w.data.title}`,
      pubDate: w.data.date,
      description: w.data.excerpt,
      link: `/writeups/${w.id}`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())

  return rss({
    title: '0xm3r1c',
    description: 'Projects, CTF writeups and blog by 0xm3r1c.',
    site: context.site ?? 'https://example.com',
    items,
  })
}
