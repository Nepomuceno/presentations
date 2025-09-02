import { motion } from 'framer-motion'

export default function FirstAttempt() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The First Attempt</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-40 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="surface p-6">
        <ul className="list-disc pl-5">
          <li>Built my first presentation as one HTML page</li>
          <li className="mt-2">It worked, but…
            <ul className="list-disc pl-5 mt-2 text-[var(--muted)]">
              <li>8 slides ≈ ~4,000 lines of HTML + JS</li>
              <li>Very tedious</li>
              <li>Hard to maintain or reuse</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

