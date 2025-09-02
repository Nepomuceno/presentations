import { motion } from 'framer-motion'

export default function Title() {
  return (
    <div className="mx-auto max-w-5xl w-full text-center">
      <h1 className="text-[clamp(28px,6vw,64px)] font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
          How I Built My Presentation Platform
        </span>
      </h1>
      <div className="mt-1 text-[var(--muted)]">From frustration to a working system</div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-3 mx-auto h-2 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(52vw,560px)] origin-left"
      />
      <p className="mt-3 text-[var(--muted)]">AI-assisted, React-powered slides from a Markdown script.</p>
    </div>
  )
}

