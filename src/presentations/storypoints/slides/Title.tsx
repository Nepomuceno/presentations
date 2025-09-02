import { motion } from 'framer-motion'

export default function Title() {
  const chips = ['Value over points', 'Throughput', 'Cycle time', 'WIP limits', 'DORA']
  return (
    <div className="mx-auto max-w-5xl w-full text-center">
      <h1 className="text-[clamp(28px,6vw,64px)] font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
          Story Points Aren’t Going to Fix Anything
        </span>
      </h1>
      <div className="mt-1 text-[var(--muted)]">Gabriel Nepomuceno</div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-3 mx-auto h-2 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(52vw,560px)] origin-left"
      />
      <p className="mt-3 text-[var(--muted)]">Points pull focus away from value; here’s what to do instead.</p>
      <div className="mt-6 flex gap-2 justify-center flex-wrap">
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
    </div>
  )
}

