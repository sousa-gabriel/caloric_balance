import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { VictoryPie } from 'victory-native'
import * as S from './GraphPieStyles'
import { ThemeColors, theme } from '@theme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@utils'

export interface IGraphPie {
  data: IGraphPieItem[]
}

export interface IGraphPieItem {
  name: string
  consumed: number
  y: number
  total: number
  color: ThemeColors
}

export function GraphPie({ data }: IGraphPie) {
  const [orientation, setOrientation] = useState<'width' | 'height'>('width')
  let colorScales = data.map(item => theme.colors[item.color])
  const isNotTablet = SCREEN_WIDTH / SCREEN_HEIGHT < 0.6
  const size = isNotTablet ? 100 : 400

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      width < height ? setOrientation('width') : setOrientation('height')
    })
  }, [])

  return (
    <S.Container>
      <VictoryPie
        data={data}
        colorScale={colorScales}
        labelRadius={50}
        labels={({ datum }) => `${datum.y}%`}
        labelPlacement={'vertical'}
        width={
          orientation === 'width'
            ? Dimensions.get('window').width - size
            : Dimensions.get('window').height - size
        }
        height={
          orientation === 'width'
            ? Dimensions.get('window').width - size
            : Dimensions.get('window').height - size
        }
        style={{
          labels: {
            fontSize: 20,
            fontFamily: 'Roboto-Bold',
            fill: theme.colors.gray700,
          },
        }}
      />
    </S.Container>
  )
}
