import React, { useState } from 'react'
import { Button, Roboto, Screen, Step } from '@components'
import { Man, Woman } from '@assets'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

export type gender = 'Masculino' | 'Feminino'

export function GenderScreen() {
  const navigation = useNavigation()
  const [genderSelected, setGenderSelected] = useState<gender>('Masculino')

  function genderSelectedCollor(gender: gender) {
    return genderSelected === gender ? 'primary' : 'secondary'
  }

  function handleNext() {
    navigation.navigate('ObjectiveScreen', { gender: genderSelected })
  }

  return (
    <Screen>
      <Step haveGoBack={false} stepCurrent={1} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Qual é o seu gênero?"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginTop: normalize(56) }}
        />
        <S.OnBoardContainerOptions>
          <S.OnBoardOption
            onPress={() => setGenderSelected('Masculino')}
            activeOpacity={0.7}
          >
            <Man />
            <Roboto
              text="Masculino"
              color={genderSelectedCollor('Masculino')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.OnBoardOption>
          <S.OnBoardOption
            onPress={() => setGenderSelected('Feminino')}
            activeOpacity={0.7}
          >
            <Woman />
            <Roboto
              text="Feminino"
              color={genderSelectedCollor('Feminino')}
              textStyles="LargeSemiBold"
              style={{ marginTop: normalize(16) }}
            />
          </S.OnBoardOption>
        </S.OnBoardContainerOptions>
        <Button onPress={handleNext} title="Seguinte" />
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
