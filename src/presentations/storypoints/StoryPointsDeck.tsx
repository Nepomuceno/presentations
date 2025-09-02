import type { DeckComponentProps } from '../types'
import Title from './slides/Title'
import HookJeffries from './slides/HookJeffries'
import ComplexityTrap from './slides/ComplexityTrap'
import Weaponization from './slides/Weaponization'
import AccuracyVsCounting from './slides/AccuracyVsCounting'
import Goodhart from './slides/Goodhart'
import ValueOverEffort from './slides/ValueOverEffort'
import FocusPrioritizationImpact from './slides/FocusPrioritizationImpact'
import WhatToUseInstead from './slides/WhatToUseInstead'
import MiniExample from './slides/MiniExample'
import CloseSlide from './slides/CloseSlide'
import Citations from './slides/Citations'

export default function StoryPointsDeck({ slide }: DeckComponentProps) {
  switch (slide.id) {
    case 'title':
      return <Title />
    case 'hook-jeffries':
      return <HookJeffries />
    case 'complexity-trap':
      return <ComplexityTrap />
    case 'weaponization':
      return <Weaponization />
    case 'accuracy-vs-counting':
      return <AccuracyVsCounting />
    case 'goodhart':
      return <Goodhart />
    case 'value-over-effort':
      return <ValueOverEffort />
    case 'focus-prioritization-impact':
      return <FocusPrioritizationImpact />
    case 'what-to-use-instead':
      return <WhatToUseInstead />
    case 'mini-example':
      return <MiniExample />
    case 'close':
      return <CloseSlide />
    case 'citations':
      return <Citations />
    default:
      return <div className="placeholder">Missing slide: {slide.id}</div>
  }
}
