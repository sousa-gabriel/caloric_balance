import React from 'react'
import {
  CardNutrition,
  HeaderScreens,
  ICardNutrition,
  Screen,
} from '@components'
import * as S from './NutritionScreenStyles'
import { theme } from '@theme'

export function NutritionScreen() {
  let mockUserCalorics = {
    totalCalories: 1200,
    carbs: 1200 * 0.5,
    protein: 1200 * 0.3,
    fats: 1200 * 0.2,
  }

  const CardNutritionData: ICardNutrition[] = [
    {
      title: 'common_carbs',
      consumption: `${mockUserCalorics.carbs}g`,
      consumptionLevel: 'common_high',
      color: 'success',
    },
    {
      title: 'common_proteins',
      consumption: `${mockUserCalorics.protein}g`,
      consumptionLevel: 'common_medium',
      color: 'primary',
    },
    {
      title: 'common_fats',
      consumption: `${mockUserCalorics.fats}g`,
      consumptionLevel: 'common_low',
      color: 'error',
    },
  ]

  return (
    <Screen scrollable>
      <HeaderScreens screenName="bottom_tap_nutrition" />
      <S.ContainerCardNutrition style={{ ...theme.shadow }}>
        {CardNutritionData.map((item, index) => (
          <CardNutrition key={index} {...item} />
        ))}
      </S.ContainerCardNutrition>
    </Screen>
  )
}
