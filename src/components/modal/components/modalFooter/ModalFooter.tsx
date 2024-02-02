import React from 'react'
import * as S from '../../ModalStyles'
import { Button } from '../../../button/Button'

interface IModalFooter {
  onCancel?: () => void
  onConfirm?: () => void
}

export function ModalFooter({ onCancel, onConfirm }: IModalFooter) {
  return (
    <S.ModalFooter>
      {onCancel && (
        <S.ModalFooterButton>
          <Button onPress={onCancel} title="Cancelar" typeButton="ButtonLine" />
        </S.ModalFooterButton>
      )}
      {onCancel && onConfirm && <S.ModalFooterDivider />}
      {onConfirm && (
        <S.ModalFooterButton>
          <Button onPress={onConfirm} title="Confirmar" typeButton="Default" />
        </S.ModalFooterButton>
      )}
    </S.ModalFooter>
  )
}
