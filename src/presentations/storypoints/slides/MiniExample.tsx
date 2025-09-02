import { motion } from 'framer-motion'
import beforeImg from '../images/4.svg'
import afterImg from '../images/5.svg'

export default function MiniExample() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Mini Example (before / after)</h2>
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
        {/* Before */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="surface p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[var(--muted)]">Before</div>
            <Badge muted>
              <span className="text-[var(--muted)]">SP</span>
              <span className="ml-1 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent font-extrabold">50</span>
            </Badge>
          </div>
          <div className="mt-1 font-semibold">50 SP sprint, low customer impact</div>
          <img src={beforeImg} alt="Before visual" className="mt-4 w-full h-32 object-contain opacity-80" />
          <ul className="mt-4 grid gap-1 text-sm text-[var(--muted)]">
            <li>Adoption ↘︎</li>
            <li>Tickets ↗︎</li>
          </ul>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="hidden md:flex items-center"
          aria-hidden
        >
          <span className="text-5xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">→</span>
        </motion.div>

        {/* After */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="surface p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[var(--muted)]">After</div>
            <Badge>
              <span className="font-extrabold">Shipped</span>
              <span className="ml-1">slice</span>
            </Badge>
          </div>
          <div className="mt-1 font-semibold">Fewer points; shipped a user-facing slice</div>
          <img src={afterImg} alt="After visual" className="mt-4 w-full h-32 object-contain" />
          <ul className="mt-4 grid gap-1 text-sm">
            <li className="text-green-400">Adoption ↑</li>
            <li className="text-green-400">Tickets ↓</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

function Badge({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs border ${
        muted ? 'border-[var(--line)] bg-black/20' : 'border-[var(--line)] bg-white/5'
      }`}
    >
      {children}
    </span>
  )
}
