import { motion } from 'framer-motion'

export default function WhatYoureSeeing() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">What You’re Seeing</span>
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-6 h-1.5 w-[min(44vw,420px)] rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface p-5 text-center"
        >
          <div className="flex justify-center mb-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 text-white text-lg" aria-hidden>📝</span>
          </div>
          <div className="slot-title font-bold">Script</div>
          <div className="text-sm text-[var(--muted)]">Written in Markdown</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-extrabold" aria-hidden>
          →
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="surface p-5 text-center"
        >
          <div className="flex justify-center mb-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 text-white text-lg" aria-hidden>🤖</span>
          </div>
          <div className="slot-title font-bold">GitHub Copilot</div>
          <div className="text-sm text-[var(--muted)]">Generates the slides</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-extrabold" aria-hidden>
          →
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="surface p-5 text-center"
        >
          <div className="flex justify-center mb-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 text-white text-lg" aria-hidden>🎬</span>
          </div>
          <div className="slot-title font-bold">React Deck</div>
          <div className="text-sm text-[var(--muted)]">Slides + animations</div>
        </motion.div>
      </div>

      <div className="mt-6 surface p-6">
        <ul className="list-disc pl-5">
          <li>No manual PowerPoint slides</li>
          <li className="mt-1">AI + React + a bit of iteration</li>
        </ul>
      </div>
    </div>
  )
}
