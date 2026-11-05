import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const { ref } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/917061837526?text=Hi%20Pramod%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Pramod on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-[#073b1b] shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <MessageCircle size={21} />
        WhatsApp Me
      </a>
    </div>
  );
}

export default App;
