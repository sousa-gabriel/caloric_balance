import React from 'react'
import { Button, FormTextInput, Header, Screen } from '@components'
import { useNavigation } from '@react-navigation/native'
import { normalize } from '@utils'
import { useForm } from 'react-hook-form'
import { SignUpSchemaType, signUpSchema } from './SignUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@hooks'

export function SignUpScreen() {
  const navigation = useNavigation()
  const { registerWithEmail } = useAuth()
  const { control, formState, handleSubmit } = useForm<SignUpSchemaType>({
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  })

  const handleNavigationSuccess = async ({
    email,
    password,
  }: SignUpSchemaType) => {
    await registerWithEmail(email, password).then(() => {
      navigation.navigate('SuccessScreen', {
        description: 'success_screen_message_create_account',
      })
    })
  }

  return (
    <Screen scrollable>
      <Header title="create_account_title" />
      <FormTextInput
        control={control}
        name="fullName"
        label="create_account_complete_name"
        placeholder="create_account_complete_name_placeholder"
      />
      <FormTextInput
        control={control}
        name="username"
        label="create_account_username"
        placeholder="create_account_username_placeholder"
      />
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
      <FormTextInput
        control={control}
        name="confirmPassword"
        label="create_account_confirm_password"
        placeholder="create_account_confirm_password_placeholder"
        isInputPassword
      />
      <Button
        onPress={handleSubmit(handleNavigationSuccess)}
        title="create_account_finalize_registration"
        isDisabled={!formState.isValid}
        style={{ marginTop: normalize(36) }}
      />
    </Screen>
  )
}
