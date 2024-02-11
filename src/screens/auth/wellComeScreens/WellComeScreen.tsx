import { Balance, Calories, Nutrients } from '@assets'
import React, { useState } from 'react'
import * as S from './WellComeScreensStyles'
import { Roboto, Screen } from '@components'
import { normalize } from '@utils'
import { useNavigation } from '@react-navigation/native'

type TWellComeStep = 'calories' | 'nutrients' | 'balance'

export function WellComeScreens() {
  const [step, setStep] = useState<TWellComeStep>('calories')
  const navigation = useNavigation()

  const stepsSelected = {
    calories: {
      stepIndicator: '01.',
      title: 'Aqui você tem o controle de suas Calorias.',
      nextStep: 'nutrients',
      titleButton: 'Próximo',
    },
    nutrients: {
      stepIndicator: '02.',
      title: 'Aqui você tem o controle de suas Nutrientes.',
      nextStep: 'balance',
      titleButton: 'Próximo',
    },
    balance: {
      stepIndicator: '03.',
      title: 'Aqui você tem o controle de suas Balance.',
      nextStep: 'finishWellCome',
      titleButton: 'Finalizar',
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
      <Screen>
        <S.WellComeContainer>
          <S.WellComeContent>
            <Roboto
              text={stepsSelected[step].stepIndicator}
              color="secondary"
              textStyles="LargeBold"
            />
            <Roboto
              text={stepsSelected[step].title}
              color="secondary"
              textStyles="LargeRegular"
              style={{ marginTop: normalize(30) }}
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
      </Screen>
    </>
  )
}
