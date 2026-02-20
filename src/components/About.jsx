import SectionTitle from './SectionTitle'
import { personalInfo, summary } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section-container">
      <SectionTitle>About Me</SectionTitle>
      <div className="panel grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <p className="whitespace-pre-line break-words leading-relaxed text-industrial-text">{summary}</p>
        <div className="min-w-0 rounded-lg border border-industrial-line bg-industrial-graphite p-4 text-sm">
          <p className="mb-3 font-display text-lg text-white">Profile Data</p>
          <div className="space-y-2">
            <p className="break-words"><span className="text-industrial-textMuted">Name:</span> {personalInfo.name}</p>
            <p><span className="text-industrial-textMuted">Date of Birth:</span> {personalInfo.birthDate}</p>
            <p className="break-words"><span className="text-industrial-textMuted">Location:</span> {personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
