import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-strong shadow-glass flex items-center justify-center text-white hover:text-primary hover:border-primary/40 transition-colors focus-ring"
        >
          <HiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
