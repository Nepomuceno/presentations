import type { DeckComponentProps } from '../../types'
import Title from './slides/Title'
import Context from './slides/Context'
import Spark from './slides/Spark'
import FirstAttempt from './slides/FirstAttempt'
import Realization from './slides/Realization'
import Breakthrough from './slides/Breakthrough'
import FirstRealUse from './slides/FirstRealUse'
import Workflow from './slides/Workflow'
import WhatYoureSeeing from './slides/WhatYoureSeeing'
import WhatsNext from './slides/WhatsNext'
import Closing from './slides/Closing'

export default function PlatformDeck({ slide }: DeckComponentProps) {
  switch (slide.id) {
    case 'title':
      return <Title />
    case 'context':
      return <Context />
    case 'spark':
      return <Spark />
    case 'first-attempt':
      return <FirstAttempt />
    case 'realization':
      return <Realization />
    case 'breakthrough':
      return <Breakthrough />
    case 'first-real-use':
      return <FirstRealUse />
    case 'workflow':
      return <Workflow />
    case "what-you're-seeing":
      return <WhatYoureSeeing />
    case 'whats-next':
      return <WhatsNext />
    case 'closing':
      return <Closing />
    default:
      return <div className="placeholder">Missing slide: {slide.id}</div>
  }
}

