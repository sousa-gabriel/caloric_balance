import React, { FC, useEffect } from 'react'
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SCREEN_WIDTH, getPathXCenterByIndex, normalize } from '@utils'
import { usePath } from '@hooks'
import { theme } from '@theme'
import * as S from './BottomTabStyles'
import { Roboto } from '../roboto/Roboto'
export type TabProps = {
  label: string
  icon: string
  index: number
  activeIndex: number
  onTabPress: () => void
}
const ICON_SIZE = normalize(30)
const LABEL_WIDTH = SCREEN_WIDTH / 4
const AnimatedIcon = Animated.createAnimatedComponent(Icon)
const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const { curvedPaths } = usePath()
  const animatedActiveIndex = useSharedValue(activeIndex)
  const iconPosition = getPathXCenterByIndex(curvedPaths, index)
  const labelPosition = getPathXCenterByIndex(curvedPaths, index)

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20
    const iconPositionX = iconPosition - index * ICON_SIZE
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    }
  })
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2.5 },
      ],
    }
  })
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? theme.colors.onPrimary : theme.colors.gray400,
  )

  useEffect(() => {
    animatedActiveIndex.value = activeIndex
    const activeIndexValue = activeIndex === index + 1
    iconColor.value = withTiming(
      activeIndexValue ? theme.colors.onPrimary : theme.colors.gray400,
    )
  }, [activeIndex])

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }))

  return (
    <>
      <S.TabItemContainer style={tabStyle}>
        <S.IconContainer onPress={onTabPress}>
          <AnimatedIcon
            name={icon}
            size={normalize(25)}
            animatedProps={animatedIconProps}
          />
        </S.IconContainer>
      </S.TabItemContainer>
      <S.LabelContainer style={labelContainerStyle}>
        <Roboto text={label} textStyles="LargeSemiBold" color="secondary" />
      </S.LabelContainer>
    </>
  )
}

export default TabItem
