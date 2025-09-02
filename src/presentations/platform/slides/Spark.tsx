import { motion } from 'framer-motion'

export default function Spark() {
  const chips = ['HTML5', 'Animations', 'ChatGPT', 'Slides']
  return (
    <div className="mx-auto max-w-5xl w-full">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The Spark</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(40vw,320px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Quote card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative surface p-6 md:p-8 overflow-hidden"
      >
        <div className="absolute -top-6 -left-3 text-7xl opacity-10 select-none" aria-hidden>“</div>
        <div className="text-sm text-[var(--muted)] mb-2 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent2" />
          Tip from Paul Foster
        </div>
        <blockquote className="text-xl md:text-2xl font-semibold leading-snug">
          “You can generate HTML5 animations quite easily with ChatGPT.”
        </blockquote>
      </motion.div>

      {/* So what? */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="surface p-5 text-center md:text-right"
        >
          <div className="text-sm text-[var(--muted)]">If we can generate</div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Animations</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
          aria-hidden
        >
          →
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="surface p-5 text-center md:text-left"
        >
          <div className="text-sm text-[var(--muted)]">…why not generate</div>
          <div className="text-2xl font-extrabold">Slides</div>
        </motion.div>
      </div>

      {/* Chips */}
      <div className="mt-5 flex gap-2 justify-center flex-wrap">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.07 }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
