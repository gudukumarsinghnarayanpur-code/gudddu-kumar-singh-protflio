import { BarChart3, Megaphone, MousePointer2, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Campaign Strategy',
    text: 'Audience planning, ad positioning, and funnel thinking built around measurable growth goals.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    text: 'Tracking setup, dashboard reviews, and performance interpretation to guide smarter decisions.',
  },
  {
    icon: MousePointer2,
    title: 'Landing Page Optimization',
    text: 'Clear messaging, stronger user journeys, and conversion-focused page improvements.',
  },
  {
    icon: Sparkles,
    title: 'Creative Testing',
    text: 'A/B testing for ad angles, hooks, offers, and visuals to improve campaign efficiency.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">My Services</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            How I can <span className="text-gradient-blue">help</span>
          </h2>
          <p className="mt-5 text-white/60">
            I focus on practical digital growth work that combines campaign setup,
            optimization, and clear measurement.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal glass glass-hover rounded-3xl p-6"
                data-delay={index * 80}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric-600/15 text-electric-300">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
