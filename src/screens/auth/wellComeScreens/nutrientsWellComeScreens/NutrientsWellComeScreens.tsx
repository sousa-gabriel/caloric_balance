import React from 'react'
import { Button, Roboto } from '@components'
import { OnBoardNutrients } from '@assets'
import { normalize } from '@utils'
import * as S from '../WellComeScreensStyles'

export const NutrientsWellComeScreens = () => {
  return (
    <>
      <OnBoardNutrients />
      <S.OnBoardContainer>
        <Roboto text="02." color="secondary" textStyles="LargeBold" />
        <Roboto
          text="Saiba como organizar seus macronutrientes."
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
