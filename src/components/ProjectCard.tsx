import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const { name, blurb, tags, year, repo, demo, color = 'text-green' } = project
  return (
    <div className="flex flex-col gap-2 border-[3px] border-ink bg-cream p-5 shadow-[5px_5px_0_var(--color-ink)]">
      <div className="flex items-center justify-between gap-3">
        <span className={`font-display text-[9px] uppercase ${color}`}>Build</span>
        <span className="text-[15px] opacity-60">{year}</span>
      </div>
      <span className="font-display text-sm">{name}</span>
      <p className="m-0 flex-1 text-lg">{blurb}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border-2 border-ink bg-parchment px-2 py-0.5 text-sm lowercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-1 flex flex-wrap gap-4 text-lg">
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" className="underline">
            Code &rarr;
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="underline">
            Demo &rarr;
          </a>
        )}
      </div>
    </div>
  )
}
