import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

type MusicContextType = {
  enabled: boolean
  current?: string
  playRandom: () => void
  stop: () => void
  toggle: () => void
  volume: number
  setVolume: (v: number) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

const TRACKS = [
  '/music/retro-lounge-389644.mp3',
  '/music/running-night-393139.mp3',
  '/music/tell-me-what-379638.mp3',
  '/music/vlog-beat-background-349853.mp3'
]

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [current, setCurrent] = useState<string | undefined>(undefined)
  const [volume, setVolumeState] = useState<number>(() => {
    const v = localStorage.getItem('musicVolume')
    const parsed = v ? parseFloat(v) : NaN
    return Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : 0.15 // low default
  })

  const setVolume = useCallback((v: number) => {
    const clamped = Math.min(1, Math.max(0, v))
    setVolumeState(clamped)
    try { localStorage.setItem('musicVolume', String(clamped)) } catch {}
    if (audioRef.current) audioRef.current.volume = clamped
  }, [])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
      audioRef.current = null
    }
    setCurrent(undefined)
  }, [])

  const playRandom = useCallback(() => {
    try {
      const pick = TRACKS[Math.floor(Math.random() * TRACKS.length)]
      // Stop previous if any
      if (audioRef.current) {
        audioRef.current.pause()
      }
      const audio = new Audio(pick)
      audio.volume = volume
      audio.loop = true
      audioRef.current = audio
      const p = audio.play()
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // Autoplay may be blocked; require a user gesture
          // We silently fail; header toggle or key press after focus should succeed
        })
      }
      setCurrent(pick)
      setEnabled(true)
    } catch {
      // ignore
    }
  }, [volume])

  const toggle = useCallback(() => {
    if (enabled) {
      stop()
      setEnabled(false)
    } else {
      playRandom()
      setEnabled(true)
    }
  }, [enabled, playRandom, stop])

  const value = useMemo<MusicContextType>(() => ({ enabled, current, playRandom, stop, toggle, volume, setVolume }), [enabled, current, playRandom, stop, toggle, volume, setVolume])

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
