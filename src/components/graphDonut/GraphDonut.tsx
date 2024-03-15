import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { VictoryPie } from 'victory-native'
import * as S from './GraphDonutStyles'
import { normalize } from '@utils'
import { Roboto } from '../roboto/Roboto'
import { ThemeColors, theme } from '@theme'

export interface IGraph {
  data: IGraphData[]
  label: string | number
  description?: string
  handleItemSelected?: (index: number) => void
  size?: number
  sizeGraph?: number
  internalRadius?: number
}

export interface IGraphData {
  name: string
  y: number
  color: ThemeColors
}

export function GraphDonut({
  data,
  description,
  label,
  handleItemSelected,
  size = 100,
  sizeGraph = 300,
  internalRadius,
}: IGraph) {
  const [orientation, setOrientation] = useState<'width' | 'height'>('width')
  let colorScales = data.map(item => theme.colors[item.color])

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      width < height ? setOrientation('width') : setOrientation('height')
    })
  }, [])

  return (
    <S.Container sizeGraph={sizeGraph}>
      <VictoryPie
        data={data}
        labelComponent={<View />}
        radius={({ datum }) =>
          datum.name !== 'total'
            ? normalize(normalize(size + 30), orientation)
            : normalize(normalize(size + 25), orientation)
        }
        innerRadius={({ datum }) =>
          internalRadius
            ? normalize(internalRadius)
            : datum.name !== 'total'
            ? normalize(size - 5, orientation)
            : normalize(size, orientation)
        }
        labelRadius={normalize(size)}
        width={
          orientation === 'width'
            ? Dimensions.get('window').width - normalize(size)
            : Dimensions.get('window').height - normalize(size)
        }
        height={
          orientation === 'width'
            ? Dimensions.get('window').width - normalize(size)
            : Dimensions.get('window').height - normalize(size)
        }
        colorScale={colorScales}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    target: 'labels',
                    mutation: props => {
                      handleItemSelected && handleItemSelected(props.index)
                    },
                  },
                ]
              },
            },
          },
        ]}
      />
      <S.CenterGraph
        onPress={() => handleItemSelected && handleItemSelected(-1)}
        activeOpacity={0.7}
      >
        <Roboto
          text={label.toString()}
          color="secondary"
          style={{ textAlign: 'center', fontSize: normalize(24) }}
          textStyles={description ? 'LargeSemiBold' : 'MediumRegular'}
        />
        {description && (
          <Roboto
            text={description}
            color="secondary"
            textStyles="LargeRegular"
            style={{
              marginTop: normalize(10, orientation),
              textAlign: 'center',
            }}
          />
        )}
      </S.CenterGraph>
    </S.Container>
  )
}
