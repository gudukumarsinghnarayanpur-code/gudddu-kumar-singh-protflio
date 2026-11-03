import { Skill, SKILLS } from '@/data/content';
import BrandLogo from './BrandLogo';

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div
      className="reveal glass glass-hover group relative flex flex-col items-start overflow-hidden rounded-2xl p-6"
      data-delay={index * 80}
    >
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
        style={{ background: skill.color }}
      />
      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-ink-900 transition-transform duration-500 group-hover:scale-110 group-hover:border-electric-600/40">
        <BrandLogo icon={skill.icon} color={skill.color} size={32} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{skill.blurb}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-600/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">My Skills</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Tools I'm <span className="text-gradient-blue">mastering</span>
          </h2>
          <p className="mt-5 text-white/60">
            The platforms and disciplines I work with to plan, run, and measure modern
            digital marketing campaigns.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
