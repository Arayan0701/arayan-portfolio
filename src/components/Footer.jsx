import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { profile } from '../data/content'

const socials = [
  { icon: FaLinkedinIn, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: HiOutlineEnvelope, href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={scrollTop}
          className="font-display text-lg font-semibold text-white focus-ring rounded"
        >
          Arayan<span className="text-primary">.</span>
        </button>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full glass text-ink-400 hover:text-primary hover:border-primary/40 transition-colors focus-ring"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        <p className="text-ink-500 text-sm font-mono text-center sm:text-right">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
