import React, { FC } from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import * as S from './BottomTabStyles'

type CircleProps = {
  circleX: Animated.SharedValue<number>
}
const circleContainerSize = 50

const AnimatedCircle: FC<CircleProps> = ({ circleX }) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 2 }],
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
