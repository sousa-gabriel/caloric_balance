import React, { useState } from 'react'
import { Graph, HeaderScreens, IGraphData, Screen } from '@components'

export function NutritionScreen() {
  const sumTotal = 1200
  const [label, setLabel] = useState<string | number>(sumTotal)
  const [description, setDescription] = useState<string>('Calorias Totais')

  const mockDataGraph: IGraphData[] = [
    {
      name: 'graph_consumed_proteins',
      y: 120,
      color: 'success',
    },
    {
      name: 'graph_consumed_carbs',
      y: 200,
      color: 'primary',
    },
    { name: 'graph_consumed_fats', y: 46, color: 'error' },
  ]
  // Caloria total que a pessoa pode consumir
  const total = mockDataGraph.reduce(
    (acc, item) => (item.name !== 'total' ? acc + item.y : acc),
    0,
  )

  const dataFormatted: IGraphData[] = [
    ...mockDataGraph,
    { name: 'total', y: sumTotal - total, color: 'disabled' },
  ]

  return (
    <Screen>
      <HeaderScreens screenName="bottom_tap_nutrition" />
      <Graph
        data={dataFormatted}
        label={label}
        description={description}
        handleItemSelected={(index: number) => {
          console.log(index)
          setLabel(index === -1 ? sumTotal : dataFormatted[index].y.toString())
          setDescription(
            index === -1 ? 'graph_total_calories' : dataFormatted[index].name,
          )
        }}
      />
    </Screen>
  )
}
