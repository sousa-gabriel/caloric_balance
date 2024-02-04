import React from 'react'
import { Button, Roboto } from '@components'
import { OnBoardCalories } from '@assets'
import { normalize } from '@utils'
import * as S from '../OnBoardScreensStyles'

export const CaloriesOnBoardScreen = () => {
  return (
    <>
      <OnBoardCalories />
      <S.OnBoardContainer>
        <Roboto text="01." color="secondary" textStyles="LargeBold" />
        <Roboto
          text="Aqui você tem o controle de suas Calorias."
          color="secondary"
          textStyles="LargeRegular"
          style={{ marginTop: normalize(30) }}
        />
        <S.OnBoardButton>
          <Button title="Próximo" onPress={() => {}} typeButton="ButtonLine" />
        </S.OnBoardButton>
      </S.OnBoardContainer>
    </>
  )
}
