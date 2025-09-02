import { useCallback, useEffect } from 'react'

type Params = {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
  total: number
}

export default function useDeckNavigation({ index, setIndex, total }: Params) {
  const goNext = useCallback(() => setIndex((i) => Math.min(i + 1, total)), [setIndex, total])
  const goPrev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [setIndex])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return
      if (e.deltaY > 0) goNext(); else goPrev()
    }
    window.addEventListener('wheel', onWheel, { passive: true } as AddEventListenerOptions)
    return () => window.removeEventListener('wheel', onWheel)
  }, [goNext, goPrev])

  return { index, goNext, goPrev }
}
