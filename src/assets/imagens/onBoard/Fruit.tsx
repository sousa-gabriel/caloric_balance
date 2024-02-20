import React from 'react'

import { Svg, Path, Rect } from 'react-native-svg'
import { theme } from '../../../theme/theme'

export function Fruit() {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#3377FF" />
      <Path
        d="M29.4525 17.5074C31.8156 20.5074 25.9078 29.5074 23.5447 29.5074C21.1816 29.5074 21.1816 28.5074 20 28.5074C18.8184 28.5074 18.8184 29.5074 16.4553 29.5074C14.0922 29.5074 8.18441 20.5074 10.5475 17.5074C12.9106 14.5074 16.4553 14.5074 18.8184 15.5074V12.5074C12.1781 15.5774 10.6775 11.2874 10.6775 11.2874C10.6775 11.2874 13.8204 7.69737 18.8184 12.5074V10.5074H21.1816V15.5074C23.5447 14.5074 27.0894 14.5074 29.4525 17.5074Z"
        fill={theme.colors.onSecondary}
      />
    </Svg>
  )
}
