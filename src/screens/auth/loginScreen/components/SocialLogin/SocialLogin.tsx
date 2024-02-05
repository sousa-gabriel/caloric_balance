import React from 'react'
import * as S from '../../LoginStyle'
import { IconWrapper } from '@components'

export function SocialLogin() {
  return (
    <S.ContainerButtonLoginSocial>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="google" color="iconGoogle" size="sp24" />
      </S.IconCircle>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="facebook" color="iconFacebook" size="sp24" />
      </S.IconCircle>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="apple" color="iconApple" size="sp24" />
      </S.IconCircle>
    </S.ContainerButtonLoginSocial>
  )
}
