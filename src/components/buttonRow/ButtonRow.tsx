import React from 'react'
import { Button } from '../button/Button'
import * as S from './ButtonRowStyles'

export interface ButtonRowProps {
  buttonPrimaryTitle?: string
  buttonPrimaryOnPress?: () => void
  buttonSecondaryTitle?: string
  buttonSecondaryOnPress?: () => void
  primaryTypeButton?: 'Default' | 'ButtonLine' | 'ButtonText'
  secondaryTypeButton?: 'Default' | 'ButtonLine' | 'ButtonText'
}

export function ButtonRow({
  buttonPrimaryTitle,
  buttonSecondaryTitle,
  buttonPrimaryOnPress,
  buttonSecondaryOnPress,
  primaryTypeButton,
  secondaryTypeButton,
}: ButtonRowProps) {
  return (
    <S.ContainerButton>
      <S.ContentButton>
        {buttonPrimaryTitle && buttonPrimaryOnPress && (
          <Button
            onPress={buttonPrimaryOnPress}
            title={buttonPrimaryTitle}
            typeButton={primaryTypeButton ?? 'Default'}
          />
        )}
      </S.ContentButton>
      <S.Divider />
      {buttonSecondaryTitle && buttonSecondaryOnPress && (
        <S.ContentButton>
          <Button
            onPress={buttonSecondaryOnPress}
            title={buttonSecondaryTitle}
            typeButton={secondaryTypeButton ?? 'ButtonLine'}
          />
        </S.ContentButton>
      )}
    </S.ContainerButton>
  )
}
