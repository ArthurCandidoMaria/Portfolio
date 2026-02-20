import { Music2, Headphones, Code2, BookOpen } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { hobbies } from '../data/portfolioData'

const hobbyIcons = {
  'Playing piano': Music2,
  'Listening to music': Headphones,
  Programming: Code2,
  Studying: BookOpen,
}

function Hobbies() {
  return (
    <section id="hobbies" className="section-container">
      <SectionTitle>Hobbies</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => {
          const Icon = hobbyIcons[hobby] ?? Code2
          return (
            <article key={hobby} className="panel flex min-w-0 items-center gap-3 transition-transform duration-300 hover:-translate-y-1">
              <Icon className="shrink-0 text-industrial-accentBlue" />
              <span className="break-words font-medium text-white">{hobby}</span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Hobbies
