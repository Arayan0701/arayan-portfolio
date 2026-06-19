import { motion } from 'framer-motion'
import { processSteps } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Design Process"
          title="How an idea becomes a product"
          description="Every project — big or small — moves through the same five stages, in this order, for a reason."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full glass-strong mb-5">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
