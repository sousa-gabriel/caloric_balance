import React from 'react'
import * as S from './DialogStyles'
import { Roboto } from '../roboto/Roboto'
import { normalize } from '@utils'
import { Button } from '../button/Button'

interface IDialog {
  isVisible: boolean
  onRequestClose: () => void
  title: string
  content: string
  buttonPrimary: {
    title: string
    onPress: () => void
  }
}

export function Dialog({
  isVisible,
  onRequestClose,
  title,
  content,
  buttonPrimary,
}: IDialog) {
  return (
    <S.DialogContainer
      isVisible={isVisible}
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
    >
      <S.DialogContent>
        <Roboto
          text={title}
          textStyles="MediumBold"
          color="secondary"
          style={{ marginBottom: normalize(16) }}
        />
        <Roboto
          text={content}
          textStyles="LargeRegular"
          color="secondary"
          style={{ marginBottom: normalize(48), textAlign: 'left' }}
        />
        <S.DialogButton>
          <Button
            title={buttonPrimary.title}
            onPress={buttonPrimary.onPress}
            typeButton="ButtonLine"
          />
        </S.DialogButton>
      </S.DialogContent>
    </S.DialogContainer>
  )
}
