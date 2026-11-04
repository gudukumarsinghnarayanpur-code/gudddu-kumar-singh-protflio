import { ArrowDown, Send, Sparkles } from 'lucide-react';
import { STATS } from '@/data/content';

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="grid-pattern absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-10 -z-10 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <div className="reveal text-center lg:text-left">
          <span className="section-eyebrow mx-auto lg:mx-0">
            <Sparkles size={14} /> Digital Marketing Expert
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient-blue">Pramod</span>
            <br className="hidden sm:block" /> Kumar Singh
          </h1>

          <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            I Help Businesses Grow With Digital Marketing.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 lg:mx-0">
            A passionate digital marketing learner focused on performance marketing —
            running structured Meta and Google Ads campaigns, measuring everything in GA4,
            and turning data into decisions that grow businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button onClick={() => go('#projects')} className="btn-glow">
              View My Work <ArrowDown size={18} />
            </button>
            <button onClick={() => go('#contact')} className="btn-ghost">
              Contact Me <Send size={16} />
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-lg">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass glass-hover rounded-2xl px-4 py-4 text-center lg:text-left"
              >
                <dt className="text-2xl font-bold text-gradient-blue">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-white/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — profile photo */}
        <div className="reveal flex justify-center lg:justify-end" data-delay="150">
          <div className="relative animate-float">
            {/* glow rings */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-electric-600/25 blur-3xl" />
            <div className="absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-b from-electric-600/60 to-transparent" />

            <div className="group relative h-[380px] w-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 shadow-glow-lg sm:h-[460px] sm:w-[360px]">
              {/* Replace /images/profile.jpg with your own photo at public/images/profile.jpg */}
              <img
                src="/images/profile.jpg"
                alt="Pramod Kumar Singh — Digital Marketing Learner"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = 'none';
                  img.parentElement?.classList.add('profile-placeholder');
                }}
              />
              {/* gradient overlay for legibility if photo is busy */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

              {/* floating tag */}
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl px-4 py-3">
                <p className="text-sm font-semibold text-white">Pramod Kumar Singh</p>
                <p className="text-xs text-electric-300">Performance Marketing Enthusiast</p>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -right-4 top-8 hidden animate-pulse-glow rounded-2xl border border-electric-600/40 bg-ink-900/90 px-4 py-3 backdrop-blur sm:block">
              <p className="font-mono text-xs text-white/50">Open to work</p>
              <p className="text-sm font-bold text-electric-300">Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => go('#about')}
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
