import React from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { OnBoardRouteProps } from 'src/routes/navigationType'
import { View } from 'react-native'
import { Fruit, Hamburger, Heart } from '@assets'
import LottieView from 'lottie-react-native'

export function BenefitsScreen({ route }: OnBoardRouteProps<'BenefitsScreen'>) {
  const navigation = useNavigation()
  const { gender, objective, age, height, weight, weightObject } = route.params

  function handleNext() {
    navigation.navigate('ActivityScreen', {
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
      <Step stepCurrent={7} maxStep={9} />
      <S.OnBoardContainer>
        <Roboto
          text="onboarding_benefits_title"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56), textAlign: 'center' }}
        />
        <View>
          <S.OnBoardContainerRow>
            <Hamburger />
            <Roboto
              text="onboarding_benefits_1"
              color="secondary"
              textStyles="MediumRegular"
              style={{
                marginLeft: normalize(16),
              }}
            />
          </S.OnBoardContainerRow>
          <S.OnBoardContainerRow>
            <Heart />
            <Roboto
              text="onboarding_benefits_2"
              color="secondary"
              textStyles="MediumRegular"
              style={{
                marginLeft: normalize(16),
              }}
            />
          </S.OnBoardContainerRow>
          <S.OnBoardContainerRow>
            <Fruit />
            <Roboto
              text="onboarding_benefits_3"
              color="secondary"
              textStyles="MediumRegular"
              style={{
                marginLeft: normalize(16),
              }}
            />
          </S.OnBoardContainerRow>
        </View>

        <Button
          onPress={handleNext}
          title="common_Following"
          isDisabled={weightObject.length < 1}
          style={{ marginTop: normalize(56) }}
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
