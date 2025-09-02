import { motion } from 'framer-motion'

export default function HookJeffries() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      {/* Heading + underline */}
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
      >
        Ron Jeffries
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="surface p-6"
      >
        <p className="text-2xl md:text-3xl leading-relaxed">
          “I think tracking how actuals compare with estimates is at best{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold"
          >
            wasteful
          </motion.span>
          ; I think comparing teams on quality of estimates or velocity is{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold"
          >
            harmful
          </motion.span>
          .”
        </p>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-3 text-sm text-[var(--muted)]"
        >
          — Ron Jeffries ·
          <a
            className="underline hover:text-[var(--fg)] ml-1"
            href="https://ronjeffries.com/articles/019-01ff/story-points/Index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            Story Points Revisited
          </a>
        </motion.footer>
      </motion.blockquote>

      {/* Framing line */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-5 text-xl md:text-2xl"
      >
        If the originator says it’s{' '}
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">wasteful</span>
        {' '}and{' '}
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">harmful</span>, we should listen.
      </motion.p>
    </div>
  )
}
