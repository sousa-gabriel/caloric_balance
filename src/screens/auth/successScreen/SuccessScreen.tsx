import { Button, Roboto, Screen } from '@components'
import React from 'react'
import * as S from './SuccessScreenStyles'
import { isDarkMode } from '@theme'
import LogoDark from '@assets/imagens/png/logoDark.png'
import LogoLight from '@assets/imagens/png/logoLight.png'
import { normalize } from '@utils'
import { AppRoutesProps, TPublicParams } from 'src/routes/navigationType'

export function SuccessScreen({
  route,
  navigation,
}: TPublicParams<'SuccessScreen'> | AppRoutesProps<'SuccessScreen'>) {
  const { description } = route.params
  const handleLoginScreen = () => {
    navigation.popToTop(), navigation.canGoBack() && navigation.goBack()
  }
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
          textStyles="LargeBold"
          color="secondary"
          style={{ marginTop: 60 }}
        />
      </S.Container>
      <Button
        title="success_screen_go_back_start"
        onPress={handleLoginScreen}
        style={{ marginBottom: normalize(24) }}
      />
    </Screen>
  )
}
