import React from 'react'
import {
  Screen,
  HeaderScreens,
  Graph,
  Roboto,
  CardSmack,
  CardSmackTitleType,
  IGraphData,
} from '@components'
import * as S from './HomeScreenStyles'

export function HomeScreen() {
  const MockData = [
    {
      id: '1',
      title: 'common_breakfast',
      totalCaloric: 122,
    },
    {
      id: '2',
      title: 'common_dinner',
      totalCaloric: 122,
    },
    {
      id: '3',
      title: 'common_lunch',
      totalCaloric: 122,
    },
  ]
  // Total vem do valor total de calorias que o usuário pode consumir por dia
  const mockDataGraph: IGraphData[] = [
    {
      name: 'consumed',
      y: MockData.reduce((acc, item) => acc + item.totalCaloric, 0),
      color: 'primary',
    },
    { name: 'total', y: 1200, color: 'gray300' },
  ]

  return (
    <Screen scrollable>
      <HeaderScreens screenName="bottom_tap_home" />
      <Graph
        data={mockDataGraph}
        label={`${mockDataGraph[0].y}/${mockDataGraph[1].y}`}
        description="home_screen_graph_title"
      />
      <Roboto
        text="Acompanhe seu de progresso diário:"
        textStyles="LargeRegular"
        color="primary"
      />
      <S.HomeScreenList>
        {MockData.map(item => (
          <CardSmack
            title={item.title as CardSmackTitleType}
            totalCaloric={item.totalCaloric}
            key={item.title}
            onPress={() => {
              console.log('OIII')
            }}
          />
        ))}
      </S.HomeScreenList>
    </Screen>
  )
}
