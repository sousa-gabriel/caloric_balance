import React from 'react'
import * as S from './ButtonStyle'
import { Roboto } from '../roboto/Roboto'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { IIconOptions } from '../iconWrapper/IconNames'
import { ViewStyle } from 'react-native/types'

export interface ButtonProps {
  title: string
  onPress: () => void
  icon?: IIconOptions
  typeButton?: 'Default' | 'ButtonLine' | 'ButtonText'
  isDisabled?: boolean
  style?: ViewStyle
}

export function Button({
  title,
  onPress,
  icon,
  typeButton = 'Default',
  isDisabled = false,
  style,
}: ButtonProps) {
  const buttonColor = typeButton === 'Default' ? 'onPrimary' : 'primary'

  return (
    <S.ButtonContainer
      onPress={onPress}
      disabled={isDisabled}
      type={typeButton}
      activeOpacity={0.7}
      isDisabled={isDisabled}
      style={style}
    >
      {icon && (
        <IconWrapper icon={icon} color={buttonColor} marginRight={'sp16'} />
      )}
      <Roboto text={title} textStyles="LargeSemiBold" color={buttonColor} />
    </S.ButtonContainer>
  )
}
