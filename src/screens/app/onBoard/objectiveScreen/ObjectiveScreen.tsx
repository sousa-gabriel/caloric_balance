import React from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export type objective =
  | 'Perder peso'
  | 'Manter a forma'
  | 'Aumentar os músculos'

export function ObjectiveScreen({ route }: AppRoutesProps<'ObjectiveScreen'>) {
  const navigation = useNavigation()
  const { gender } = route.params

  function handleNext(objective: objective) {
    navigation.navigate('YearScreen', {
      gender,
      objective,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={2} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Qual é a seu principal objetivo?"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56) }}
        />
        <Button
          onPress={() => handleNext('Perder peso')}
          title="Perder peso"
          typeButton="ButtonLine"
        />
        <Button
          onPress={() => handleNext('Manter a forma')}
          title="Manter a forma"
          typeButton="ButtonLine"
          style={{ marginTop: normalize(56), marginBottom: normalize(56) }}
        />
        <Button
          onPress={() => handleNext('Aumentar os músculos')}
          title="Aumentar os músculos"
          typeButton="ButtonLine"
        />
      </S.OnBoardContainer>
      <LottieView
        autoPlay
        loop
        source={require('../../../../assets/lottie/Exercise.json')}
        style={{
          width: normalize(164),
          height: normalize(190),
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <LottieView
        autoPlay
        loop
        source={require('../../../../assets/lottie/GirlRunning.json')}
        style={{
          width: normalize(164),
          height: normalize(190),
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </Screen>
  )
}
