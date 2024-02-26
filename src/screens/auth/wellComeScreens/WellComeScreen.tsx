import { Balance, Calories, Nutrients } from '@assets'
import React, { useState } from 'react'
import * as S from './WellComeScreensStyles'
import { Roboto } from '@components'
import { normalize } from '@utils'
import { useNavigation } from '@react-navigation/native'

type TWellComeStep = 'calories' | 'nutrients' | 'balance'

export function WellComeScreens() {
  const [step, setStep] = useState<TWellComeStep>('calories')
  const navigation = useNavigation()

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
    calories: <Calories />,
    nutrients: <Nutrients />,
    balance: <Balance />,
  }

  const handleNavigation = () => {
    stepsSelected[step].nextStep === 'finishWellCome'
      ? navigation.navigate('LoginScreen')
      : setStep(stepsSelected[step].nextStep as TWellComeStep)
  }

  return (
    <>
      {stepImage[step]}
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
