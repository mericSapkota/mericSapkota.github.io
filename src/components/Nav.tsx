import { useState, useEffect } from 'react'

type Page = 'home' | 'projects' | 'writeups' | 'blog' | 'contact'

const LINKS: { href: string; label: string; key: Page }[] = [
  { href: '/', label: 'HOME', key: 'home' },
  { href: '/projects', label: 'PROJECTS', key: 'projects' },
  { href: '/writeups', label: 'CTF LOG', key: 'writeups' },
  { href: '/blog', label: 'BLOG', key: 'blog' },
  { href: '/contact', label: 'CONTACT', key: 'contact' },
]

export default function Nav({ current = 'home' }: { current?: Page }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <nav className="chamfer-lg flex flex-col md:flex-row md:items-center md:justify-between border-[3px] border-ink bg-cream px-5 py-3.5 shadow-[5px_5px_0_var(--color-ink)]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <a
          href="/"
          className="font-display text-sm tracking-wide text-ink no-underline hover:text-ink"
        >
          0xm3r1c
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          className="flex md:hidden items-center justify-center w-9 h-9 border-2 border-ink bg-cream shadow-[2px_2px_0_var(--color-ink)] hover:bg-parchment active:translate-x-[1px] active:translate-y-[1px] text-ink focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="2" y="3.5" width="16" height="2.5" />
              <rect x="2" y="8.75" width="16" height="2.5" />
              <rect x="2" y="14" width="16" height="2.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex md:items-center md:gap-4 lg:gap-5">
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
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="flex flex-col gap-1 border-t-2 border-ink/20 pt-3 mt-3 w-full md:hidden"
        >
          {LINKS.map(({ href, label, key }) => {
            const active = key === current
            return (
              <a
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`flex items-center border-l-[3px] px-3 py-2 font-body text-2xl no-underline transition-colors ${
                  active
                    ? 'border-red bg-parchment text-red hover:text-red font-bold'
                    : 'border-transparent text-ink hover:border-ink hover:bg-parchment/60 hover:text-red-dark'
                }`}
              >
                {active && <span className="mr-2 text-red">&gt;</span>}
                {label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
