import { ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS } from '@/data/content';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-850 transition-all duration-500 hover:border-electric-600/40 hover:shadow-glow"
      data-delay={index * 90}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = '/images/profile.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-xs font-semibold text-electric-300 backdrop-blur">
          {project.tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-electric-600/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          Demo
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.points.map((p) => (
            <li
              key={p}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
            >
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-electric-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Case study coming soon
          <ArrowUpRight size={16} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">My Projects</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
              Campaigns I've <span className="text-gradient-blue">built</span>
            </h2>
            <p className="mt-5 text-white/60">
              A selection of demo marketing projects — each structured like a real campaign,
              using sample data and best-practice setup. Labels are clearly marked as demo.
            </p>
          </div>
          <p className="glass rounded-xl px-4 py-3 text-xs text-white/50">
            Demo projects — no live campaign results are claimed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
