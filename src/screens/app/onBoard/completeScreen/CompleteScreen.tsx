import React from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function CompleteScreen({ route }: AppRoutesProps<'CompleteScreen'>) {
  const navigation = useNavigation()
  const params = route.params

  function handleNext() {
    console.log('Ir para o App', params)
  }

  return (
    <Screen>
      <Step stepCurrent={10} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Parabéns Metas Definidas, Agora vamos por a mão na massa..."
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(40), textAlign: 'center' }}
        />
        <LottieView
          autoPlay
          loop
          source={require('../../../../assets/lottie/Congratulations.json')}
          style={{
            width: normalize(359),
            height: normalize(359),
          }}
        />
        <Button
          onPress={handleNext}
          title="Ir para o App"
          style={{ marginTop: normalize(40) }}
        />
      </S.OnBoardContainer>
    </Screen>
  )
}
