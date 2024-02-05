import { Button, IconWrapper, Input, Roboto, Screen } from '@components'
import React, { useState } from 'react'
import * as S from './ForgotPasswordStyled'
import { normalize } from '@utils'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { useAppSafeArea } from '@hooks'

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')
  const { bottom } = useAppSafeArea()

  return (
    <Screen>
      <S.Header>
        <S.ContainerIcon>
          <IconWrapper
            icon="arrow-left"
            onPress={() => {}}
            color="secondary"
            size="sp24"
          />
        </S.ContainerIcon>
        <Roboto
          text="Esqueceu sua senha?"
          color="secondary"
          textStyles="MediumBold"
          style={{ marginLeft: normalize(24) }}
        />
      </S.Header>
      <Roboto
        text="Digite seu e-mail e enviaremos as instruções para redefinição de senha"
        color="secondary"
        textStyles="LargeRegular"
        style={{ marginTop: normalize(24), marginBottom: normalize(48) }}
      />
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <Button
        title="Enviar"
        onPress={() => {}}
        isDisabled={email.length === 5}
        style={{ marginTop: 48 }}
      />

      <S.ImageLogo bottom={bottom} source={isDarkMode ? LogoDark : LogoLight} />
    </Screen>
  )
}
