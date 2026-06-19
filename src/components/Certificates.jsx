import { motion } from 'framer-motion'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { certificates } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 · Certificates"
          title="Always learning, always shipping"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 transition-colors hover:border-primary/30"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <HiOutlineAcademicCap className="text-primary" size={22} />
              </div>
              <p className="font-display font-semibold text-white leading-snug">{cert.title}</p>
              <p className="text-ink-400 text-sm mt-2">{cert.issuer}</p>
              <p className="font-mono text-xs text-accent mt-3">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
