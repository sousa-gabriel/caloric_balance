import React from 'react'
import * as S from './ActivityCardStyles'
import { Roboto } from '@components'
import { normalize } from '@utils'
import { theme } from '@theme'

interface IActivityCard {
  title: string
  description: string
  onPress: () => void
  icon: React.ReactNode
}

export function ActivityCard({
  title,
  description,
  onPress,
  icon,
}: IActivityCard) {
  return (
    <S.ActivityCardContainer
      onPress={onPress}
      activeOpacity={0.7}
      style={theme.shadow}
    >
      <S.ActivityCardContent>
        <Roboto text={title} color="gray600" textStyles="LargeSemiBold" />
        <Roboto
          text={description}
          color="gray600"
          textStyles="SmallRegular"
          style={{ marginTop: normalize(8) }}
        />
      </S.ActivityCardContent>
      {icon}
    </S.ActivityCardContainer>
  )
}
