import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { interpolatePath } from 'react-native-redash'
import TabItem from './TabItem'
import AnimatedCircle from './AnimatedCircle'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { SCREEN_WIDTH, getPathXCenter } from '@utils'
import { usePath } from '@hooks'
import { IIconOptions } from '../iconWrapper/IconNames'
import { BottomTabsParamList } from 'src/routes/bottomTabs.routes'
import * as S from './BottomTabStyles'
import { theme } from '@theme'

const AnimatedPath = Animated.createAnimatedComponent(Path)
export const CustomBottomTab: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { containerPath, curvedPaths, tHeight } = usePath()
  const circleXCoordinate = useSharedValue(0)
  const progress = useSharedValue(1)
  const handleMoveCircle = (currentPath: string) => {
    circleXCoordinate.value = getPathXCenter(currentPath)
  }

  const selectIcon = (routeName: keyof BottomTabsParamList): IIconOptions => {
    switch (routeName) {
      case 'HomeScreen':
        return 'home'
      case 'DiaryScreen':
        return 'notebook-edit'
      case 'NutritionScreen':
        return 'food-apple'
      case 'BalanceScreen':
        return 'wallet'
    }
  }

  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({ length: curvedPaths.length }, (_, index) => index + 1),
      curvedPaths,
    )
    runOnJS(handleMoveCircle)(currentPath)
    return {
      d: `${containerPath} ${currentPath}`,
    }
  })

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab)
    progress.value = withTiming(index)
  }

  return (
    <S.CustomBottomTabContainer style={{ ...theme.shadow }}>
      <Svg width={SCREEN_WIDTH} height={tHeight}>
        <AnimatedPath
          fill={theme.colors.onPrimary}
          animatedProps={animatedProps}
        />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinate} />
      <S.CustomTabItemsContainer height={tHeight}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel ? options.tabBarLabel : route.name
          return (
            <TabItem
              key={index.toString()}
              label={label as string}
              icon={selectIcon(route.name as keyof BottomTabsParamList)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() => handleTabPress(index + 1, route.name)}
            />
          )
        })}
      </S.CustomTabItemsContainer>
    </S.CustomBottomTabContainer>
  )
}
export default CustomBottomTab
