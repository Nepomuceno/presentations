import { motion } from 'framer-motion'

export default function WhatsNext() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What’s Next</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-40 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="surface p-6">
        <ul className="list-disc pl-5">
          <li>Make it easier for others to use</li>
          <li className="mt-1">Get you to use it on GitHub:
            <div className="mt-1 text-[var(--muted)]">
              <a className="underline hover:text-[var(--fg)]" href="https://github.com/nepomuceno/presentations" target="_blank" rel="noreferrer">github.com/nepomuceno/presentations</a>
            </div>
          </li>
          <li className="mt-1">Maybe more musics ;)</li>
        </ul>
      </div>
    </div>
  )
}

