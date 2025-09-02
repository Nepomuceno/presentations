import { Routes, Route, Link } from 'react-router-dom'
import PresentationList from './routes/PresentationList'
import DeckRunner from './routes/DeckRunner'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/10 border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl" title="Gabe Presentations Styles">
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Gabe Presentations</span>
          </Link>
          <nav className="text-sm text-[var(--muted)]">
            <a href="/" className="hover:text-[var(--fg)]">Home</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<PresentationList />} />
          <Route path="/p/:id" element={<DeckRunner />} />
        </Routes>
      </main>

      <footer className="border-t border-[var(--line)] text-[var(--muted)] text-xs">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <span>Built with React + Vite + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}
