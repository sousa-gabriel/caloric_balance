import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from './bottomTabs.routes'
import {
  DiaryDetailsScreen,
  DiaryItemScreen,
  DiaryNewItemScreen,
  NutritionDetailScreen,
  NutritionRecipeScreen,
  SuccessScreen,
} from '@screens'
import { IMacroNutrientsCard, ITitleCardNutrition } from '@components'

export type AppRoutesParamList = {
  BottomTabs: undefined
  NutritionDetailScreen: {
    title: ITitleCardNutrition
  }
  NutritionRecipeScreen: {
    title: string
    id: string
  }
  DiaryDetailsScreen: {
    title: string
    macroNutrients: IMacroNutrientsCard[]
  }
  DiaryItemScreen: {
    itemMacroNutrients: IMacroNutrientsCard
  }
  DiaryNewItemScreen: undefined
  SuccessScreen: {
    description: string
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
      <Stack.Screen name="DiaryDetailsScreen" component={DiaryDetailsScreen} />
      <Stack.Screen name="DiaryNewItemScreen" component={DiaryNewItemScreen} />
      <Stack.Screen name="DiaryItemScreen" component={DiaryItemScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  )
}
