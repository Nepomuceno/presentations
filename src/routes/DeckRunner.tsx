import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import presentations from '../presentations'
import Deck from '../shared/deck/Deck'
import Slide from '../shared/deck/Slide'
import useDeckNavigation from '../shared/deck/useDeckNavigation'
import PresentationControls from '../shared/deck/PresentationControls'
import type { PresentationEntry, SlideMeta } from '../types'

export default function DeckRunner() {
  const { id } = useParams()
  const navigate = useNavigate()
  const entry = useMemo<PresentationEntry | undefined>(
    () => presentations.find((p) => p.id === id),
    [id]
  )

  const [index, setIndex] = useState(0)
  const total = entry?.slides?.length ?? 0
  const { goNext, goPrev } = useDeckNavigation({ index, setIndex, total })

  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="surface p-6">
          <div className="font-bold text-xl mb-2">Not found</div>
          <p className="text-[var(--muted)] mb-4">No presentation with id "{id}".</p>
          <button className="px-3 py-1.5 rounded bg-accent text-white font-semibold" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    )
  }

  const SlideComponent = entry.component

  return (
    <div className="h-[calc(100vh-52px-41px)]">{/* header+footer height roughly */}
      <Deck
        title={entry.title}
        index={index}
        total={total}
        onPrev={goPrev}
        onNext={goNext}
      >
        <Slide>
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="mb-3 text-sm text-[var(--muted)]">{entry.subtitle || '—'}</div>
            <h2 className="text-4xl font-extrabold tracking-tight">{entry.title}</h2>
            <p className="mt-3 text-[var(--muted)]">Keyboard: ← → Space. Click anywhere to focus.</p>
          </div>
        </Slide>
        {entry.slides?.map((s: SlideMeta, i: number) => (
          <Slide key={i} transition={s.transition} className={s.className}>
            <SlideComponent slide={s} idx={i} />
          </Slide>
        ))}
      </Deck>

      <PresentationControls index={index} total={total} onPrev={goPrev} onNext={goNext} />
    </div>
  )
}
