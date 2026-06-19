import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiUsers, HiPuzzlePiece } from 'react-icons/hi2'
import { about } from '../data/content'
import SectionHeading from './SectionHeading'

const icons = [HiAcademicCap, HiLightBulb, HiUsers, HiPuzzlePiece]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 · About Me"
          title="The person behind the pixels"
        />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-ink-300 text-base sm:text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 transition-colors hover:border-primary/30"
                >
                  <Icon className="text-primary mb-3" size={24} />
                  <p className="font-display font-semibold text-white text-sm leading-snug">
                    {item.label}
                  </p>
                  <p className="text-ink-400 text-xs mt-1">{item.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
