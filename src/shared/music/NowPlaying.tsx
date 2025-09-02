import { useMusic } from './MusicProvider'

export default function NowPlaying() {
  const { enabled, current, stop, volume, setVolume, playRandom } = useMusic()
  if (!enabled) return null
  const label = current ? current.split('/').pop() : 'track'
  return (
    <div className="fixed bottom-4 right-4 surface px-3 py-2 text-xs flex items-center gap-2 border border-[var(--line)]">
      <span className="opacity-80">♪ {label}</span>
      <input
        aria-label="Music volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.currentTarget.value))}
      />
      <button className="px-2 py-0.5 border border-[var(--line)] rounded bg-black/20" onClick={playRandom} title="Randomize track">↻</button>
      <button className="px-2 py-0.5 border border-[var(--line)] rounded bg-black/20" onClick={stop} title="Stop">Stop</button>
    </div>
  )
}

