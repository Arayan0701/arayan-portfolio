import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiSparkles } from 'react-icons/hi'
import { profile } from '../data/content'

export default function Hero() {
  const sectionRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
  }

  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
      style={{ '--mx': '50%', '--my': '40%' }}
    >
      {/* Signature: cursor-follow ambient spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(245,158,11,0.10), transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(400px circle at var(--mx) var(--my), rgba(56,189,248,0.06), transparent 60%)',
        }}
      />

      {/* Static ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-8 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-primary"
            >
              <HiSparkles size={14} />
              Available for freelance &amp; internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-display text-xl sm:text-2xl text-accent font-medium"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-ink-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button onClick={() => scrollTo('#work')} className="btn-primary">
                View Portfolio
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 text-ink-500 text-sm font-mono"
            >
              <span>📍 {profile.location}</span>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative justify-self-center"
          >
            <div className="relative w-64 sm:w-80 md:w-full md:max-w-sm aspect-square">
              {/* Rotating dashed ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-white/5" />

              {/* Glow */}
              <div className="absolute inset-4 rounded-full bg-primary/20 blur-2xl" />

              {/* Image frame */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass shadow-glow">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?seed=Arayan-Savaliya&backgroundColor=0f172a"
                  alt="Portrait of Arayan Savaliya, Graphic Designer and UI/UX Designer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 glass-strong rounded-2xl px-4 py-3 shadow-glass"
              >
                <p className="font-display text-sm font-semibold text-white">2+ Years</p>
                <p className="text-[11px] text-ink-400 font-mono">Designing</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-500 hover:text-primary transition-colors focus-ring rounded"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <HiArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
