import React, { useState } from 'react'
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
import { useAuth } from '@context'

export function LoginScreen() {
  const navigation = useNavigation()
  const { signInWithEmail } = useAuth()
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit, setError } = useForm<LoginSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loadingSchema),
    shouldFocusError: true,
  })

  const handleNavigationForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen')
  }

  const handleNavigationCreateAccount = () => {
    navigation.navigate('SignUpScreen')
  }

  const handleLogin = async (data: LoginSchemaType) => {
    setLoading(true)
    await signInWithEmail(data.email, data.password)
      .then(() => {
        navigation.isFocused()
      })
      .catch(() => {
        setError('email', {
          message: ' ',
        })
        setError('password', {
          message: 'Email ou senha incorretos!!!',
        })
      })
      .finally(() => {
        setLoading(false)
      })
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
          label="common_email"
          placeholder="common_email_placeholder"
        />
        <FormTextInput
          control={control}
          name="password"
          label="common_password"
          placeholder="common_password_placeholder"
          isInputPassword
        />
        <Button
          onPress={handleNavigationForgotPassword}
          title="common_forget_password"
          typeButton="ButtonText"
          style={{ justifyContent: 'flex-start', marginTop: 0, height: 30 }}
        />
        <ButtonRow
          buttonPrimaryOnPress={handleSubmit(handleLogin)}
          buttonSecondaryOnPress={handleNavigationCreateAccount}
          buttonPrimaryTitle="common_login"
          buttonSecondaryTitle="common_create_account"
          loading={loading}
        />
        <SocialLogin />
      </S.Container>
    </Screen>
  )
}
