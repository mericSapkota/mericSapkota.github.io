export default function SiteFooter() {
  return (
    <footer className="mt-3 flex flex-wrap justify-between gap-3 border-t-[3px] border-ink pt-5 text-base">
      <span>&copy; {new Date().getFullYear()} 0xm3r1c</span>
      <a href="/contact">Get in touch &rarr;</a>
    </footer>
  )
}
