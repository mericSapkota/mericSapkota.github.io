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
    name: "Jumla's Apple",
    blurb: 'Blockchain-based supply chain management for tracing produce from farm to shelf.',
    tags: ['java', 'blockchain'],
    year: 2026,
    repo: 'https://github.com/mericSapkota/Jumla-s-Apple---Blockchain-Based-Supply-Chain-Management',
    color: 'text-green',
  },
  {
    name: 'Simple E-commerce',
    blurb: 'A storefront built with Zustand for state, React Hook Form for checkout, Postgres, and Tailwind.',
    tags: ['typescript', 'zustand', 'postgres'],
    year: 2026,
    repo: 'https://github.com/mericSapkota/Simple-E-commerce-',
    color: 'text-blue',
  },
  {
    name: 'e-com-backend',
    blurb: 'The API server behind the e-commerce storefront — auth, catalog and order endpoints.',
    tags: ['typescript', 'api'],
    year: 2026,
    repo: 'https://github.com/mericSapkota/e-com-backend',
    color: 'text-gold',
  },
  {
    name: 'NepaSoles',
    blurb: 'A full-stack marketplace app — React/Vite frontend backed by a dedicated API.',
    tags: ['react', 'vite'],
    year: 2025,
    repo: 'https://github.com/mericSapkota/NepaSoles',
    demo: 'https://nepa-soles.vercel.app',
    color: 'text-red',
  },
  {
    name: 'Employee Management System',
    blurb: 'A full-stack CRUD app for managing employee records — Spring Boot API, React frontend.',
    tags: ['java', 'spring-boot', 'react'],
    year: 2025,
    repo: 'https://github.com/mericSapkota/EmployeeManagementSystem-Frontend-React',
    color: 'text-green',
  },
  {
    name: 'Google Clone',
    blurb: 'A Google Search UI clone built on Next.js and Tailwind, wired to the real Google Search API.',
    tags: ['nextjs', 'tailwindcss'],
    year: 2025,
    repo: 'https://github.com/mericSapkota/Google-Clone',
    demo: 'https://google-clone-two-smoky.vercel.app',
    color: 'text-blue',
  },
  {
    name: 'Java Chat Application',
    blurb: 'A chat app on Spring Boot and MySQL, with JPA for persistence and BCrypt-hashed auth.',
    tags: ['java', 'spring-boot', 'mysql'],
    year: 2024,
    repo: 'https://github.com/mericSapkota/Java-Chat-Application-SpringBoot-Mysql',
    color: 'text-gold',
  },
]
