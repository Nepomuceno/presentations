type Props = { index: number; total: number; onPrev?: () => void; onNext?: () => void }

export default function PresentationControls({ index, total, onPrev, onNext }: Props) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="surface px-2 py-1.5 flex items-center gap-1.5 backdrop-blur">
        <button
          type="button"
          className="px-2.5 py-1 rounded font-semibold bg-black/20 hover:bg-black/30 border border-[var(--line)]"
          onClick={onPrev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="text-xs text-[var(--muted)] select-none tabular-nums">
          {index + 1} / {total + 1}
        </div>
        <button
          type="button"
          className="px-2.5 py-1 rounded font-semibold bg-black/20 hover:bg-black/30 border border-[var(--line)]"
          onClick={onNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  )
}
