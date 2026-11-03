import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
        <Projects />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
