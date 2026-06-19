import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiArrowUpRight,
  HiCheckCircle,
} from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { profile } from '../data/content'
import SectionHeading from './SectionHeading'

const contactLinks = [
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'in/arayansavaliya',
    href: profile.linkedin,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'arayansavaliya',
    href: profile.github,
  },
  {
    icon: HiOutlineMapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's design something worth remembering"
          description="Have a project, an internship opening, or just want to talk design? Reach out — I read every message."
        />

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Contact info */}
          <div className="space-y-3">
            {contactLinks.map((item, i) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex items-center gap-4 glass rounded-2xl p-4 transition-colors hover:border-primary/30"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <p className="text-xs text-ink-500 font-mono uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-medium truncate">{item.value}</p>
                  </span>
                  {item.href && (
                    <HiArrowUpRight
                      className="ml-auto text-ink-500 group-hover:text-primary transition-colors shrink-0"
                      size={16}
                    />
                  )}
                </motion.div>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block focus-ring rounded-2xl"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <HiCheckCircle className="text-primary mb-4" size={48} />
                <h3 className="font-display text-xl font-semibold text-white">Message sent</h3>
                <p className="text-ink-400 text-sm mt-2 max-w-xs">
                  Thanks for reaching out — I'll get back to you within a day or two.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary font-medium hover:underline focus-ring rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-ink-400 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-ink-500 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-ink-400 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-ink-500 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-ink-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me a bit about your project..."
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-ink-500 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
