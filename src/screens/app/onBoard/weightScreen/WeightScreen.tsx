import React, { useState } from 'react'
import { Button, Input, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function WeightScreen({ route }: AppRoutesProps<'WeightScreen'>) {
  const navigation = useNavigation()
  const [weight, setWeight] = useState('')
  const { gender, objective, age, height } = route.params

  function handleNext() {
    navigation.navigate('WeightObjectScreen', {
      gender,
      objective,
      age,
      height,
      weight,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={5} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_weight"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56) }}
        />
        <Input
          label="common_weight"
          placeholder="common_weight_placeholder"
          keyboardType="numeric"
          style={{ marginBottom: normalize(42) }}
          onChangeText={setWeight}
          value={weight}
        />
        <Button
          onPress={handleNext}
          title="common_Following"
          isDisabled={weight.length < 1}
        />
      </S.OnBoardContainer>
      <LottieView
        autoPlay
        loop
        source={require('../../../../assets/lottie/Weight.json')}
        style={{
          height: normalize(300),
          width: normalize(300),
          marginTop: normalize(16),
        }}
      />
    </Screen>
  )
}
