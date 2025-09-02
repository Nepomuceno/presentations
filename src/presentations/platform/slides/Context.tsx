import { motion } from 'framer-motion'

export default function Context() {
  const chips = ['HVE', 'ChatGPT', 'PowerPoint Generators']
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The Context</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-5 h-1.5 w-[min(46vw,420px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
        <p className="text-[var(--muted)]">Wanted fast, great-looking slides — tools fell short.</p>
      </div>

      {/* Chips */}
      <div className="mt-5 flex gap-2 justify-center flex-wrap">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            {c}
          </motion.span>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Goal */}
        <motion.div
          className="surface p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="slot-title font-bold mb-1">Goal</div>
          <div className="flex items-start gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accent2 mt-1" />
            <div>Make good-looking presentations quickly</div>
          </div>
        </motion.div>

        {/* Tried */}
        <motion.div
          className="surface p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4, ease: 'easeOut' }}
        >
          <div className="slot-title font-bold mb-1">Tried</div>
          <ul className="list-disc pl-5">
            <li>HVE (Hyper Velocity Engineering) to build slides</li>
            <li className="mt-1">ChatGPT + other AIs to generate PowerPoints</li>
          </ul>
        </motion.div>

        {/* Result */}
        <motion.div
          className="relative surface p-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.4, ease: 'easeOut' }}
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-accent to-accent2" />
          <div className="slot-title font-bold mb-1">Result</div>
          <div className="flex items-start gap-3">
            <span className="text-xl" aria-hidden>⚠️</span>
            <p className="text-[var(--muted)]">
              Not great — formatting and visuals were inconsistent
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
