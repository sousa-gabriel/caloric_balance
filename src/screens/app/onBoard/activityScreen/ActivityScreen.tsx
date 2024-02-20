import React from 'react'
import { Roboto, Screen, Step, ActivityCard } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export type Activity = 'Baixo' | 'Médio' | 'Alto'

export function ActivityScreen({ route }: AppRoutesProps<'ActivityScreen'>) {
  const navigation = useNavigation()
  const { gender, objective, age, height, weight, weightObject, objectiveDay } =
    route.params

  function handleNext(activity: Activity) {
    navigation.navigate('CompleteScreen', {
      gender,
      objective,
      age,
      height,
      weight,
      weightObject,
      objectiveDay,
      activity,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={9} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Meta de data"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(40), textAlign: 'center' }}
        />
        <ActivityCard
          title="Baixo"
          description="Eu me movo apenas quando preciso pegar uma xícara de café"
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
          title="Médio"
          description="Boa parte do meu dia envolve movimento, faço academia 2 ou 3 por semana"
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
          title="Alto"
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
