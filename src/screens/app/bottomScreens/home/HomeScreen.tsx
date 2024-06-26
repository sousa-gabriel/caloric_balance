import React from 'react'
import {
  Screen,
  HeaderScreens,
  GraphDonut,
  CardSmack,
  CardSmackTitleType,
  IGraphData,
  Button,
} from '@components'
import * as S from './HomeScreenStyles'
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
  const navigation = useNavigation()
  let mockItemsConsumed = [
    {
      id: '1',
      name: 'Frango Cozido',
      totalCalories: 117,
      carbs: 0,
      protein: 21.6,
      fats: 1.4,
      TotalWeigh: '108 gramas',
      meal: 'Lunch',
    },
    {
      id: '2',
      name: 'Sorvete',
      totalCalories: 105,
      carbs: 14,
      protein: 1.7,
      fats: 4.5,
      TotalWeigh: '1 bola',
      meal: 'Dinner',
    },
    {
      id: '3',
      name: 'Ovo frito',
      totalCalories: 97,
      carbs: 1,
      protein: 6.2,
      fats: 7,
      TotalWeigh: '1 unidade',
      meal: 'Breakfast',
    },
    {
      id: '4',
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

  const MockData = [
    {
      id: '1',
      title: 'common_breakfast',
      totalCaloric: mockItemsConsumed.reduce((acc, item) => {
        if (item.meal === 'Breakfast') {
          acc += item.totalCalories
        }
        return acc
      }, 0),
    },
    {
      id: '2',
      title: 'common_dinner',
      totalCaloric: mockItemsConsumed.reduce((acc, item) => {
        if (item.meal === 'Dinner') {
          acc += item.totalCalories
        }
        return acc
      }, 0),
    },
    {
      id: '3',
      title: 'common_lunch',
      totalCaloric: mockItemsConsumed.reduce((acc, item) => {
        if (item.meal === 'Lunch') {
          acc += item.totalCalories
        }
        return acc
      }, 0),
    },
  ]

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

  const totalCaloric =
    mockTotalUserConsumed.carbs +
    mockTotalUserConsumed.protein +
    mockTotalUserConsumed.fats

  const mockDataGraph: IGraphData[] = [
    {
      name: 'consumed',
      y: Number(totalCaloric.toFixed(0)),
      color: 'primary',
    },
    { name: 'total', y: mockUserCalorics.totalCalories, color: 'gray300' },
  ]

  function handleNavigationProgressScreen(meal: string) {
    const foods = mockItemsConsumed.filter(item => item.meal === meal)
    navigation.navigate('ProgressScreen', {
      macroNutrients: foods,
    })
  }

  return (
    <Screen scrollable>
      <HeaderScreens screenName="bottom_tap_home" />
      <GraphDonut
        data={mockDataGraph}
        label={`${mockDataGraph[0].y}/${mockDataGraph[1].y}`}
        description="home_screen_graph_title"
      />
      <Button
        title="home_screen_sub_title"
        typeButton="ButtonText"
        style={{ justifyContent: 'flex-start' }}
        onPress={() => {}}
      />
      <S.HomeScreenList>
        {MockData.map(item => (
          <CardSmack
            title={item.title as CardSmackTitleType}
            totalCaloric={item.totalCaloric}
            key={item.title}
            onPress={() => handleNavigationProgressScreen(item.title)}
          />
        ))}
      </S.HomeScreenList>
    </Screen>
  )
}
