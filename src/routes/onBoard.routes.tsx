import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GenderScreen } from '@screens'

export type OnBoardRoutesParamList = {
  GenderScreen: undefined
}

const Stack = createNativeStackNavigator<OnBoardRoutesParamList>()

export const OnBoardRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'GenderScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'GenderScreen'} component={GenderScreen} />
    </Stack.Navigator>
  )
}
