import React from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export type objective =
  | 'onboarding_objective_lose_weight'
  | 'onboarding_object_Keep_in_shape'
  | 'onboarding_object_increase_muscles'

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
          onPress={() => handleNext('onboarding_objective_lose_weight')}
          title="onboarding_objective_lose_weight"
          typeButton="ButtonLine"
        />
        <Button
          onPress={() => handleNext('onboarding_object_Keep_in_shape')}
          title="onboarding_object_Keep_in_shape"
          typeButton="ButtonLine"
          style={{ marginTop: normalize(56), marginBottom: normalize(56) }}
        />
        <Button
          onPress={() => handleNext('onboarding_object_increase_muscles')}
          title="onboarding_object_increase_muscles"
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
