import { motion } from 'framer-motion'

export default function FirstRealUse() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The First Real Use</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(48vw,460px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Two-column story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Story Points card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative surface p-6"
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-accent to-accent2" />
          <div className="slot-title font-bold mb-1">Real project</div>
          <p>
            Built the platform while creating a talk on <span className="font-semibold">Story Points</span>.
          </p>
          <div className="mt-3 text-sm text-[var(--muted)]">That presentation helped shape the platform itself.</div>
        </motion.div>

        {/* Generated from script */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
          className="surface p-6"
        >
          <div className="slot-title font-bold mb-1">From script → slides</div>
          <ul className="list-disc pl-5">
            <li>Markdown script becomes a full React deck</li>
            <li className="mt-1">Animations and transitions included</li>
            <li className="mt-1">Reusable components</li>
          </ul>
        </motion.div>
      </div>

      {/* Badge row */}
      <div className="mt-6 flex gap-2 justify-center flex-wrap">
        {["Shaped the system", "Production-tested", "Script-first"].map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.07 }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
