import React from 'react'
import { Button, Input, Roboto, Screen, Step } from '@components'
import { normalize } from '@utils'
import * as S from '../OnBoardStyles'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from 'src/routes/navigationType'
import LottieView from 'lottie-react-native'

export function YearScreen({ route }: AppRoutesProps<'YearScreen'>) {
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
          text="Qual é a seu idade?"
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
          label="Idade"
          placeholder="Digite sua idade"
          keyboardType="numeric"
          style={{ marginBottom: normalize(42) }}
          onChangeText={setAge}
          value={age}
        />
        <Button
          onPress={handleNext}
          title="Seguinte"
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
