import { motion } from 'framer-motion'

export default function ComplexityTrap() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">50 ≠ 50 — Complexity Trap</h2>
      <p className="text-[var(--muted)] mb-4">Equal points don’t mean equal <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">customer value</span>.</p>

      <div className="grid md:grid-cols-2 gap-6 items-end">
        {[0, 1].map((col) => (
          <div key={col} className="surface p-5">
            <div className="text-base md:text-lg text-[var(--muted)]">
              Sprint {col === 0 ? 'A' : 'B'} — <span className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">50</span> SP
            </div>

            {/* Story Points: equal for both sprints, muted single color */}
            <div className="mt-3">
              <div className="text-xs text-[var(--muted)] mb-1">Story Points</div>
              <div className="h-3 rounded bg-black/20 border border-[var(--line)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                  className="h-full rounded bg-slate-500/70"
                />
              </div>
            </div>

            {/* Customer Value: one bar per sprint; Sprint A high, Sprint B small */}
            <div className="mt-5">
              <div className="text-lg md:text-xl font-extrabold mb-2">
                <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Customer Value</span>
              </div>
              <div className="relative h-48">
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--line)]" />
                <SingleBar height={col === 0 ? 0.85 : 0.25} />
              </div>
              <div className="mt-2 text-sm md:text-base text-[var(--muted)] text-center">
                {col === 0 ? 'High value delivered' : 'Low value delivered'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center">
        <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">≠</span>
      </motion.div>
      <p className="mt-3 text-center text-2xl md:text-3xl">
        Points ≈ complexity/effort — not <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">customer value</span>.
      </p>
    </div>
  )
}

function SingleBar({ height }: { height: number }) {
  const target = `${Math.round(height * 100)}%`
  return (
    <motion.div
      initial={{ height: '0%' }}
      animate={{ height: target }}
      transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
      className="absolute bottom-0 left-0 right-0 rounded-t bg-gradient-to-t from-accent to-accent2"
    />
  )
}
