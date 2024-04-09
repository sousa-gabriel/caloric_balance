import React, { useState } from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { Man, Woman } from '@assets'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

export type gender = 'onboarding_gender_male' | 'onboarding_gender_female'

export function GenderScreen() {
  const navigation = useNavigation()
  const [genderSelected, setGenderSelected] = useState<gender>(
    'onboarding_gender_male',
  )

  function genderSelectedCollor(gender: gender) {
    return genderSelected === gender ? 'primary' : 'secondary'
  }

  function handleNext() {
    navigation.navigate('ObjectiveScreen', { gender: genderSelected })
  }

  return (
    <Screen>
      <Step haveGoBack={false} stepCurrent={1} maxStep={9} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_gender"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginTop: normalize(56) }}
        />
        <S.OnBoardContainerOptions>
          <S.OnBoardOption
            onPress={() => setGenderSelected('onboarding_gender_male')}
            activeOpacity={0.7}
          >
            <Man />
            <Roboto
              text="onboarding_gender_male"
              color={genderSelectedCollor('onboarding_gender_male')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.OnBoardOption>
          <S.OnBoardOption
            onPress={() => setGenderSelected('onboarding_gender_female')}
            activeOpacity={0.7}
          >
            <Woman />
            <Roboto
              text="onboarding_gender_female"
              color={genderSelectedCollor('onboarding_gender_female')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.OnBoardOption>
        </S.OnBoardContainerOptions>
        <Button onPress={handleNext} title="common_Following" />
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
