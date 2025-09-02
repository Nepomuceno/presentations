export type SlideMeta = {
  id: string
  transition?: 'fade' | 'slide' | 'up' | 'scale'
  className?: string
}

export type DeckComponentProps = {
  slide: SlideMeta
  idx?: number
}

export type PresentationEntry = {
  id: string
  title: string
  subtitle?: string
  slides: SlideMeta[]
  component: React.ComponentType<DeckComponentProps>
}

