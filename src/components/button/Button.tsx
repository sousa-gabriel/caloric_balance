import React from 'react'
import * as S from './ButtonStyle'
import { Roboto } from '../roboto/Roboto'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import { IIconOptions } from '../iconWrapper/IconNames'

export interface ButtonProps {
  text: string
  onClick: () => void
  icon?: IIconOptions
  typeButton?: 'Default' | 'ButtonLine' | 'ButtonText'
  isDisabled?: boolean
}

export function Button({
  text,
  onClick,
  icon,
  typeButton = 'Default',
  isDisabled = true,
}: ButtonProps) {
  const buttonColor = typeButton === 'Default' ? 'onPrimary' : 'primary'

  return (
    <S.ButtonContainer
      onPress={onClick}
      disabled={isDisabled}
      type={typeButton}
      activeOpacity={0.7}
      isDisabled={isDisabled}
    >
      {icon && <IconWrapper icon={icon} color={buttonColor} marginRight={16} />}
      <Roboto text={text} textStyles="LargeSemiBold" color={buttonColor} />
    </S.ButtonContainer>
  )
}