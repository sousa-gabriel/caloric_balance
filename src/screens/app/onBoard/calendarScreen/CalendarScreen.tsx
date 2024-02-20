import React from 'react'
import {
  Button,
  Calendar,
  useCalendar,
  Roboto,
  Screen,
  Step,
} from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function CalendarScreen({ route }: AppRoutesProps<'CalendarScreen'>) {
  const navigation = useNavigation()
  const { gender, objective, age, height, weight, weightObject } = route.params
  const { interval, markedDates, oneDaySelected, startInterval } = useCalendar()

  function handleNext() {
    navigation.navigate('ActivityScreen', {
      gender,
      objective,
      age,
      height,
      weight,
      weightObject,
      objectiveDay: startInterval,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={8} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Meta de data"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(40), textAlign: 'center' }}
        />
        <Calendar
          markedDates={markedDates}
          onDayPress={oneDaySelected}
          StartMarkedDates={interval}
        />

        <Button
          onPress={handleNext}
          title="Seguinte"
          isDisabled={startInterval.length < 1}
          style={{ marginTop: normalize(40) }}
        />
      </S.OnBoardContainer>
      <LottieView
        autoPlay
        loop
        source={require('../../../../assets/lottie/Fruit.json')}
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
