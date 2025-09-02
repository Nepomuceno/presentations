import { motion } from 'framer-motion'

const chips = [
  { label: 'Usage', desc: 'Are users actually using it?' },
  { label: 'Adoption', desc: 'New users or expanded use?' },
  { label: 'Cycle Time', desc: 'How fast do we deliver?' },
  { label: 'Escaped Defects', desc: 'Issues users hit in prod' },
]

export default function ValueOverEffort() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Delivering <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">value</span> beats estimating <span className="font-extrabold">effort</span>.
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-[22rem] max-w-full rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      {/* Value outweighs Effort — typographic contrast (no numbers) */}
      <BigComparison />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {chips.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="surface p-4"
          >
            <div className="font-semibold flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent2" />
              {c.label}
            </div>
            <div className="text-sm text-[var(--muted)] mt-1">{c.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BigComparison() {
  return (
    <div className="surface p-8">
      <div className="flex items-end justify-center gap-4 select-none">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(40px, 10vw, 120px)', lineHeight: 1 }}
        >
          Value
        </motion.span>
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
          className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(30px, 8vw, 96px)', lineHeight: 1 }}
        >
          &gt;
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          className="font-extrabold text-[var(--muted)]"
          style={{ fontSize: 'clamp(24px, 6vw, 64px)', lineHeight: 1 }}
        >
          Effort
        </motion.span>
      </div>
    </div>
  )
}
