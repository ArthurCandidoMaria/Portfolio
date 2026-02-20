import { BriefcaseBusiness } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { experiences } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((exp) => (
          <article
            key={exp.title}
            className="group panel relative min-w-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-industrial-accentBlue/60"
          >
            <div className="mb-4 flex items-center justify-between">
              <BriefcaseBusiness className="text-industrial-accentBlue" />
              <span className="text-xs uppercase tracking-wider text-industrial-textMuted">{exp.period}</span>
            </div>
            <h3 className="mb-2 break-words font-display text-xl font-semibold text-white">{exp.title}</h3>
            <p className="mb-4 text-sm text-industrial-accentOrange">Institution: {exp.institution}</p>
            <ul className="space-y-2 text-sm text-industrial-text">
              {exp.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-industrial-accentBlue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_45%)]" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
