import { motion } from 'framer-motion'

function StepCard({
  step,
  title,
  body,
  icon,
  delay = 0,
}: {
  step: number
  title: string
  body: string
  icon: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="surface p-5"
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 grid place-items-center rounded-full border border-[var(--line)] bg-black/20">
          <span className="text-lg" aria-hidden>{icon}</span>
        </div>
        <div className="text-xs text-[var(--muted)] font-semibold">Step {step}</div>
      </div>
      <div className="mt-2 font-extrabold text-lg">{title}</div>
      <div className="text-sm text-[var(--muted)] mt-1">{body}</div>
    </motion.div>
  )
}

export default function FocusPrioritizationImpact() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Without Story Points → Focus / Prioritization / Impact</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-[32rem] max-w-full rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StepCard step={1} title="Focus" body="Talk outcomes, not numbers" icon="🎯" />
        <StepCard step={2} title="Prioritization" body="Sequence by value & risk" icon="🧭" delay={0.08} />
        <StepCard step={3} title="Impact" body="Collaborate around customer results" icon="🤝" delay={0.16} />
      </div>

      {/* Flow line */}
      <div className="mt-6 hidden md:block">
        <div className="flex items-center justify-center gap-3 text-2xl font-extrabold select-none">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Focus</span>
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">→</span>
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Prioritization</span>
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">→</span>
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Impact</span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-4 text-center text-lg md:text-xl"
      >
        Align teams around <span className="font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">outcomes</span> — not point totals.
      </motion.p>
    </div>
  )
}
