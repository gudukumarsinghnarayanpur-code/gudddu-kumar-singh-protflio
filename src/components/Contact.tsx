import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';

type Status = 'idle' | 'success' | 'error';

const EMAIL = 'gudddukumarsingh62@gmail.com';
const PHONE = '7061837526';
const PHONE_LINK = '+917061837526';
const WHATSAPP = 'https://wa.me/917061837526';
const LOCATION = 'Patna, Bihar, India';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
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
    if (!form.phone.trim()) {
      e.phone = 'Please enter your mobile number.';
    } else if (!/^\+?[\d\s()-]{10,16}$/.test(form.phone.trim())) {
      e.phone = 'Please enter a valid mobile number.';
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

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nMobile: ${form.phone.trim()}\n\n${form.message.trim()}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus('success');
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
              href={`tel:${PHONE_LINK}`}
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-600/15 text-electric-400">
                <Phone size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/40">Mobile</span>
                <span className="block truncate text-sm font-semibold text-white group-hover:text-electric-300">
                  {PHONE}
                </span>
              </span>
            </a>

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
              href={WHATSAPP}
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
                  Chat on WhatsApp
                </span>
              </span>
            </a>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-600/15 text-electric-400">
                <MapPin size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-white/40">Location</span>
                <span className="block truncate text-sm font-semibold text-white">
                  {LOCATION}
                </span>
              </span>
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
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="7061837526"
                  className={fieldClass('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.phone}
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
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-glow w-full">
                Send Message <Send size={18} />
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  <CheckCircle2 size={16} /> Your email app should open with your message ready to send.
                </div>
              )}
              {status === 'error' && Object.keys(errors).length > 0 && (
                <p className="sr-only" role="alert">Please correct the highlighted fields.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
