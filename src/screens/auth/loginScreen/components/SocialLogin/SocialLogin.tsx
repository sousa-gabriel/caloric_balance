import React from 'react'
import * as S from '../../LoginScreenStyle'
import { IconWrapper } from '@components'

export function SocialLogin() {
  return (
    <S.ContentButtonLoginSocial>
      <S.IconCircle onPress={() => {}} activeOpacity={0.7}>
        <IconWrapper icon="google" color="iconGoogle" size="sp24" />
      </S.IconCircle>
      <S.IconCircle onPress={() => {}} activeOpacity={0.7}>
        <IconWrapper icon="apple" color="iconApple" size="sp24" />
      </S.IconCircle>
    </S.ContentButtonLoginSocial>
  )
}
