import React from 'react'
import { Button, FormTextInput, Roboto, Screen, Header } from '@components'
import * as S from './ForgotPasswordStyled'
import { normalize } from '@utils'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from './ForgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@hooks'

export function ForgotPasswordScreen() {
  const navigation = useNavigation()
  const { forgotPassword } = useAuth()
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordSchemaType>({
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordSchema),
    })

  const handleSuccessScreen = async ({ email }: ForgotPasswordSchemaType) => {
    await forgotPassword(email).then(() => {
      navigation.navigate('SuccessScreen', {
        description: 'forgot_password_instructions',
      })
    })
  }

  return (
    <Screen>
      <S.Container>
        <S.Content>
          <Header title="common_forget_password" />
          <Roboto
            text="forgot_password_message"
            color="secondary"
            textStyles="LargeRegular"
            style={{ marginBottom: normalize(24) }}
          />
          <FormTextInput
            control={control}
            name="email"
            label="common_email"
            placeholder="common_email_placeholder"
          />
          <Button
            title="common_send"
            onPress={handleSubmit(handleSuccessScreen)}
            style={{ marginTop: 48 }}
            isDisabled={!formState.isValid}
          />
        </S.Content>
        <S.ImageLogo
          source={isDarkMode ? LogoDark : LogoLight}
          style={{ resizeMode: 'contain' }}
        />
      </S.Container>
    </Screen>
  )
}
