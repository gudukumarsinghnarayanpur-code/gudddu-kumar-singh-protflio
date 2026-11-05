import { ArrowUp, Heart } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

const EMAIL = 'gudddukumarsingh62@gmail.com';
const WHATSAPP = 'https://wa.me/917061837526';

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <button onClick={() => go('#home')} className="flex items-center gap-2.5 text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-electric-600 font-mono text-white shadow-glow-sm">
                P
              </span>
              Pramod<span className="text-electric-400">.</span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Digital Marketing Learner helping businesses grow with data-driven campaigns
              across Meta and Google.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm font-medium text-white/60 transition-colors hover:text-electric-300"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white/60 transition-colors hover:text-electric-300"
            >
              Email
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-electric-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Pramod Kumar Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            Built with <Heart size={12} className="text-electric-400" /> &amp; a lot of curiosity
          </p>
          <button
            onClick={() => go('#home')}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-electric-600/40 hover:text-white"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
