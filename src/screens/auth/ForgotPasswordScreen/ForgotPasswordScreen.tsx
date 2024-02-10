import React, { useState } from 'react'
import { Button, Input, Roboto, Screen, Header } from '@components'
import * as S from './ForgotPasswordStyled'
import { normalize } from '@utils'
import LogoDark from '../../../assets/imagens/png/logoDark.png'
import LogoLight from '../../../assets/imagens/png/logoLight.png'
import { isDarkMode } from '@theme'
import { View } from 'react-native'

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')

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
        </S.Content>
        <S.ImageLogo
          source={isDarkMode ? LogoDark : LogoLight}
          style={{ resizeMode: 'contain' }}
        />
      </S.Container>
    </Screen>
  )
}
