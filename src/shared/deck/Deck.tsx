import { useEffect, useRef, Children } from 'react'
import { useMusic } from '../music/MusicProvider'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title: string
  index: number
  total: number
  onPrev?: () => void
  onNext?: () => void
}>

export default function Deck({ title, index, total, children, onPrev, onNext }: Props) {
  const hostRef = useRef(null)
  const { playRandom, stop } = useMusic()

  useEffect(() => {
    ;(hostRef.current as HTMLDivElement | null)?.focus()
  }, [])

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === ' ') onNext?.()
    if (e.key === 'ArrowLeft') onPrev?.()
    if ((e.key === 's' || e.key === 'S') && !e.repeat) playRandom()
    if ((e.key === 'd' || e.key === 'D') && !e.repeat) stop()
  }

  return (
    <section
      ref={hostRef}
      tabIndex={0}
      onKeyDown={handleKey}
      onMouseDown={() => (hostRef.current as HTMLDivElement | null)?.focus()}
      className="w-full h-full outline-none"
      aria-roledescription="deck"
      aria-label={title}
      aria-live="polite"
    >
      <div className="w-full h-full">
        {/* Stage area */}
        <div className="mx-auto max-w-[1100px] h-full">
          {Children.toArray(children)[index]}
        </div>
      </div>

      {/* Progress (top-right subtle) */}
      <div className="fixed top-[58px] right-4 text-xs text-[var(--muted)] select-none">
        <span className="font-semibold text-[var(--fg)]">{index + 1}</span>
        <span className="mx-1">/</span>
        <span>{total + 1}</span>
      </div>
    </section>
  )
}
