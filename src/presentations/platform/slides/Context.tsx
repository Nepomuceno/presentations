import { motion } from 'framer-motion'

export default function Context() {
  const items = [
    'Needed a way to make good-looking presentations quickly',
    'Tried HVE (Hyper Velocity Engineering) to build slides',
    'Also tried using ChatGPT + other AIs to generate PowerPoints',
    'Result: not great — formatting and visuals were inconsistent',
  ]
  return (
    <div className="mx-auto max-w-5xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Context</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-40 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <ul className="grid gap-3">
        {items.map((t, i) => (
          <motion.li
            key={t}
            className="surface p-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            {t}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

