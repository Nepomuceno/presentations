import { motion } from 'framer-motion'

export default function FirstRealUse() {
  const items = [
    'Built the platform while creating a talk on Story Points',
    'That presentation actually helped shape the platform itself',
    'This presentation = the first one fully generated from a script',
  ]
  return (
    <div className="mx-auto max-w-5xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The First Real Use</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-56 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
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

