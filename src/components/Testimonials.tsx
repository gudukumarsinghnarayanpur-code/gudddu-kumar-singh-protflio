const testimonials = [
  {
    quote:
      'Pramod brings a disciplined, analytical mindset to marketing work and is eager to learn the right levers behind growth.',
    name: 'Mentor Feedback',
    role: 'Learning & Growth Perspective',
  },
  {
    quote:
      'The right mix of curiosity and structure stands out here — especially in approach, testing mindset, and attention to results.',
    name: 'Peer Review',
    role: 'Digital Marketing Practice',
  },
  {
    quote:
      'Even in early-stage learning, the focus on campaign measurement and user understanding is clear and encouraging.',
    name: 'Learning Coach',
    role: 'Performance Marketing Trajectory',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            What people <span className="text-gradient-blue">notice</span>
          </h2>
          <p className="mt-5 text-white/60">
            Early feedback reflects a practical, detail-oriented growth mindset shaped by curiosity and accountability.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className="reveal glass rounded-3xl p-6"
              data-delay={index * 90}
            >
              <p className="text-lg leading-relaxed text-white/80">“{item.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/50">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
