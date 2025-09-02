import { motion } from 'framer-motion'

export default function Goodhart() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Goodhart/Campbell — Measurement changes behavior</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-[22rem] max-w-full rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      {/* Quote */}
      <motion.blockquote initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="surface p-6">
        <p className="text-2xl md:text-3xl leading-relaxed">
          “When a <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">measure</span> becomes a
          {' '}<span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">target</span>, it ceases to be a good measure.”
        </p>
        <footer className="mt-3 text-sm text-[var(--muted)]">
          — Goodhart’s Law ·
          <a className="underline hover:text-[var(--fg)] ml-1" href="https://en.wikipedia.org/wiki/Goodhart%27s_law" target="_blank" rel="noreferrer noopener">
            Wikipedia
          </a>
        </footer>
      </motion.blockquote>

      {/* Visual: Story Points (measure) → Target → Distortions */}
      <div className="mt-6 grid gap-4">
        <div className="flex items-center justify-center gap-3">
          <Chip>Story Points (measure)</Chip>
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="text-2xl md:text-3xl bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
          >
            →
          </motion.span>
          <Chip intent="bad">Target</Chip>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid gap-1 text-sm md:text-base text-[var(--muted)] text-center"
        >
          <li>Behavior distorts: larger slices, estimate padding, point‑rich tasks</li>
          <li>Value drifts: outcomes slip behind the scoreboard</li>
        </motion.ul>
      </div>

      {/* Framing line */}
      <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-5 text-lg md:text-xl text-center">
        Don’t make the <span className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">number</span> the goal — make
        {' '}<span className="font-extrabold">customer outcomes</span> the goal.
      </motion.p>
    </div>
  )
}

function Chip({ children, intent = 'neutral' }: { children: React.ReactNode; intent?: 'neutral' | 'bad' }) {
  const color = intent === 'bad' ? 'from-rose-500 to-amber-400' : 'from-accent to-accent2'
  return (
    <div className="surface border border-[var(--line)] rounded-full">
      <span className={`inline-block px-3 py-1 font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{children}</span>
    </div>
  )
}
