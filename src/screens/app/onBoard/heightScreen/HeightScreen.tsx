import React from 'react'
import { Button, Input, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function HeightScreen({ route }: AppRoutesProps<'HeightScreen'>) {
  const navigation = useNavigation()
  const [height, setHeight] = React.useState('')
  const { gender, objective, age } = route.params

  function handleNext() {
    navigation.navigate('WeightScreen', {
      gender,
      objective,
      age,
      height,
    })
  }

  return (
    <Screen scrollable>
      <Step stepCurrent={4} maxStep={10} />
      <S.OnBoardContainer>
        <Roboto
          text="Qual é a sua Atura?"
          color="secondary"
          textStyles="LargeSemiBold"
          style={{ marginVertical: normalize(56) }}
        />
        <Input
          label="Altura"
          placeholder="Digite sua altura em cm"
          keyboardType="numeric"
          style={{ marginBottom: normalize(42) }}
          onChangeText={setHeight}
          value={height}
        />
        <Button
          onPress={handleNext}
          title="Seguinte"
          isDisabled={height.length < 1}
        />
        <LottieView
          autoPlay
          loop
          source={require('../../../../assets/lottie/Heigth.json')}
          style={{
            height: normalize(223),
            marginTop: normalize(16),
          }}
        />
      </S.OnBoardContainer>
    </Screen>
  )
}
