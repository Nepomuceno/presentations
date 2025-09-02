import { motion } from 'framer-motion'

export default function WhatToUseInstead() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What to Use Instead</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-[26rem] max-w-full rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardThroughput />
        <CardDORA />
        <CardWIP />
      </div>

      <div className="mt-3 text-xs text-[var(--muted)]">
        Reference PDF: <a className="underline" href="https://services.google.com/fh/files/misc/2024_final_dora_report.pdf" target="_blank" rel="noreferrer noopener">2024 DORA report</a>
      </div>
    </div>
  )
}

function CardThroughput() {
  return (
    <div className="surface p-5">
      <div className="font-semibold">Throughput</div>
      <div className="text-sm text-[var(--muted)]">Story count trend (no points)</div>
      <svg viewBox="0 0 300 100" className="w-full mt-3" aria-hidden>
        <defs>
          <linearGradient id="wtui-grad" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent2)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M10,80 C60,40 110,86 150,60 C200,34 240,70 290,44"
          stroke="url(#wtui-grad)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        />
        {/* dots */}
        {[10, 90, 150, 210, 290].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={i % 2 === 0 ? 80 : i === 1 ? 50 : i === 3 ? 66 : 44}
            r="3"
            fill="currentColor"
            color="var(--fg)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.06 }}
          />
        ))}
      </svg>
      <div className="mt-2 text-xs text-[var(--muted)]">Count done items per timebox; forecast with percentiles.</div>
    </div>
  )
}

function CardDORA() {
  const items = [
    { k: 'DF', t: 'Deploy Frequency' },
    { k: 'LT', t: 'Lead Time' },
    { k: 'CFR', t: 'Change Failure Rate' },
    { k: 'MTTR', t: 'Time to Restore' },
  ]
  return (
    <a className="surface p-5 block hover:shadow-glow transition-shadow" href="https://cloud.google.com/devops/state-of-devops" target="_blank" rel="noreferrer noopener">
      <div className="font-semibold">DORA Metrics</div>
      <div className="text-sm text-[var(--muted)]">DF, LT, CFR, MTTR</div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {items.map((i, idx) => (
          <motion.div
            key={i.k}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.06 }}
            className="surface p-3 border border-[var(--line)]"
          >
            <div className="text-xs font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">{i.k}</div>
            <div className="text-xs text-[var(--muted)]">{i.t}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-2 text-xs text-[var(--muted)]">Strong signals of delivery capability and quality.</div>
    </a>
  )
}

function CardWIP() {
  return (
    <div className="surface p-5">
      <div className="font-semibold">Smaller Slices & Limit WIP</div>
      <div className="text-sm text-[var(--muted)]">Thin increments; cap concurrency</div>
      {/* mini kanban */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <Column title="Todo" cards={3} />
        <Column title="Doing (WIP 2)" cards={2} limit />
        <Column title="Done" cards={4} done />
      </div>
      <div className="mt-2 text-xs text-[var(--muted)]">Limit WIP to reduce queues; ship in smaller, user-visible slices.</div>
    </div>
  )
}

function Column({ title, cards, limit = false, done = false }: { title: string; cards: number; limit?: boolean; done?: boolean }) {
  return (
    <div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <span className={`inline-block h-2 w-2 rounded-full ${done ? 'bg-green-500' : limit ? 'bg-amber-400' : 'bg-[var(--muted)]'}`} />
        {title}
      </div>
      <div className="mt-2 grid gap-2">
        {Array.from({ length: cards }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="h-6 rounded bg-black/20 border border-[var(--line)]"
          />
        ))}
      </div>
    </div>
  )
}
