import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { IIconOptions } from './IconNames'
import { ThemeColors, ThemeSpaces, theme } from '../../theme/theme'
import { TouchableOpacity } from 'react-native'

interface IIconWrapper {
  icon: IIconOptions
  size?: ThemeSpaces
  color?: ThemeColors
  marginRight?: ThemeSpaces
  onPress?: () => void
}

export function IconWrapper({
  icon,
  size = 'sp20',
  color = 'onPrimary',
  marginRight = 'sp0',
  onPress,
}: IIconWrapper) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Icon
        name={icon}
        size={theme.spaces[size]}
        color={theme.colors[color]}
        style={{ marginRight: theme.spaces[marginRight] }}
      />
    </TouchableOpacity>
  )
}
