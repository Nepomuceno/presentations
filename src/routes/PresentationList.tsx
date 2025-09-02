import { Link } from 'react-router-dom'
import presentations from '../presentations'
import type { PresentationEntry } from '../types'

export default function PresentationList() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">Presentations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {presentations.map((p: PresentationEntry) => (
          <Link
            key={p.id}
            to={`/p/${p.id}`}
            className="surface p-4 hover:shadow-glow transition-shadow duration-200"
          >
            <div className="text-sm text-[var(--muted)]">ID: {p.id}</div>
            <div className="font-bold text-lg">{p.title}</div>
            {p.subtitle && (
              <div className="text-[var(--muted)] mt-1">{p.subtitle}</div>
            )}
            <div className="mt-3 text-xs text-[var(--muted)]">Slides: {p.slides?.length ?? '—'}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
