import { ThemeColors, ThemeFonts, theme } from '@theme'
import React from 'react'
import { Text, TextStyle } from 'react-native'
import { useTranslation } from 'react-i18next'
interface IRoboto {
  text: string
  textNotFormatted?: boolean
  color?: ThemeColors
  textStyles?: ThemeFonts
  style?: TextStyle
}
export function Roboto({
  text,
  textNotFormatted = false,
  color = 'gray700',
  textStyles = 'LargeBold',
  style,
}: IRoboto) {
  const { t } = useTranslation()
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
        ...style,
      }}
    >
      {textNotFormatted ? text : t(text)}
    </Text>
  )
}
