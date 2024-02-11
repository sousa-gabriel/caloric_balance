import { Button, Roboto, Screen } from '@components'
import React from 'react'
import * as S from './SuccessScreenStyles'
import { isDarkMode } from '@theme'
import LogoDark from '@assets/imagens/png/logoDark.png'
import LogoLight from '@assets/imagens/png/logoLight.png'
import { normalize } from '@utils'
import { TPublicParams } from 'src/routes/navigationType'
import { useNavigation } from '@react-navigation/native'

export function SuccessScreen({ route }: TPublicParams<'SuccessScreen'>) {
  const { description } = route.params
  const navigation = useNavigation()
  const handleLoginScreen = () => {
    navigation.navigate('LoginScreen')
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
          textStyles="LargeSemiBold"
          color="secondary"
        />
      </S.Container>
      <Button
        title="Voltar para o Login"
        onPress={handleLoginScreen}
        style={{ marginBottom: normalize(24) }}
      />
    </Screen>
  )
}
