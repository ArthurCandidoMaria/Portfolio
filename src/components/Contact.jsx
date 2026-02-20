import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { personalInfo } from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact" className="section-container pb-20">
      <SectionTitle>Contact</SectionTitle>
      <div className="panel">
        <p className="mb-6 max-w-3xl text-industrial-textMuted">
          Open to collaborations in AI, data science, industrial automation, and software development projects.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <a href={`mailto:${personalInfo.email}`} className="min-w-0 rounded-lg border border-industrial-line bg-industrial-graphite p-4 text-sm transition-colors hover:border-industrial-accentBlue">
            <p className="mb-1 flex items-center gap-2 font-semibold text-white"><Mail size={16} className="text-industrial-accentBlue" /> Email</p>
            <p className="break-all text-industrial-text">{personalInfo.email}</p>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="min-w-0 rounded-lg border border-industrial-line bg-industrial-graphite p-4 text-sm transition-colors hover:border-industrial-accentBlue">
            <p className="mb-1 flex items-center gap-2 font-semibold text-white"><Linkedin size={16} className="text-industrial-accentBlue" /> LinkedIn</p>
            <p className="text-industrial-text">Visit profile</p>
          </a>
          <div className="min-w-0 rounded-lg border border-industrial-line bg-industrial-graphite p-4 text-sm">
            <p className="mb-1 flex items-center gap-2 font-semibold text-white"><Phone size={16} className="text-industrial-accentBlue" /> Phone</p>
            <p className="break-words text-industrial-text">{personalInfo.phone}</p>
          </div>
          <div className="min-w-0 rounded-lg border border-industrial-line bg-industrial-graphite p-4 text-sm">
            <p className="mb-1 flex items-center gap-2 font-semibold text-white"><MapPin size={16} className="text-industrial-accentBlue" /> Location</p>
            <p className="break-words text-industrial-text">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
