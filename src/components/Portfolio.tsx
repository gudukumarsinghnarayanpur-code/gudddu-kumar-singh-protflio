import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { PORTFOLIO } from '@/data/content';

const CATEGORIES = ['All', 'Ad Creatives', 'Social Posters', 'Marketing Banners', 'Campaign Screenshots', 'Website Projects'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">My Portfolio</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Creative <span className="text-gradient-blue">work</span>
          </h2>
          <p className="mt-5 text-white/60">
            A gallery of ad creatives, social posters, marketing banners, campaign
            screenshots and website projects. These are placeholders you can replace with
            your own work.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-electric-600 text-white shadow-glow-sm'
                  : 'border border-white/10 bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={item.title + i}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850"
              data-delay={i * 60}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.src = '/images/profile.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-ink-950/60 backdrop-blur">
                    <Maximize2 size={18} className="text-white" />
                  </span>
                </div>
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-electric-300">
                  {item.category}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">{item.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
