import React from 'react'

import { Svg, Path, Rect } from 'react-native-svg'
import { theme } from '../../../theme/theme'

export function Woman() {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Rect width="80" height="80" rx="12" fill="#EC4E78" />
      <Path
        d="M40 15C41.1787 15 42.3092 15.5268 43.1427 16.4645C43.9762 17.4021 44.4444 18.6739 44.4444 20C44.4444 21.3261 43.9762 22.5979 43.1427 23.5355C42.3092 24.4732 41.1787 25 40 25C38.8213 25 37.6908 24.4732 36.8573 23.5355C36.0238 22.5979 35.5556 21.3261 35.5556 20C35.5556 18.6739 36.0238 17.4021 36.8573 16.4645C37.6908 15.5268 38.8213 15 40 15ZM36.6667 65V50H30L35.7556 31.025C36.3111 28.975 38 27.5 40 27.5C42 27.5 43.6889 28.975 44.2444 31.025L50 50H43.3333V65H36.6667Z"
        fill={theme.colors.onPrimary}
      />
    </Svg>
  )
}
