import React, { useState } from 'react'
import * as S from './LoginScreenStyle'
import { Button, ButtonRow, Input, Screen } from '@components'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { SocialLogin } from './components/SocialLogin/SocialLogin'
import { useNavigation } from '@react-navigation/native'

export function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNavigationForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen')
  }

  const handleNavigationCreateAccount = () => {
    navigation.navigate('SignUpScreen')
  }

  return (
    <Screen scrollable>
      <S.Container>
        <S.ContainerImageLogo>
          <S.ImageLogo
            source={isDarkMode ? LogoDark : LogoLight}
            style={{ resizeMode: 'contain' }}
          />
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
          onPress={handleNavigationForgotPassword}
          title="Esqueci minha senha"
          typeButton="ButtonText"
          style={{ justifyContent: 'flex-start' }}
        />
        <ButtonRow
          buttonPrimaryOnPress={() => {}}
          buttonSecondaryOnPress={handleNavigationCreateAccount}
          buttonPrimaryTitle="Entrar"
          buttonSecondaryTitle="Criar conta"
        />
        <SocialLogin />
      </S.Container>
    </Screen>
  )
}
