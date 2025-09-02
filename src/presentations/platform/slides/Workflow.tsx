import { motion } from 'framer-motion'

export default function Workflow() {
  return (
    <div className="mx-auto max-w-4xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Workflow</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-40 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <ol className="surface p-6 list-decimal pl-6">
        <li>I write a Markdown script (like this one)</li>
        <li className="mt-2">Feed it into the presentation builder</li>
        <li className="mt-2">It generates:
          <ul className="list-disc pl-5 mt-2 text-[var(--muted)]">
            <li>All the slides in the correct format</li>
            <li>All the animations and transitions</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

