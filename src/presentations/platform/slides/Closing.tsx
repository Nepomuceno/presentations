import { motion } from 'framer-motion'

export default function Closing() {
  const chips = [
    { icon: '📝', label: 'Markdown' },
    { icon: '🤖', label: 'GitHub Copilot' },
    { icon: '⚛️', label: 'React Deck' },
  ]
  return (
    <div className="mx-auto max-w-6xl w-full text-center">
      <div className="text-sm text-[var(--muted)]">Key Takeaway</div>
      <h2 className="mt-1 text-[clamp(26px,5.6vw,56px)] font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">From frustration → AI‑assisted React platform</span>
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-3 mx-auto h-1.5 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(54vw,600px)] origin-left"
      />
      <p className="mt-3 text-lg">Create presentations <span className="font-semibold">faster</span>, reuse components, and focus on <span className="font-semibold">content</span>.</p>

      {/* Chips */}
      <div className="mt-5 flex gap-2 justify-center flex-wrap">
        {chips.map((c, i) => (
          <motion.span
            key={c.label}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-1.5"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.07 }}
          >
            <span aria-hidden>{c.icon}</span>{c.label}
          </motion.span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 mx-auto max-w-xl surface p-6">
        <div className="slot-title font-bold mb-1">Try it yourself</div>
        <a
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-accent to-accent2 text-white font-semibold"
          href="https://github.com/nepomuceno/presentations"
          target="_blank"
          rel="noreferrer"
        >
          Visit the repo
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  )
}
