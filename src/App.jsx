import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Languages from './components/Languages'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-industrial-black text-industrial-text selection:bg-industrial-accentBlue/30">
      <MouseTrail />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-[size:36px_36px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.10),transparent_35%)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Languages />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
