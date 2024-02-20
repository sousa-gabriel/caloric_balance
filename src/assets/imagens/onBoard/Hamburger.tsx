import React from 'react'

import { Svg, Path, Rect } from 'react-native-svg'
import { theme } from '../../../theme/theme'

export function Hamburger() {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#FF9000" />
      <Path
        d="M30 21C30 22.11 29.11 23 28 23H12C10.9 23 10 22.11 10 21C10 19.89 10.9 19 12 19H21L23.5 21L26 19H28C29.11 19 30 19.9 30 21ZM20 11C11 11 11 17 11 17H29C29 17 29 11 20 11ZM11 26C11 27.66 12.34 29 14 29H26C27.66 29 29 27.66 29 26V25H11V26Z"
        fill={theme.colors.onSecondary}
      />
    </Svg>
  )
}
