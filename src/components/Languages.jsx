import { Languages as LanguagesIcon } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { languages } from '../data/portfolioData'

function Languages() {
  return (
    <section id="languages" className="section-container">
      <SectionTitle>Languages</SectionTitle>
      <div className="panel">
        <div className="mb-5 flex items-center gap-2 text-industrial-accentBlue"><LanguagesIcon size={20} /><p className="font-display text-lg">Communication Profile</p></div>
        <div className="space-y-4">
          {languages.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="min-w-0 break-words text-white">{item.name}</span>
                <span className="ml-3 text-right text-industrial-textMuted">{item.level}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-industrial-line/50">
                <div className="h-2 rounded-full bg-industrial-accentBlue transition-all duration-1000" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
