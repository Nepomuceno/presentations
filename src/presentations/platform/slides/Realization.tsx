import { motion } from 'framer-motion'

export default function Realization() {
  const chips = ['Components', 'Reuse', 'Maintainability']
  return (
    <div className="mx-auto max-w-6xl w-full">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The Realization</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(42vw,380px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Problem / Idea / Insight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative surface p-6"
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-accent to-accent2" />
          <div className="slot-title font-bold mb-1">Problem</div>
          <p className="text-[var(--muted)]">Every new presentation felt like starting from scratch.</p>
        </motion.div>

        {/* Idea */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4, ease: 'easeOut' }}
          className="surface p-6"
        >
          <div className="slot-title font-bold mb-1">Idea</div>
          <p>Instead of generating <span className="line-through text-[var(--muted)]">slides</span>, generate a <span className="font-semibold">React app</span>.</p>
        </motion.div>

        {/* Insight */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.4, ease: 'easeOut' }}
          className="surface p-6"
        >
          <div className="slot-title font-bold mb-1">Insight</div>
          <p className="text-[var(--muted)]">AIs are really good at generating React apps.</p>
        </motion.div>
      </div>

      {/* Flow emphasis */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="surface p-5 text-center md:text-right"
        >
          <div className="text-sm text-[var(--muted)]">Old approach</div>
          <div className="text-xl font-semibold line-through text-[var(--muted)]">Generate Slides</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
          aria-hidden
        >
          →
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="surface p-5 text-center md:text-left"
        >
          <div className="text-sm text-[var(--muted)]">New approach</div>
          <div className="text-xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Generate React App</div>
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
            transition={{ delay: 0.45 + i * 0.07 }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
