import React from 'react'
import * as S from './CardSmackStyles'
import { Roboto } from '../roboto/Roboto'
import { theme } from '@theme'
import { IconWrapper } from '../iconWrapper/IconWrapper'
import LottieView from 'lottie-react-native'
import { normalize } from '@utils'

export type CardSmackTitleType =
  | 'common_breakfast'
  | 'common_lunch'
  | 'common_dinner'

interface ICardSmack {
  title: CardSmackTitleType
  totalCaloric: number
  onPress: () => void
}
export function CardSmack({ title, totalCaloric, onPress }: ICardSmack) {
  function getLottie() {
    switch (title) {
      case 'common_breakfast':
        return require('../../assets/lottie/Breakfast.json')
      case 'common_lunch':
        return require('../../assets/lottie/Lunch.json')
      case 'common_dinner':
        return require('../../assets/lottie/Dinner.json')
    }
  }

  return (
    <S.ContainerCardSmack
      style={theme.shadow}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <S.RowCardSmack>
        <LottieView
          autoPlay
          loop
          source={getLottie()}
          style={{
            width: normalize(60),
            height: normalize(60),
            borderRadius: normalize(30),
          }}
        />
        <S.ContentCardSmack>
          <Roboto text={title} color="secondary" textStyles="SmallBold" />
          <Roboto
            text={`${totalCaloric} cal`}
            color="gray400"
            textStyles="LargeRegular"
            style={{ marginTop: 4 }}
          />
        </S.ContentCardSmack>
      </S.RowCardSmack>
      <IconWrapper size="sp32" color="primary" icon="plus-circle" />
    </S.ContainerCardSmack>
  )
}
