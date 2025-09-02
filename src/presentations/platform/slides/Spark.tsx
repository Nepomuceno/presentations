import { motion } from 'framer-motion'

export default function Spark() {
  return (
    <div className="mx-auto max-w-4xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Spark</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-32 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="surface p-6">
        <div className="text-sm text-[var(--muted)] mb-2">Tip from Paul Foster</div>
        <blockquote className="text-lg font-semibold">
          “You can generate HTML5 animations quite easily with ChatGPT.”
        </blockquote>
      </div>
      <p className="mt-4 text-[var(--muted)]">
        That made me think: If we can generate animations, why not slides too?
      </p>
    </div>
  )
}

