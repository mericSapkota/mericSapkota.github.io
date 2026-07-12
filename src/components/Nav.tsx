type Page = 'home' | 'projects' | 'writeups' | 'blog' | 'contact'

const LINKS: { href: string; label: string; key: Page }[] = [
  { href: '/', label: 'HOME', key: 'home' },
  { href: '/projects', label: 'PROJECTS', key: 'projects' },
  { href: '/writeups', label: 'CTF LOG', key: 'writeups' },
  { href: '/blog', label: 'BLOG', key: 'blog' },
  { href: '/contact', label: 'CONTACT', key: 'contact' },
]

export default function Nav({ current = 'home' }: { current?: Page }) {
  return (
    <nav className="chamfer-lg flex flex-wrap items-center gap-5 border-[3px] border-ink bg-cream px-5 py-3.5 shadow-[5px_5px_0_var(--color-ink)]">
      <a
        href="/"
        className="mr-auto font-display text-sm tracking-wide text-ink no-underline hover:text-ink"
      >
        0xm3r1c
      </a>
      {LINKS.map(({ href, label, key }) => {
        const active = key === current
        return (
          <a
            key={href}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`border-b-[3px] font-body text-xl no-underline ${
              active
                ? 'border-red text-red hover:text-red'
                : 'border-transparent text-ink hover:text-red-dark'
            }`}
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}
