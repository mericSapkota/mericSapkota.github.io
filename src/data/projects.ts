export interface Project {
  name: string
  blurb: string
  tags: string[]
  year: number
  repo?: string
  demo?: string
  /** Accent for the card kicker — a Tailwind text-color class from the theme. */
  color?: string
}

// Add a project by appending an object here. The grid on /projects renders
// newest first (by `year`).
export const projects: Project[] = [
  {
    name: 'graphify',
    blurb: 'Turns any input — code, docs, papers — into a clustered knowledge graph with an HTML explorer.',
    tags: ['python', 'viz', 'llm'],
    year: 2026,
    repo: 'https://github.com/0xm3r1c/graphify',
    color: 'text-green',
  },
  {
    name: 'flagforge',
    blurb: 'A CTF challenge scaffolder — spins up isolated, deployable web/pwn boxes from a one-line spec.',
    tags: ['go', 'docker', 'ctf'],
    year: 2025,
    repo: 'https://github.com/0xm3r1c/flagforge',
    demo: 'https://flagforge.example.com',
    color: 'text-blue',
  },
  {
    name: 'bytescope',
    blurb: 'A tiny binary diff viewer for firmware — highlights changed regions across dumps in the browser.',
    tags: ['rust', 'wasm', 're'],
    year: 2025,
    repo: 'https://github.com/0xm3r1c/bytescope',
    color: 'text-red',
  },
  {
    name: 'headhunter',
    blurb: 'Scans a list of domains and grades their security headers, exporting a shareable report card.',
    tags: ['typescript', 'security'],
    year: 2024,
    repo: 'https://github.com/0xm3r1c/headhunter',
    color: 'text-gold',
  },
]
