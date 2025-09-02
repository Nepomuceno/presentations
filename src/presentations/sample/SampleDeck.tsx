import type { DeckComponentProps } from '../types'

export default function SampleDeck({ slide, idx }: DeckComponentProps) {
  if (slide.id === 'intro') return <Intro />
  if (slide.id === 'title') return <Title />
  return (
    <div className="mx-auto max-w-5xl w-full">
      <div className="placeholder">Missing slide: {slide.id} (index {idx})</div>
    </div>
  )
}

function Intro() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <div className="grid grid-cols-1 gap-4">
        <div className="surface p-6">
          <div className="text-sm text-[var(--muted)] mb-2">Welcome</div>
          <h2 className="text-3xl font-extrabold tracking-tight">Hello there 👋</h2>
          <p className="text-[var(--muted)] mt-2">This is a minimal, modular deck skeleton using React + Tailwind.</p>
          <ul className="mt-3 text-sm list-disc pl-5 text-[var(--muted)]">
            <li>Each presentation is a component</li>
            <li>Each slide is a tiny sub-component</li>
            <li>Animations via framer-motion presets</li>
          </ul>
        </div>
        <div className="surface p-6">
          <div className="slot-title font-bold">Visual Placeholder</div>
          <div className="placeholder">Drop an SVG, canvas, or layout here</div>
        </div>
      </div>
    </div>
  )
}

function Title() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <div className="py-8 text-center">
        <div className="text-[clamp(28px,6vw,64px)] font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Your Title</span>
        </div>
        <div className="mt-2 mx-auto h-2 rounded-full bg-gradient-to-r from-accent to-accent2 w-[min(46vw,520px)] animate-scale-x-in" />
        <p className="mt-4 text-[var(--muted)]">
          Add a subtitle or tagline here. Use ← → or Space to navigate.
        </p>
        <div className="mt-6 flex gap-2 justify-center flex-wrap">
          {["Collaboration","AI IDE","Infrastructure","Observability"].map((t,i)=>(
            <span key={t} className="surface border border-[var(--line)] rounded-full px-3 py-1 text-sm font-semibold animate-fade-in-up" style={{animationDelay: `${i*80}ms`}}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
