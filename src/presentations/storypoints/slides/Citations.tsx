import { motion } from 'framer-motion'

type RefItem = { label: string; href: string }

export default function Citations() {
  const items: RefItem[] = [
    { label: 'Ron Jeffries — Story Points Revisited', href: 'https://ronjeffries.com/articles/019-01ff/story-points/Index.html' },
    { label: 'Martin Fowler — Story Counting', href: 'https://martinfowler.com/bliki/StoryCounting.html' },
    { label: 'Allen Holub — #NoEstimates, An Introduction', href: 'https://holub.com/noestimates-an-introduction/' },
    { label: 'Goodhart’s Law', href: 'https://en.wikipedia.org/wiki/Goodhart%27s_law' },
    { label: 'DORA metrics (overview)', href: 'https://cloud.google.com/devops/state-of-devops' },
    // Included in slide content earlier
    { label: 'Kent Beck — “made up numbers” (tweet)', href: 'https://x.com/KentBeck/status/1192835234842075137' },
  ]

  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Citations</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-48 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((i, idx) => (
          <CitationCard key={i.href} item={i} delay={idx * 0.06} />)
        )}
      </div>
    </div>
  )
}

function CitationCard({ item, delay = 0 }: { item: RefItem; delay?: number }) {
  const url = new URL(item.href)
  const host = url.hostname.replace('www.', '')
  return (
    <motion.a
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className="surface p-4 border border-[var(--line)] hover:shadow-glow transition-shadow flex items-start justify-between gap-3"
    >
      <div>
        <div className="font-semibold leading-snug">{item.label}</div>
        <div className="text-xs text-[var(--muted)] mt-1">{host}</div>
      </div>
      <span className="text-lg font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent" aria-hidden>
        ↗
      </span>
    </motion.a>
  )
}
