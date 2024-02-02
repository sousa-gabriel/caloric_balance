import React from 'react'
import * as S from '../../ModalStyles'
import { IconWrapper } from '../../../iconWrapper/IconWrapper'
import { Roboto } from '../../../roboto/Roboto'

interface IModalHeader {
  title: string
  onClose: () => void
}

export function ModalHeader({ title, onClose }: IModalHeader) {
  return (
    <S.ModalHeader>
      <IconWrapper
        icon="close"
        size={'sp20'}
        color="secondary"
        marginRight="sp16"
        onPress={onClose}
      />
      <Roboto text={title} color="secondary" textStyles="MediumBold" />
    </S.ModalHeader>
  )
}
