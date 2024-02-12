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

export function ForgotPasswordScreen() {
  const navigation = useNavigation()
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordSchemaType>({
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordSchema),
    })

  const handleSuccessScreen = () => {
    if (formState.isValid) {
      navigation.navigate('SuccessScreen', {
        description:
          'Verifique seu e-mail com as instruções para alterar sua senha.',
      })
    }
  }

  return (
    <Screen>
      <S.Container>
        <S.Content>
          <Header title="Esqueceu a senha?" />
          <Roboto
            text="Digite seu e-mail e enviaremos as instruções para redefinição de senha"
            color="secondary"
            textStyles="LargeRegular"
            style={{ marginBottom: normalize(24) }}
          />
          <FormTextInput
            control={control}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <Button
            title="Enviar"
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
