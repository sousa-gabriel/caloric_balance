import { Button, Roboto, Screen } from '@components'
import React from 'react'
import * as S from './SuccessScreenStyles'
import { isDarkMode } from '@theme'
import LogoDark from '@assets/imagens/png/logoDark.png'
import LogoLight from '@assets/imagens/png/logoLight.png'
import { normalize } from '@utils'

interface ISuccessScreen {
  description: string
  onButtonPress: () => void
}

export function SuccessScreen({ description, onButtonPress }: ISuccessScreen) {
  return (
    <Screen>
      <S.Container>
        <S.ContainerImageLogo>
          <S.ImageLogo
            source={isDarkMode ? LogoDark : LogoLight}
            style={{ resizeMode: 'contain' }}
          />
        </S.ContainerImageLogo>
        <Roboto
          text={description}
          textStyles="LargeSemiBold"
          color="secondary"
        />
      </S.Container>
      <Button
        title="Voltar para o Login"
        onPress={onButtonPress}
        style={{ marginBottom: normalize(24) }}
      />
    </Screen>
  )
}
