import { motion } from 'framer-motion'

export default function Breakthrough() {
  return (
    <div className="mx-auto max-w-6xl w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Breakthrough</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-2 mb-5 h-1.5 w-44 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="surface p-6">
          <div className="slot-title font-bold mb-2">Design</div>
          <ul className="list-disc pl-5">
            <li>Each slide = one React component</li>
            <li>Easy to add, edit, or reorder slides</li>
          </ul>
        </div>
        <div className="surface p-6">
          <div className="slot-title font-bold mb-2">Now I can</div>
          <ul className="list-disc pl-5">
            <li>Generate slides faster</li>
            <li>Reuse code + animations</li>
            <li>Focus on content, not fixing HTML</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

