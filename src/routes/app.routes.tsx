import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from './bottomTabs.routes'

export type AppRoutesParamList = {
  BottomTabs: undefined
}

const Stack = createNativeStackNavigator<AppRoutesParamList>()

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  )
}
