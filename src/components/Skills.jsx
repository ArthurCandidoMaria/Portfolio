import { Code2, Cpu, UsersRound } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { skills } from '../data/portfolioData'

const metricBars = [
  { label: 'AI & Data Science', value: 92, color: 'bg-industrial-accentBlue' },
  { label: 'Industrial Problem Solving', value: 88, color: 'bg-industrial-accentOrange' },
  { label: 'Software Development', value: 90, color: 'bg-industrial-accentBlue' },
]

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="panel min-w-0">
          <p className="mb-4 flex items-center gap-2 font-display text-xl text-white"><Code2 size={20} className="text-industrial-accentBlue" /> Programming</p>
          <div className="flex flex-wrap gap-2">{skills.programming.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
        </div>

        <div className="panel min-w-0">
          <p className="mb-4 flex items-center gap-2 break-words font-display text-xl text-white"><Cpu size={20} className="shrink-0 text-industrial-accentOrange" /> AI & Data Science</p>
          <div className="flex flex-wrap gap-2">{skills.ai.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
        </div>

        <div className="panel min-w-0">
          <p className="mb-4 flex items-center gap-2 font-display text-xl text-white"><UsersRound size={20} className="text-industrial-accentBlue" /> Soft Skills</p>
          <div className="space-y-2 text-sm text-industrial-text">{skills.soft.map((skill) => <p key={skill} className="rounded-md border border-industrial-line bg-industrial-graphite p-2">{skill}</p>)}</div>
        </div>
      </div>

      <div className="mt-6 panel">
        <p className="mb-4 font-display text-xl text-white">Operational Skill Metrics</p>
        <div className="space-y-4">
          {metricBars.map((metric) => (
            <div key={metric.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{metric.label}</span>
                <span className="text-industrial-textMuted">{metric.value}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-industrial-line/50">
                <div
                  className={`h-2 rounded-full ${metric.color} transition-all duration-1000`}
                  style={{ width: `${metric.value}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
