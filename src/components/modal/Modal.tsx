import React, { ReactNode } from 'react'
import * as S from './ModalStyles'
import { ModalHeader } from './components/modalHeader/ModalHeader'
import { ButtonRow } from '../buttonRow/ButtonRow'

interface IModal {
  modalVisible: boolean
  title: string
  onClose: () => void
  children?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  buttonPrimaryTitle?: string
  buttonSecondaryTitle?: string
}

export function Modal({
  modalVisible,
  title,
  onClose,
  children,
  onCancel,
  onConfirm,
  buttonPrimaryTitle,
  buttonSecondaryTitle,
}: IModal) {
  return (
    <S.ModalLib
      isVisible={modalVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <S.ModalContainer>
        <ModalHeader title={title} onClose={onClose} />
        <S.ModalContent>{children}</S.ModalContent>
        {(onCancel || onConfirm) && (
          <ButtonRow
            buttonPrimaryTitle={buttonPrimaryTitle}
            buttonPrimaryOnPress={onCancel}
            buttonSecondaryTitle={buttonSecondaryTitle}
            buttonSecondaryOnPress={onConfirm}
          />
        )}
      </S.ModalContainer>
    </S.ModalLib>
  )
}
