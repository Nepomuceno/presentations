import { motion } from 'framer-motion'

export default function AccuracyVsCounting() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Accuracy vs Counting</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-56 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      {/* Quote */}
      <motion.blockquote initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="surface p-6">
        <p className="text-xl md:text-2xl leading-relaxed">
          “I’ve found teams work well with both story points and story counting and have no preference between them.”
        </p>
        <footer className="mt-3 text-sm text-[var(--muted)]">
          — Martin Fowler ·
          <a className="underline hover:text-[var(--fg)] ml-1" href="https://martinfowler.com/bliki/StoryCounting.html" target="_blank" rel="noreferrer noopener">
            Story Counting
          </a>
        </footer>
      </motion.blockquote>

      {/* Visual comparison */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CompareCard
          title="Story Points"
          power={0.25}
          overhead={0.73}
          colorPower="from-accent to-accent2"
          colorOverhead="from-rose-500 to-amber-400"
          delay={0.1}
        />
        <CompareCard
          title="Story Counting"
          power={0.25}
          overhead={0.25}
          colorPower="from-accent to-accent2"
          colorOverhead="from-rose-500 to-amber-400"
          delay={0.18}
        />
      </div>

      {/* Kent Beck punchline */}
      <motion.blockquote
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="surface p-5 mt-5"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          “Whenever someone says ‘story point’ or ‘velocity,’ quietly in your own head translate it to
          ‘<span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">made up numbers</span>.’”
        </p>
        <footer className="mt-2 text-sm text-[var(--muted)]">
          — Kent Beck ·
          <a
            className="underline hover:text-[var(--fg)] ml-1"
            href="https://x.com/KentBeck/status/1192835234842075137"
            target="_blank"
            rel="noreferrer noopener"
          >
            tweet
          </a>
        </footer>
      </motion.blockquote>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-5 text-lg md:text-xl text-center"
      >
        If <span className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">counting</span> works as well,
        skip the <span className="font-extrabold">ceremony</span>.
      </motion.p>
    </div>
  )
}

function CompareCard({
  title,
  power,
  overhead,
  colorPower,
  colorOverhead,
  delay = 0,
}: {
  title: string
  power: number
  overhead: number
  colorPower: string
  colorOverhead: string
  delay?: number
}) {
  const p = `${Math.round(power * 100)}%`
  const o = `${Math.round(overhead * 100)}%`
  return (
    <div className="surface p-5">
      <div className="font-bold text-lg mb-3">{title}</div>
      <div>
        <div className="flex items-center justify-between text-xs text-[var(--muted)]">
          <span>Predictive power</span>
          <span className="tabular-nums">{p}</span>
        </div>
        <div className="h-3 rounded bg-black/20 border border-[var(--line)] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: p }}
            transition={{ duration: 0.9, ease: 'easeOut', delay }}
            className={`h-full rounded bg-gradient-to-r ${colorPower}`}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-[var(--muted)]">
          <span>Overhead (ceremony)</span>
          <span className="tabular-nums">{o}</span>
        </div>
        <div className="h-3 rounded bg-black/20 border border-[var(--line)] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: o }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: delay + 0.1 }}
            className={`h-full rounded bg-gradient-to-r ${colorOverhead}`}
          />
        </div>
      </div>
    </div>
  )
}
