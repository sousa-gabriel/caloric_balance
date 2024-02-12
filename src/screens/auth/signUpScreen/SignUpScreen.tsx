import React from 'react'
import { Button, FormTextInput, Header, Screen } from '@components'
import { useNavigation } from '@react-navigation/native'
import { normalize } from '@utils'
import { useForm } from 'react-hook-form'
import { SignUpSchemaType, signUpSchema } from './SignUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function SignUpScreen() {
  const navigation = useNavigation()
  const { control, formState, handleSubmit } = useForm<SignUpSchemaType>({
    defaultValues: {
      fullName: '',
      nickName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  })

  const handleNavigationSuccess = () => {
    navigation.navigate('SuccessScreen', {
      description: 'Sua conta foi criada com sucesso!!!',
    })
  }

  return (
    <Screen scrollable>
      <Header title="Criar novo conta" />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />
      <FormTextInput
        control={control}
        name="nickName"
        label="Apelido"
        placeholder="Digite seu Apelido"
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu email"
      />
      <FormTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite seu Apelido"
        isInputPassword
      />
      <FormTextInput
        control={control}
        name="confirmPassword"
        label="Confirmar senha"
        placeholder="Confirme sua senha "
        isInputPassword
      />
      <Button
        onPress={handleSubmit(handleNavigationSuccess)}
        title="Finalizar cadastro"
        isDisabled={!formState.isValid}
        style={{ marginTop: normalize(36) }}
      />
    </Screen>
  )
}
