import { motion } from 'framer-motion'

export default function WhatsNext() {
  const items = [
    { icon: '🧭', title: 'Quickstart + Prompts', desc: 'Publish a short guide with Copilot prompts' },
    { icon: '🧩', title: 'Starter Templates', desc: 'Add themed decks and component examples' },
    { icon: '🚀', title: 'One‑click Deploy', desc: 'Streamline GitHub Pages deployment' },
    { icon: '🎵', title: 'More Music Packs', desc: 'Curate ambient/background tracks' },
  ]
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">What’s Next</span>
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-6 h-1.5 w-[min(40vw,360px)] rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            className="surface p-6"
          >
            <div className="flex items-start gap-3">
              <span className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 text-white" aria-hidden>
                {it.icon}
              </span>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-[var(--muted)]">{it.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 surface p-6">
        <div className="slot-title font-bold mb-1">Try it on GitHub</div>
        <a className="underline hover:text-[var(--fg)]" href="https://github.com/nepomuceno/presentations" target="_blank" rel="noreferrer">
          github.com/nepomuceno/presentations
        </a>
      </div>
    </div>
  )
}
