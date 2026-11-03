import { useState, type FormEvent } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'success' | 'error';

const EMAIL = 'pramod.kumar.singh@example.com'; // replace with your email
const WHATSAPP = '+91 00000 00000'; // replace with your WhatsApp
const LINKEDIN = 'https://www.linkedin.com/in/pramod-kumar-singh'; // replace with your LinkedIn

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) {
      e.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    // No backend is wired here yet. This simulates a successful submission.
    // Connect to a form service (e.g. Formspree) or an edge function to make it live.
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const fieldClass = (field: string) =>
    `w-full rounded-xl border bg-ink-900/80 px-4 py-3 text-white placeholder-white/35 outline-none transition-all duration-300 focus:border-electric-600/60 focus:ring-2 focus:ring-electric-600/20 ${
      errors[field] ? 'border-red-500/60' : 'border-white/10'
    }`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-electric-600/15 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Let's work <span className="text-gradient-blue">together</span>
          </h2>
          <p className="mt-5 text-white/60">
            Have a project, role, or freelance opportunity? Send a message — I usually reply
            within a day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <div className="reveal space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-600/15 text-electric-400">
                <Mail size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/40">Email</span>
                <span className="block truncate text-sm font-semibold text-white group-hover:text-electric-300">
                  {EMAIL}
                </span>
              </span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-600/15 text-electric-400">
                <MessageSquare size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/40">WhatsApp</span>
                <span className="block truncate text-sm font-semibold text-white group-hover:text-electric-300">
                  {WHATSAPP}
                </span>
              </span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-600/15 text-electric-400">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/40">LinkedIn</span>
                <span className="block truncate text-sm font-semibold text-white group-hover:text-electric-300">
                  pramod-kumar-singh
                </span>
              </span>
            </a>

            <div className="glass rounded-2xl p-5 text-sm text-white/50">
              Note: Replace the email, WhatsApp and LinkedIn links at the top of the Contact
              section with your real details before sharing the site.
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal glass rounded-3xl p-6 sm:p-8"
            data-delay="120"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Recruiter"
                  className={fieldClass('name')}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                  className={fieldClass('message') + ' resize-none'}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-glow w-full">
                Send Message <Send size={18} />
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  <CheckCircle2 size={16} /> Thanks! Your message has been recorded.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
