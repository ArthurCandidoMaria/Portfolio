import { useRef } from 'react'
import { ArrowDownRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import bgImage from "../assets/construction-site-new-modern-architecture-night.jpg"

function Hero() {
  const sectionRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1.16, 1])
  const snapshotScale = useTransform(scrollYProgress, [0, 1], [1.28, 1])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85], [0.95, 0.35, 0])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 28])

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[calc(100svh-82px)] w-full items-center overflow-hidden px-4 py-6 sm:min-h-[calc(100svh-88px)] sm:px-6 sm:py-8 lg:px-8 lg:py-10"
      style={{ scale: shouldReduceMotion ? 1 : heroScale }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 border-y border-industrial-line/60"
        style={{
          opacity: shouldReduceMotion ? 0 : frameOpacity,
          scale: shouldReduceMotion ? 1 : frameScale,
          y: shouldReduceMotion ? 0 : frameY,
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.22), transparent 42%),
            radial-gradient(circle at 82% 86%, rgba(249, 115, 22, 0.14), transparent 40%),
            linear-gradient(180deg, rgba(31, 41, 51, 0.82) 0%, rgba(17, 24, 39, 0.9) 48%, rgba(10, 12, 15, 0.97) 100%),
            url(${bgImage})
            `,
          backgroundSize: 'cover, cover, cover, cover',
          backgroundPosition: 'center, center, center, center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'screen, screen, normal, normal',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl origin-top gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="min-w-0">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-industrial-accentOrange">
            Portfolio
          </p>
          <h1 className="mb-4 break-words font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="max-w-2xl break-words text-base text-industrial-textMuted sm:text-lg">{personalInfo.role}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="metal-line rounded-md border border-industrial-accentBlue/50 bg-industrial-accentBlue/10 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="rounded-md border border-industrial-line bg-industrial-graphite px-5 py-3 text-sm font-semibold text-industrial-text transition-colors hover:border-industrial-accentOrange hover:text-white"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-industrial-text sm:grid-cols-2">
            <div className="flex min-w-0 items-center gap-2 break-words"><MapPin size={16} className="shrink-0 text-industrial-accentBlue" /> <span className="break-words">{personalInfo.location}</span></div>
            <div className="flex min-w-0 items-center gap-2 break-words"><Phone size={16} className="shrink-0 text-industrial-accentBlue" /> <span className="break-words">{personalInfo.phone}</span></div>
            <a className="flex min-w-0 items-center gap-2 break-all hover:text-industrial-accentBlue" href={`mailto:${personalInfo.email}`}><Mail size={16} className="shrink-0 text-industrial-accentBlue" /> <span className="truncate sm:whitespace-normal sm:break-all">{personalInfo.email}</span></a>
            <a className="flex min-w-0 items-center gap-2 break-words hover:text-industrial-accentBlue" href={personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} className="shrink-0 text-industrial-accentBlue" /> LinkedIn</a>
          </div>
        </div>

        <motion.div
          className="panel min-w-0 animate-floatSlow"
          style={{ scale: shouldReduceMotion ? 1 : snapshotScale }}
        >
          <div className="mb-4 flex items-center justify-between border-b border-industrial-line pb-4">
            <p className="font-display text-xl font-semibold text-white">System Snapshot</p>
            <ArrowDownRight className="text-industrial-accentOrange" />
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start justify-between gap-3 border-b border-industrial-line/40 pb-2"><span className="text-industrial-textMuted">Profile</span><span className="text-right">Mechatronics Tecnician</span></div>
            <div className="flex items-start justify-between gap-3 border-b border-industrial-line/40 pb-2"><span className="text-industrial-textMuted">Focus</span><span className="text-right">AI + Automation</span></div>
            <div className="flex items-start justify-between gap-3"><span className="text-industrial-textMuted">Kaggle Engagement</span><span className="text-right">20+ Competitions</span></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
