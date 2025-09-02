import { motion } from 'framer-motion'

export default function Workflow() {
  const steps = [
    { n: 1, title: 'Write Markdown', desc: 'Script the talk like this one', icon: '📝' },
    { n: 2, title: 'Use GitHub Copilot', desc: 'Feed the script; let it generate slides', icon: '🤖' },
    { n: 3, title: 'Get React Deck', desc: 'Slides + animations ready', icon: '🎬' },
  ]
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The Workflow</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(42vw,380px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            className="surface p-6"
          >
            <div className="flex items-start gap-3">
              <div className="h-7 w-7 flex items-center justify-center rounded-full text-sm font-bold bg-gradient-to-r from-accent to-accent2 text-white select-none">
                {s.n}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="text-base" aria-hidden>{s.icon}</span>
                  {s.title}
                </div>
                <div className="text-[var(--muted)] mt-1 text-sm">{s.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Outputs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.4, ease: 'easeOut' }}
        className="mt-6 surface p-6"
      >
        <div className="slot-title font-bold mb-1">Outputs</div>
        <ul className="list-disc pl-5">
          <li>All slides scaffolded as React components</li>
          <li className="mt-1">Transitions and animations wired</li>
          <li className="mt-1">Deck registered and navigable</li>
        </ul>
      </motion.div>

      {/* Chips */}
      <div className="mt-5 flex gap-2 justify-center flex-wrap">
        {['Markdown', 'GitHub Copilot', 'React Deck'].map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.07 }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
