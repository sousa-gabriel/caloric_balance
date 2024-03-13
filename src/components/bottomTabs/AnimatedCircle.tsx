import React, { FC } from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import * as S from './BottomTabStyles'
import { normalize } from '@utils'

type CircleProps = {
  circleX: Animated.SharedValue<number>
}
const circleContainerSize = normalize(50)

const AnimatedCircle: FC<CircleProps> = ({ circleX }) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 1.9 }],
    }
  }, [])

  return (
    <S.CircleContainer
      style={[circleContainerStyle]}
      circleContainerSize={circleContainerSize}
    />
  )
}

export default AnimatedCircle
