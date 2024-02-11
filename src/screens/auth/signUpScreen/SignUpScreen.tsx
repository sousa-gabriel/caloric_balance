import { Button, Header, Input, Screen } from '@components'
import { useNavigation } from '@react-navigation/native'
import { normalize } from '@utils'
import React, { useState } from 'react'

export function SignUpScreen() {
  const navigation = useNavigation()
  const [completeName, setCompleteName] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleNavigationSuccess = () => {
    navigation.navigate('SuccessScreen', {
      description: 'Sua conta foi criada com sucesso!!!',
    })
  }

  return (
    <Screen scrollable>
      <Header title="Criar novo conta" />
      <Input
        label="Nome completo"
        placeholder="Digite seu nome completo"
        onChangeText={setCompleteName}
        value={completeName}
      />
      <Input
        label="Apelido"
        placeholder="Digite seu Apelido"
        onChangeText={setNickname}
        value={nickname}
      />
      <Input
        label="E-mail"
        placeholder="Digite seu email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        label="Senha"
        placeholder="Digite seu Apelido"
        onChangeText={setPassword}
        value={password}
      />
      <Input
        label="Confirmar senha"
        placeholder="Confirme sua senha "
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        onPress={handleNavigationSuccess}
        title="Finalizar cadastro"
        style={{ marginTop: normalize(36) }}
      />
    </Screen>
  )
}
