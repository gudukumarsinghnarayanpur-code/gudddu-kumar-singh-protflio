import { GraduationCap, Rocket, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Photo */}
        <div className="reveal flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-electric-600/20 blur-2xl" />
            <div className="relative h-[440px] w-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 sm:h-[520px] sm:w-[400px]">
              <img
                src="/images/profile.jpg"
                alt="Pramod Kumar Singh — About"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('profile-placeholder');
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            {/* decorative card */}
            <div className="absolute -bottom-6 -right-6 hidden glass rounded-2xl px-5 py-4 sm:block">
              <p className="font-mono text-xs text-white/50">Focus</p>
              <p className="text-sm font-bold text-white">Performance Marketing</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="reveal" data-delay="120">
          <span className="section-eyebrow">
            <Target size={14} /> About Me
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Turning curiosity into <span className="text-gradient-blue">campaigns</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            I'm Pramod Kumar Singh, a digital marketing learner focused on performance
            marketing. I enjoy breaking down how ads reach people, what makes them click,
            and how every rupee of ad spend translates into measurable results.
          </p>
          <p className="mt-4 leading-relaxed text-white/60">
            With a background in B.Sc Physics, I bring an analytical mindset to marketing —
            treating campaigns like experiments, testing hypotheses, reading the data, and
            improving from there. I'm currently building hands-on skills in Google Ads, Meta
            Ads, and GA4.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="glass glass-hover rounded-2xl p-5">
              <GraduationCap className="text-electric-400" size={26} />
              <h3 className="mt-3 font-semibold text-white">Education</h3>
              <p className="mt-1 text-sm text-white/60">B.Sc in Physics</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-5">
              <Rocket className="text-electric-400" size={26} />
              <h3 className="mt-3 font-semibold text-white">Interest</h3>
              <p className="mt-1 text-sm text-white/60">Performance Marketing</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-5">
              <Target className="text-electric-400" size={26} />
              <h3 className="mt-3 font-semibold text-white">Goal</h3>
              <p className="mt-1 text-sm text-white/60">Growth & ROI</p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {['Google Ads', 'Meta Ads', 'GA4', 'Conversion Tracking'].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
