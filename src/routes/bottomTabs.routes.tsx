import { CustomBottomTab } from '@components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DiaryScreen,
  HomeScreen,
  NutritionScreen,
  BalanceScreen,
} from '@screens'

export type BottomTabsParamList = {
  HomeScreen: undefined
  DiaryScreen: undefined
  NutritionScreen: undefined
  BalanceScreen: undefined
}

const Tab = createBottomTabNavigator<BottomTabsParamList>()

export const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'bottom_tap_home',
          }}
        />
        <Tab.Screen
          name="DiaryScreen"
          component={DiaryScreen}
          options={{ tabBarLabel: 'bottom_tap_diary' }}
        />
        <Tab.Screen
          name="NutritionScreen"
          component={NutritionScreen}
          options={{ tabBarLabel: 'bottom_tap_nutrition' }}
        />
        <Tab.Screen
          name="BalanceScreen"
          component={BalanceScreen}
          options={{ tabBarLabel: 'bottom_tap_balance' }}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}
