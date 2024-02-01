import React from 'react'
import { DotIndicator } from 'react-native-indicators'
import { ThemeColors, theme } from '../../theme/theme'
import { normalize } from '../../utils/normalize'

interface ILoading {
  color?: ThemeColors
  count?: number
  size?: number
}

export function Loading({ color = 'primary', count = 3, size = 10 }: ILoading) {
  return (
    <DotIndicator
      color={theme.colors[color]}
      count={count}
      size={normalize(size)}
    />
  )
}
