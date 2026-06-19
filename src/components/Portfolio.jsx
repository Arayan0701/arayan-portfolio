import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../data/content'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 · Selected Work"
          title="Projects worth a second look"
          description="A mix of product design, branding, and visual communication — each one solving a specific, real problem."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                  isActive ? 'text-secondary' : 'text-ink-400 hover:text-white border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-ink-400 text-center py-16">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
