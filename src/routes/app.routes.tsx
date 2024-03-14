import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from './bottomTabs.routes'
import { NutritionDetailScreen, NutritionRecipeScreen } from '@screens'
import { ITitleCardNutrition } from '@components'

export type AppRoutesParamList = {
  BottomTabs: undefined
  NutritionDetailScreen: {
    title: ITitleCardNutrition
  }
  NutritionRecipeScreen: {
    title: string
    id: string
  }
}

const Stack = createNativeStackNavigator<AppRoutesParamList>()

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="NutritionDetailScreen"
        component={NutritionDetailScreen}
      />
      <Stack.Screen
        name="NutritionRecipeScreen"
        component={NutritionRecipeScreen}
      />
    </Stack.Navigator>
  )
}
