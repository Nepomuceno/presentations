import SampleDeck from './sample/SampleDeck'
import StoryPointsDeck from './storypoints/StoryPointsDeck'
import type { PresentationEntry, SlideMeta } from '../types'

const sampleSlides: SlideMeta[] = [
  { id: 'intro', transition: 'fade' },
  { id: 'title', transition: 'up' },
]

const presentations: PresentationEntry[] = [
  {
    id: 'sample',
    title: 'Sample Presentation',
    subtitle: 'Copy this to start a new one',
    slides: sampleSlides,
    component: SampleDeck,
  },
  {
    id: 'storypoints',
    title: "Story Points Aren't Going to Fix Anything",
    subtitle: 'Value-centric flow over point theater',
    slides: [
      { id: 'title', transition: 'fade' },
      { id: 'hook-jeffries', transition: 'up' },
      { id: 'complexity-trap', transition: 'slide' },
      { id: 'weaponization', transition: 'fade' },
      { id: 'accuracy-vs-counting', transition: 'up' },
      { id: 'goodhart', transition: 'fade' },
      { id: 'value-over-effort', transition: 'slide' },
      { id: 'focus-prioritization-impact', transition: 'up' },
      { id: 'what-to-use-instead', transition: 'slide' },
      { id: 'mini-example', transition: 'fade' },
      { id: 'close', transition: 'fade' },
      { id: 'citations', transition: 'up' },
    ],
    component: StoryPointsDeck,
  },
]

export default presentations
