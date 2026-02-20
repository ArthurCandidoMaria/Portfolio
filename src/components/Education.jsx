import { GraduationCap } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { education } from '../data/portfolioData'

function Education() {
  return (
    <section id="education" className="section-container">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {education.map((item) => (
          <div key={`${item.program}-${item.period}`} className="panel min-w-0 border-l-2 border-l-industrial-accentBlue">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="text-industrial-accentBlue" />
              <h3 className="break-words font-display text-xl font-semibold text-white sm:text-2xl">{item.program}</h3>
            </div>
            <p className="break-words text-industrial-text">{item.institution}</p>
            <p className="mt-1 text-industrial-textMuted">{item.period}</p>
            <p className="mt-4 inline-flex rounded-full border border-industrial-accentOrange/50 bg-industrial-accentOrange/10 px-4 py-1 text-sm text-industrial-accentOrange">
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
