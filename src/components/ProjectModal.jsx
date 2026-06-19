import { AnimatePresence, motion } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-base/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-strong rounded-3xl shadow-glass"
          >
            <button
              onClick={onClose}
              className="fixed sm:sticky top-6 sm:top-4 right-6 sm:right-4 sm:float-right sm:mr-4 sm:mt-4 w-10 h-10 flex items-center justify-center rounded-full glass text-white hover:bg-primary hover:text-secondary transition-colors z-20 focus-ring"
              aria-label="Close project details"
            >
              <HiXMark size={20} />
            </button>

            <div className="px-6 sm:px-10 pb-10 pt-16 sm:pt-4">
              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8">
                <ProjectVisual id={project.image} color={project.color} />
              </div>

              <p className="eyebrow mb-2">{project.category} · {project.year}</p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-accent font-medium mt-1">{project.subtitle}</p>

              <p className="text-ink-300 leading-relaxed mt-6">{project.description}</p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/5">
                  <p className="font-display text-sm font-semibold text-primary mb-2">The Problem</p>
                  <p className="text-ink-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/5">
                  <p className="font-display text-sm font-semibold text-accent mb-2">The Solution</p>
                  <p className="text-ink-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-display text-sm font-semibold text-white mb-4">Process</p>
                <div className="flex flex-wrap gap-3">
                  {project.process.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex items-center gap-2 text-sm text-ink-300 bg-white/5 px-3 py-1.5 rounded-full">
                        <span className="font-mono text-primary text-xs">{String(i + 1).padStart(2, '0')}</span>
                        {step}
                      </span>
                      {i < project.process.length - 1 && (
                        <span className="text-ink-500 hidden sm:inline">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-ink-300 bg-white/5 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
