import React from 'react'
import {
  GraphBarHorizontal,
  GraphPie,
  HeaderScreens,
  IGraphPieItem,
  Screen,
} from '@components'
import { ThemeColors } from '@theme'
import * as S from './DiaryScreenStyles'

export function DiaryScreen() {
  let mockItemsConsumed = [
    {
      name: 'Frango Cozido',
      totalCalories: 117,
      carbs: 0,
      protein: 21.6,
      fats: 1.4,
      TotalWeigh: '108 gramas',
      meal: 'Lunch',
    },
    {
      name: 'Sorvete',
      totalCalories: 105,
      carbs: 14,
      protein: 1.7,
      fats: 4.5,
      TotalWeigh: '1 bola',
      meal: 'Dinner',
    },
    {
      name: 'Ovo frito',
      totalCalories: 97,
      carbs: 1,
      protein: 6.2,
      fats: 7,
      TotalWeigh: '1 unidade',
      meal: 'Breakfast',
    },
    {
      name: 'Arroz Cozido',
      totalCalories: 140,
      carbs: 30.2,
      protein: 0,
      fats: 3.2,
      TotalWeigh: '108 gramas',
      meal: 'Lunch',
    },
  ]

  let mockUserCalorics = {
    totalCalories: 1200,
    carbs: 1200 * 0.5,
    protein: 1200 * 0.3,
    fats: 1200 * 0.2,
  }

  let mockTotalUserConsumed = mockItemsConsumed.reduce(
    (acc, item) => {
      acc.carbs += item.carbs
      acc.protein += item.protein
      acc.fats += item.fats
      return acc
    },
    {
      carbs: 0,
      protein: 0,
      fats: 0,
    },
  )

  let mockDataGraph: IGraphPieItem[] = [
    {
      name: 'common_proteins',
      consumed: mockTotalUserConsumed.protein,
      y: 30,
      total: mockUserCalorics.protein,
      color: 'success',
    },
    {
      name: 'common_carbs',
      consumed: mockTotalUserConsumed.carbs,
      y: 50,
      total: mockUserCalorics.carbs,
      color: 'primary',
    },
    {
      name: 'common_fats',
      consumed: mockTotalUserConsumed.fats,
      y: 20,
      total: mockUserCalorics.fats,
      color: 'error',
    },
  ]

  return (
    <>
      <Screen scrollable>
        <HeaderScreens screenName="bottom_tap_diary" />
        <GraphPie data={mockDataGraph} />
        <S.ContainerGraph>
          {mockDataGraph.map(item => (
            <GraphBarHorizontal
              totalPercentage={item.consumed}
              title={item.name}
              color={item.color as ThemeColors}
              key={item.name}
              consumed={item.consumed}
              total={item.total}
            />
          ))}
        </S.ContainerGraph>
      </Screen>
      <S.ButtonAdd title="common_add_foods" onPress={() => {}} />
    </>
  )
}
