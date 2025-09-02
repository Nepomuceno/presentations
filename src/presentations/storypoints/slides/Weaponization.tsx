import { motion } from 'framer-motion'

function Bullet({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.li
      className="flex items-start gap-3 text-lg md:text-xl"
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
      <span>{children}</span>
    </motion.li>
  )
}

export default function Weaponization() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      {/* Heading with gradient underline for consistency */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Weaponization & Vanity</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-4 h-1.5 w-44 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      <ul className="grid gap-3">
        <Bullet delay={0.0}>
          Comparisons <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">inside the team</span>
          {' '}turn velocity into a <span className="font-extrabold">target</span>
        </Bullet>
        <Bullet delay={0.08}>
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">Cross‑team</span> velocity league tables
        </Bullet>
        <Bullet delay={0.16}>
          Point <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">inflation</span> and gaming under pressure
        </Bullet>
      </ul>

      {/* Holub quote with emphasized words */}
      <motion.blockquote
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="surface p-6 mt-6"
      >
        <p className="text-xl md:text-2xl leading-relaxed">
          “Estimates are <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">waste</span>. Not only are they not necessary, but they introduce
          {' '}<span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">dysfunction</span> into the team.”
        </p>
        <footer className="mt-3 text-sm text-[var(--muted)]">
          — Allen Holub ·
          <a className="underline hover:text-[var(--fg)] ml-1" href="https://holub.com/noestimates-an-introduction/" target="_blank" rel="noreferrer noopener">
            #NoEstimates, An Introduction
          </a>
        </footer>
      </motion.blockquote>
    </div>
  )
}
