import React from 'react'
import { Roboto, Screen, Step, ActivityCard } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { OnBoardRouteProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export type Activity = 'Baixo' | 'Médio' | 'Alto'

export function ActivityScreen({ route }: OnBoardRouteProps<'ActivityScreen'>) {
  const navigation = useNavigation()
  const { gender, objective, age, height, weight, weightObject } = route.params

  function handleNext(activity: Activity) {
    navigation.navigate('CompleteScreen', {
      gender,
      objective,
      age,
      height,
      weight,
      weightObject,
      activity,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={8} maxStep={9} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_activity_title"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(40), textAlign: 'center' }}
        />
        <ActivityCard
          title="onboarding_activity_light_title"
          description="onboarding_activity_light_message"
          onPress={() => handleNext('Baixo')}
          icon={
            <LottieView
              autoPlay
              loop
              source={require('../../../../assets/lottie/Work.json')}
              style={{
                height: normalize(100),
              }}
            />
          }
        />
        <ActivityCard
          title="onboarding_activity_moderate_title"
          description="onboarding_activity_moderate_message"
          onPress={() => handleNext('Médio')}
          icon={
            <LottieView
              autoPlay
              loop
              source={require('../../../../assets/lottie/Time.json')}
              style={{
                height: normalize(100),
              }}
            />
          }
        />
        <ActivityCard
          title="onboarding_activity_intense"
          description="Faço acameia todos os dias, corro 1 km ou mais por dia"
          onPress={() => handleNext('Alto')}
          icon={
            <LottieView
              autoPlay
              loop
              source={require('../../../../assets/lottie/Running.json')}
              style={{
                height: normalize(100),
              }}
            />
          }
        />
      </S.OnBoardContainer>
    </Screen>
  )
}
