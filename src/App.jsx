import { useRef } from 'react'
import { useReveal } from './hooks/useReveal'
import SystemBar from './components/SystemBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { StatusRibbon } from './components/TechChrome'
import Coverage from './components/Coverage'
import Benefits from './components/Benefits'
import Industries from './components/Industries'
import TechStackStrip from './components/TechLogos'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import About from './components/About'
import Trust from './components/Trust'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  const formRef = useRef(null)

  const scrollToForm = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <>
      <SystemBar />
      <Navbar onCtaClick={scrollToForm} />
      <Hero onCtaClick={scrollToForm} />
      <StatusRibbon />
      <Coverage />
      <Benefits />
      <Industries />
      <TechStackStrip />
      <HowItWorks />
      <Services />
      <About />
      <Trust />
      <Contact formRef={formRef} />
      <Footer />
    </>
  )
}
