import { motion } from 'framer-motion'

export default function Breakthrough() {
  const chips = ['Add', 'Edit', 'Reorder', 'Reuse animations', 'Focus on content']
  return (
    <div className="mx-auto max-w-6xl w-full">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">The Breakthrough</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-2 mb-6 h-1.5 w-[min(40vw,320px)] mx-auto rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        />
      </div>

      {/* Visual equation: Slide = React Component */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="surface p-5 text-center md:text-right"
        >
          <div className="text-sm text-[var(--muted)]">Each slide</div>
          <div className="mt-1 font-extrabold">Slide.tsx</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
          aria-hidden
        >
          =
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="surface p-5 text-center md:text-left"
        >
          <div className="text-sm text-[var(--muted)]">One React component</div>
          <div className="mt-1 font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">&lt;Slide /&gt;</div>
        </motion.div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative surface p-6"
        >
          <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-gradient-to-b from-accent to-accent2" />
          <div className="slot-title font-bold mb-2">Design</div>
          <ul className="list-disc pl-5">
            <li>Each slide = one React component</li>
            <li>Easy to add, edit, or reorder slides</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4, ease: 'easeOut' }}
          className="surface p-6"
        >
          <div className="slot-title font-bold mb-2">Now I can</div>
          <ul className="list-disc pl-5">
            <li>Generate slides faster</li>
            <li>Reuse code + animations</li>
            <li>Focus on content, not fixing HTML</li>
          </ul>
        </motion.div>
      </div>

      {/* Capability chips */}
      <div className="mt-6 flex gap-2 justify-center flex-wrap">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.07 }}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
