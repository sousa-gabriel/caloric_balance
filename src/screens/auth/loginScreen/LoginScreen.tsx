import React from 'react'
import * as S from './LoginScreenStyle'
import { Button, ButtonRow, FormTextInput, Screen } from '@components'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { SocialLogin } from './components/SocialLogin/SocialLogin'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { LoginSchemaType, loadingSchema } from './LoginScreenSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function LoginScreen() {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loadingSchema),
  })

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
        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        <FormTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          isInputPassword
        />
        <Button
          onPress={handleNavigationForgotPassword}
          title="Esqueci minha senha"
          typeButton="ButtonText"
          style={{ justifyContent: 'flex-start' }}
        />
        <ButtonRow
          buttonPrimaryOnPress={handleSubmit(data => {
            console.log(data)
          })}
          buttonSecondaryOnPress={handleNavigationCreateAccount}
          buttonPrimaryTitle="Entrar"
          buttonSecondaryTitle="Criar conta"
        />
        <SocialLogin />
      </S.Container>
    </Screen>
  )
}
