import React, { useState } from 'react'
import * as S from './WellComeScreensStyles'
import { Roboto } from '@components'
import { normalize } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { storage } from '@globalState'
import { Dimensions, Image } from 'react-native'

type TWellComeStep = 'calories' | 'nutrients' | 'balance'

export function WellComeScreens() {
  const [step, setStep] = useState<TWellComeStep>('calories')
  const navigation = useNavigation()
  const { width } = Dimensions.get('window')
  const HEIGHT_DEFAULT = 400

  const stepsSelected = {
    calories: {
      stepIndicator: '01.',
      title: 'well_come_calories',
      nextStep: 'nutrients',
      titleButton: 'common_next',
    },
    nutrients: {
      stepIndicator: '02.',
      title: 'well_come_nutrients',
      nextStep: 'balance',
      titleButton: 'common_next',
    },
    balance: {
      stepIndicator: '03.',
      title: 'well_come_balanced_diet',
      nextStep: 'finishWellCome',
      titleButton: 'common_finish',
    },
  }

  const stepImage = {
    calories: require('@assets/imagens/wellCome/Calories.png'),
    nutrients: require('@assets/imagens/wellCome/Nutrients.png'),
    balance: require('@assets/imagens/wellCome/Balance.png'),
  }

  function handleComplete() {
    storage.set('well_come_completed', true)
    navigation.navigate('LoginScreen')
  }

  function handleNavigation() {
    stepsSelected[step].nextStep === 'finishWellCome'
      ? handleComplete()
      : setStep(stepsSelected[step].nextStep as TWellComeStep)
  }

  return (
    <>
      {<Image source={stepImage[step]} width={width} height={HEIGHT_DEFAULT} />}
      <S.WellComeContainer>
        <S.WellComeContent>
          <Roboto
            text={stepsSelected[step].stepIndicator}
            color="secondary"
            textStyles="LargeBold"
            textNotFormatted
          />
          <Roboto
            text={stepsSelected[step].title}
            color="secondary"
            textStyles="LargeRegular"
            style={{
              marginTop: normalize(30),
              fontSize: normalize(20),
              lineHeight: normalize(24),
            }}
          />
        </S.WellComeContent>
        <S.WellComeButton
          title={stepsSelected[step].titleButton}
          onPress={handleNavigation}
          typeButton={
            stepsSelected[step].nextStep === 'finishWellCome'
              ? 'Default'
              : 'ButtonLine'
          }
          buttonFinish={stepsSelected[step].nextStep === 'finishWellCome'}
        />
      </S.WellComeContainer>
    </>
  )
}
