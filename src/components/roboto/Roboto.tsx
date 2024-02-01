import React from 'react'
import { Text } from 'react-native'
import { ThemeColors, ThemeFonts, theme } from '../../theme/theme'

interface IRoboto {
  text: string
  color?: ThemeColors
  textStyles?: ThemeFonts
}
export function Roboto({
  text,
  color = 'gray700',
  textStyles = 'LargeBold',
}: IRoboto) {
  const robotoFont = {
    LargeBold: theme.fonts.LargeBold,
    MediumBold: theme.fonts.MediumBold,
    SmallBold: theme.fonts.SmallBold,
    LargeSemiBold: theme.fonts.LargeSemiBold,
    MediumSemiBold: theme.fonts.MediumSemiBold,
    SmallSemibold: theme.fonts.SmallSemibold,
    LargeRegular: theme.fonts.LargeRegular,
    MediumRegular: theme.fonts.MediumRegular,
    SmallRegular: theme.fonts.SmallRegular,
  }

  return (
    <Text
      style={{
        color: theme.colors[color],
        ...robotoFont[textStyles],
      }}
    >
      {text}
    </Text>
  )
}
