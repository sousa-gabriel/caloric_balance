import React, { useState } from 'react'
import * as S from './LoginStyle'
import { Button, ButtonRow, Input, Screen } from '@components'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { SocialLogin } from './components/SocialLogin/SocialLogin'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Screen>
      <S.ContainerImageLogo>
        <S.ImageLogo source={isDarkMode ? LogoDark : LogoLight} />
      </S.ContainerImageLogo>
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        onChangeText={setPassword}
        value={password}
        isInputPassword
      />
      <Button
        onPress={() => {}}
        title="Esqueci minha senha"
        typeButton="ButtonText"
        style={{ justifyContent: 'flex-start' }}
      />
      <ButtonRow
        buttonPrimaryOnPress={() => {}}
        buttonSecondaryOnPress={() => {}}
        buttonPrimaryTitle="Entrar"
        buttonSecondaryTitle="Criar conta"
      />
      <SocialLogin />
    </Screen>
  )
}
