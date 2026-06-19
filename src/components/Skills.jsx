import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaintBrush, HiDevicePhoneMobile, HiCodeBracket } from 'react-icons/hi2'
import { skills } from '../data/content'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  'Graphic Design': HiPaintBrush,
  'UI/UX Design': HiDevicePhoneMobile,
  Development: HiCodeBracket,
}

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink-300">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 · Skills"
          title="Tools I design and build with"
          description="A blend of visual craft, product thinking, and just enough code to make ideas real."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat]
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors focus-ring ${
                  isActive ? 'text-secondary' : 'text-ink-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  {cat}
                </span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-7 glass rounded-3xl p-8 sm:p-10"
        >
          {skills[active].map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
