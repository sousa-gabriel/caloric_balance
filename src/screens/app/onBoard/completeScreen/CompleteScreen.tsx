import React from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { OnBoardRouteProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'
import { calculateBaseCalories } from './CompleteScreenSchema'
import { useAuthStore } from '@globalState'

export function CompleteScreen({ route }: OnBoardRouteProps<'CompleteScreen'>) {
  const params = route.params
  const { setOnBoarding, setUserBasalCalories } = useAuthStore()

  function handleNext() {
    const BasalCalories = calculateBaseCalories(params)
    setUserBasalCalories(BasalCalories)
    setOnBoarding(true)
  }

  return (
    <Screen>
      <Step stepCurrent={9} maxStep={9} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_congratulations"
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
          title="onboarding_congratulations_button"
          style={{ marginTop: normalize(40) }}
        />
      </S.OnBoardContainer>
    </Screen>
  )
}
