import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-industrial-line/70 bg-industrial-black/90 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-xl font-bold tracking-wider text-white sm:text-2xl">
          ACM<span className="text-industrial-accentBlue">.PORT</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-industrial-textMuted transition-colors hover:text-industrial-accentBlue"
            >
              {link.label}
            </a>
          ))}
        </nav>

      <button
          type="button"
          aria-label="Toggle Menu"
        className="shrink-0 rounded-md border border-industrial-line p-2 text-industrial-text md:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-industrial-line/70 bg-industrial-graphite px-4 py-4 md:hidden">
          <p className="mb-3 text-xs uppercase tracking-wider text-industrial-textMuted">{personalInfo.name}</p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-industrial-text transition-colors hover:text-industrial-accentBlue"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
