import React, { useState } from 'react'
import { Button, Input, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { OnBoardRouteProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function WeightObjectScreen({
  route,
}: OnBoardRouteProps<'WeightObjectScreen'>) {
  const navigation = useNavigation()
  const [weightObject, setWeightObject] = useState('')
  const { gender, objective, age, height, weight } = route.params

  function handleNext() {
    navigation.navigate('BenefitsScreen', {
      gender,
      objective,
      age,
      height,
      weight,
      weightObject,
    })
  }

  return (
    <Screen>
      <Step stepCurrent={6} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_object_weight"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56) }}
        />
        <Input
          label="common_weight"
          placeholder="common_weight_placeholder"
          keyboardType="numeric"
          style={{ marginBottom: normalize(42) }}
          onChangeText={setWeightObject}
          value={weightObject}
        />
        <Button
          onPress={handleNext}
          title="common_Following"
          isDisabled={weightObject.length < 1}
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
