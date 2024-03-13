import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { SCREEN_WIDTH, normalize, SCREEN_HEIGHT } from '@utils'

const isNotTablet = SCREEN_WIDTH / SCREEN_HEIGHT < 0.6
interface ITabItemContainer {
  height: number
}

interface ICircleContainerSize {
  circleContainerSize: number
}

export const TabItemContainer = styled(Animated.View)``

export const IconContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: ${normalize(30)}px;
  height: ${normalize(30)}px;
`

export const LabelContainer = styled(Animated.View)`
  position: absolute;
  align-items: center;
  width: ${SCREEN_WIDTH / 5}px;
`

export const CustomBottomTabContainer = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  z-index: 1;
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.primaryContainer};
`

export const CustomTabItemsContainer = styled.View<ITabItemContainer>`
  height: ${({ height }) => normalize(height)}px;
  position: absolute;
  flex-direction: row;
  width: 100%;
`

export const CircleContainer = styled(Animated.View)<ICircleContainerSize>`
  position: absolute;
  top: -${isNotTablet ? normalize(45) : normalize(30)}px;
  width: ${normalize(50)}px;
  border-radius: ${({ circleContainerSize }) =>
    normalize(circleContainerSize) / 2}px;
  height: ${normalize(50)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`
