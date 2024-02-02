import React, { ReactNode } from 'react'
import * as S from './ModalStyles'
import { ModalHeader } from './components/modalHeader/ModalHeader'
import { ModalFooter } from './components/modalFooter/ModalFooter'

interface IModal {
  modalVisible: boolean
  title: string
  onClose: () => void
  children?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
}

export function Modal({
  modalVisible,
  title,
  onClose,
  children,
  onCancel,
  onConfirm,
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
          <ModalFooter onCancel={onCancel} onConfirm={onConfirm} />
        )}
      </S.ModalContainer>
    </S.ModalLib>
  )
}
