import React from 'react'
import { Button, Input, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { OnBoardRouteProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function YearScreen({ route }: OnBoardRouteProps<'YearScreen'>) {
  const navigation = useNavigation()
  const { gender, objective } = route.params
  const [age, setAge] = React.useState('')

  function handleNext() {
    navigation.navigate('HeightScreen', {
      gender,
      objective,
      age,
    })
  }

  return (
    <Screen scrollable>
      <Step stepCurrent={3} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_year"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56) }}
        />
        <LottieView
          autoPlay
          loop
          source={require('../../../../assets/lottie/Baby.json')}
          style={{
            width: normalize(164),
            height: normalize(190),
          }}
        />
        <Input
          label="common_age"
          placeholder="common_age_placeholder"
          keyboardType="numeric"
          style={{ marginBottom: normalize(42) }}
          onChangeText={setAge}
          value={age}
        />
        <Button
          onPress={handleNext}
          title="common_Following"
          isDisabled={age.length < 1}
        />
      </S.OnBoardContainer>
      <LottieView
        autoPlay
        loop
        source={require('../../../../assets/lottie/GrandParrent.json')}
        style={{
          height: normalize(223),
        }}
      />
    </Screen>
  )
}
