import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
        Boolean,
      ) as HTMLElement[];
      const offset = window.innerHeight * 0.4;
      let current = '#home';
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top < offset) current = '#' + s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        <button
          onClick={() => go('#home')}
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-electric-600 font-mono text-white shadow-glow-sm transition-transform group-hover:scale-105">
            P
          </span>
          <span className="hidden sm:block">
            Pramod<span className="text-electric-400">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {active === link.href && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-electric-600/15 ring-1 ring-electric-600/30" />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => go('#contact')} className="btn-glow py-2.5 text-sm">
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-400 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === link.href
                    ? 'bg-electric-600/15 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => go('#contact')} className="btn-glow mt-2 w-full py-3 text-sm">
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
