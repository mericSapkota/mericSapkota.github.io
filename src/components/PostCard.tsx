export interface PostCardProps {
  href: string
  kicker: string
  kickerColor?: string
  title: string
  dateLabel: string
  excerpt: string
  tags?: string[]
}

export default function PostCard({
  href,
  kicker,
  kickerColor = 'text-blue',
  title,
  dateLabel,
  excerpt,
  tags = [],
}: PostCardProps) {
  return (
    <a
      href={href}
      className="flex flex-col gap-2 border-[3px] border-ink bg-cream p-5 text-ink no-underline hover:text-ink shadow-[5px_5px_0_var(--color-ink)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`font-display text-[9px] uppercase ${kickerColor}`}>{kicker}</span>
        <span className="text-[15px] opacity-60">{dateLabel}</span>
      </div>
      <span className="font-display text-sm leading-relaxed">{title}</span>
      <p className="m-0 flex-1 text-lg">{excerpt}</p>
      {tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-ink bg-parchment px-2 py-0.5 text-sm lowercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}
