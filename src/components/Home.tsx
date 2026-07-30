const STATS = [
  { value: 6, label: "Projects", color: "text-green" },
  { value: 12, label: "Writeups", color: "text-blue" },
  { value: 5, label: "Categories", color: "text-red" },
  { value: 4, label: "Years", color: "text-gold" },
] as const;

const STAGES = [
  {
    href: "/projects",
    kicker: "BUILD LOG",
    kickerColor: "text-green",
    title: "Projects",
    description: "Tools, apps and experiments — from weekend hacks to things people actually use.",
    footer: "6 entries →",
  },
  {
    href: "/writeups",
    kicker: "QUEST LOG",
    kickerColor: "text-blue",
    title: "CTF Writeups",
    description: "Walkthroughs from competitions — web, pwn, crypto, forensics and misc, solved and explained.",
    footer: "12 entries →",
  },
  {
    href: "/blog",
    kicker: "DEV DIARY",
    kickerColor: "text-gold",
    title: "Blog",
    description: "Notes on security, software and everything in between.",
    footer: "Latest posts →",
  },
] as const;

export default function Home() {
  return (
    <>
      <section
        className="relative mt-6 overflow-hidden border-[3px] border-ink bg-parchment shadow-[6px_6px_0_var(--color-ink)]"
        style={{
          // The design's own hills tile, tiled across the bottom as a pixel
          // landscape. (The referenced pixel-hero-scene.png ships blank.)
          backgroundImage: "url('/assets/pixel-tile-hills.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom left",
          backgroundSize: "128px 80px",
        }}
      >
        <div className="pt-11 pr-8 pb-14 pl-8">
          <span className="mb-4.5 inline-block border-2 border-ink bg-gold px-2.5 py-[5px] font-display text-[10px] text-ink">
            Meric Sapkota — Blockchain, Spring Boot, React, Security Researcher
          </span>
          <h1 className="m-0 font-display text-[clamp(26px,4.6vw,42px)] leading-normal [text-shadow:3px_3px_0_var(--color-cream)]">
            0xm3r1c
          </h1>
          <p className="m-0 mt-5 max-w-[32ch] text-[26px] leading-[1.4]">
            Security researcher &amp; builder. I break things on purpose, write down how, and ship the tools I wish
            existed.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="chamfer-md inline-flex items-center border-[3px] border-ink bg-green px-4.5 py-3.5 font-display text-xs text-cream no-underline hover:text-cream shadow-[4px_4px_0_var(--color-ink)]"
            >
              VIEW PROJECTS
            </a>
            <a
              href="/writeups"
              className="chamfer-md inline-flex items-center border-[3px] border-ink bg-cream px-4.5 py-3.5 font-display text-xs text-ink no-underline hover:text-ink shadow-[4px_4px_0_var(--color-ink)]"
            >
              CTF LOG
            </a>
          </div>
        </div>
      </section>

      <section className="py-10" aria-label="0xm3r1c, by the numbers">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-[3px] border-ink bg-cream p-4 text-center shadow-[4px_4px_0_var(--color-ink)]"
            >
              <p className={`m-0 font-display text-2xl ${stat.color}`}>{stat.value}</p>
              <p className="m-0 mt-2 text-base tracking-[1px] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-4 pb-10">
        <span className="mb-5 block font-display text-xs text-red-dark">SELECT A STAGE</span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STAGES.map((stage) => (
            <a
              key={stage.href}
              href={stage.href}
              className="flex flex-col gap-2 border-[3px] border-ink bg-cream p-5 text-ink no-underline hover:text-ink shadow-[5px_5px_0_var(--color-ink)]"
            >
              <span className={`font-display text-[9px] ${stage.kickerColor}`}>{stage.kicker}</span>
              <span className="font-display text-sm">{stage.title}</span>
              <p className="m-0 flex-1 text-lg">{stage.description}</p>
              <span className="text-[15px] text-ink opacity-70">{stage.footer}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
