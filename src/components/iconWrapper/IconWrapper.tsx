import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { IIconOptions } from './IconNames'
import { ThemeColors, theme } from '../../theme/theme'
import { normalize } from '../../utils/normalize'

interface IIconWrapper {
  icon: IIconOptions
  size?: number
  color?: ThemeColors
  marginRight?: number
}

export function IconWrapper({
  icon,
  size = 20,
  color = 'onPrimary',
  marginRight = 0,
}: IIconWrapper) {
  return (
    <Icon
      name={icon}
      size={size}
      color={theme.colors[color]}
      style={{ marginRight: normalize(marginRight) }}
    />
  )
}
