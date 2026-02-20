import { Award } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { achievements } from '../data/portfolioData'

function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <SectionTitle>Achievements</SectionTitle>
      <div className="panel">
        <ul className="grid gap-3 md:grid-cols-2">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex min-w-0 items-start gap-3 rounded-md border border-industrial-line bg-industrial-graphite p-4">
              <Award size={18} className="mt-0.5 text-industrial-accentOrange" />
              <span className="break-words text-sm text-industrial-text">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
