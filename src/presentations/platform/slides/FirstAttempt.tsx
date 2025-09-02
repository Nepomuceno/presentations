import { motion } from 'framer-motion'

export default function FirstAttempt() {
  return (
    <div className="mx-auto max-w-6xl w-full">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The First Attempt</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(42vw,380px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Lead card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="surface p-6 md:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl select-none" aria-hidden>🗎</span>
          <div>
            <div className="slot-title font-bold">One HTML page</div>
            <p className="text-[var(--muted)]">I built the whole presentation as a single file.</p>
          </div>
        </div>
      </motion.div>

      {/* Stats + caveats */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stat: slides */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4, ease: 'easeOut' }}
          className="surface p-6 flex flex-col items-center text-center"
        >
          <div className="text-sm text-[var(--muted)]">Slides</div>
          <div className="mt-1 font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent" style={{fontSize:'clamp(28px,6vw,52px)'}}>8</div>
        </motion.div>

        {/* Stat: lines */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4, ease: 'easeOut' }}
          className="surface p-6 flex flex-col items-center text-center"
        >
          <div className="text-sm text-[var(--muted)]">HTML + JS lines</div>
          <div className="mt-1 font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent" style={{fontSize:'clamp(24px,5.5vw,44px)'}}>~4,000</div>
        </motion.div>

        {/* Caveats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: 'easeOut' }}
          className="relative surface p-6"
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-accent to-accent2" />
          <div className="slot-title font-bold mb-1">It worked, but…</div>
          <ul className="list-disc pl-5 text-[var(--muted)]">
            <li>Very tedious</li>
            <li className="mt-1">Hard to maintain or reuse</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
