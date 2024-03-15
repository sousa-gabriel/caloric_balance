import React from 'react'
import { ThemeColors } from '@theme'
import * as S from './GraphBarHorizontalStyles'
import { Roboto } from '../roboto/Roboto'
import { Button } from '../button/Button'
import { normalize } from '@utils'

interface IGraphBarHorizontal {
  title: string
  onSelected: () => void
  totalPercentage: number
  color: ThemeColors
  consumed: number
  total: number
}

export function GraphBarHorizontal({
  title,
  onSelected,
  totalPercentage,
  color,
  consumed,
  total,
}: IGraphBarHorizontal) {
  return (
    <S.Container>
      <S.Row>
        <Roboto text={title} textStyles="SmallBold" color="secondary" />
        <Button
          onPress={onSelected}
          title="common_detail"
          typeButton="ButtonText"
          style={{ width: normalize(80) }}
        />
      </S.Row>
      <Roboto
        text={`${consumed}g / ${total}g`}
        textStyles="MediumRegular"
        style={{ marginBottom: 8 }}
        color="secondary"
      />
      <S.ContainerGraph color={color}>
        <S.ContentGraph percentage={totalPercentage} color={color} />
      </S.ContainerGraph>
    </S.Container>
  )
}
