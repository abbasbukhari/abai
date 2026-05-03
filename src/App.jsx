import { useRef } from "react";
import { useReveal } from "./hooks/useReveal";
import SystemBar from "./components/SystemBar";
import Navbar from "./components/Navbar";
import HeroSimple from "./components/HeroSimple";
import ValueSection from "./components/ValueSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import IndustriesSection from "./components/IndustriesSection";
import TechLogos from "./components/TechLogos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  const formRef = useRef(null);

  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
  };

  return (
    <>
      <SystemBar />
      <Navbar onCtaClick={scrollToForm} />
      <HeroSimple onCtaClick={scrollToForm} />
      <ValueSection />
      <ProcessSection />
      <PricingSection />
      <IndustriesSection />
      <TechLogos />
      <Contact formRef={formRef} />
      <Footer />
    </>
  );
}
