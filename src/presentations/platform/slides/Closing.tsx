import { motion } from 'framer-motion'

export default function Closing() {
  return (
    <div className="mx-auto max-w-4xl w-full text-center">
      <div className="text-sm text-[var(--muted)]">Key Takeaway</div>
      <h2 className="mt-1 text-[clamp(24px,5vw,48px)] font-extrabold tracking-tight">
        From frustration with existing tools →
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-3 mx-auto h-1.5 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(46vw,520px)] origin-left"
      />
      <p className="mt-4 text-lg">to an <span className="font-bold">AI-assisted React platform</span> →</p>
      <p className="mt-1 text-lg">that lets me create presentations faster & better.</p>
    </div>
  )
}

