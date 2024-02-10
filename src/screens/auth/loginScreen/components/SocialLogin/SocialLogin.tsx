import React from 'react'
import * as S from '../../LoginScreenStyle'
import { IconWrapper } from '@components'

export function SocialLogin() {
  return (
    <S.ContentButtonLoginSocial>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="google" color="iconGoogle" size="sp24" />
      </S.IconCircle>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="facebook" color="iconFacebook" size="sp24" />
      </S.IconCircle>
      <S.IconCircle onPress={() => {}}>
        <IconWrapper icon="apple" color="iconApple" size="sp24" />
      </S.IconCircle>
    </S.ContentButtonLoginSocial>
  )
}
