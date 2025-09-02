import { motion } from 'framer-motion'

export default function CloseSlide() {
  const chips = ['Outcomes', 'Flow', 'DORA', 'Throughput', 'WIP limits']
  return (
    <div className="mx-auto max-w-5xl w-full text-center">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-extrabold tracking-tight"
        style={{ fontSize: 'clamp(28px,6vw,72px)' }}
      >
        Do <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Agile</span>, Not Arithmetic.
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-3 mx-auto h-2 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(48vw,520px)] origin-left"
      />
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-4 text-lg md:text-2xl"
      >
        Measure <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">outcomes & flow</span>, not imaginary numbers.
      </motion.p>

      <div className="mt-6 flex gap-2 justify-center flex-wrap">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.06 }}
          >
            {c}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-sm text-[var(--muted)]"
      >
        Thanks! Use ← → to review or jump to Citations.
      </motion.p>
    </div>
  )
}
