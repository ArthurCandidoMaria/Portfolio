import { personalInfo } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-industrial-line bg-industrial-graphite/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center text-sm text-industrial-textMuted sm:px-6 lg:px-8">
        <p className="font-display tracking-wide text-industrial-text">{personalInfo.name}</p>
        <p>Portfolio</p>
      </div>
    </footer>
  )
}

export default Footer
