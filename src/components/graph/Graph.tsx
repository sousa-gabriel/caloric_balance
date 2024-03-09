import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { VictoryPie } from 'victory-native'
import * as S from './GraphStyles'
import { normalize } from '@utils'
import { Roboto } from '../roboto/Roboto'
import { ThemeColors, theme } from '@theme'

interface IGraph {
  data: IGraphData[]
  label: string | number
  description: string
  handleItemSelected?: (index: number) => void
}

export interface IGraphData {
  name: string
  y: number
  color: ThemeColors
}

export function Graph({
  data,
  description,
  label,
  handleItemSelected,
}: IGraph) {
  const [orientation, setOrientation] = useState<'width' | 'height'>('width')
  let colorScales = data.map(item => theme.colors[item.color])

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      width < height ? setOrientation('width') : setOrientation('height')
    })
  }, [])

  return (
    <S.Container>
      <VictoryPie
        animate={true}
        data={data}
        labelComponent={<View />}
        radius={({ datum }) =>
          datum.name !== 'total'
            ? normalize(130, orientation)
            : normalize(125, orientation)
        }
        innerRadius={({ datum }) =>
          datum.name !== 'total'
            ? normalize(95, orientation)
            : normalize(100, orientation)
        }
        labelRadius={100}
        width={
          orientation === 'width'
            ? Dimensions.get('window').width - 100
            : Dimensions.get('window').height - 100
        }
        height={
          orientation === 'width'
            ? Dimensions.get('window').width - 100
            : Dimensions.get('window').height - 100
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
          style={{ textAlign: 'center' }}
        />
        <Roboto
          text={description}
          color="secondary"
          textStyles="LargeRegular"
          style={{ marginTop: normalize(10, orientation), textAlign: 'center' }}
        />
      </S.CenterGraph>
    </S.Container>
  )
}
