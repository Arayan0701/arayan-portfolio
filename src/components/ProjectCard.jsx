import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, onOpen, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
        className="cursor-pointer rounded-3xl glass overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-glow-sm will-change-transform focus-ring"
        style={{ transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s' }}
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <ProjectVisual id={project.image} color={project.color} />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent" />
          <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-widest text-white/80 px-3 py-1 rounded-full glass">
            {project.category}
          </span>
          <span
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <HiArrowUpRight size={16} />
          </span>
        </div>

        <div className="p-6">
          <p className="font-mono text-xs text-primary mb-1">{project.year}</p>
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-ink-400 text-sm mt-1">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-ink-300 bg-white/5 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
