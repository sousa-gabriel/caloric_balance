import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from './bottomTabs.routes'
import {
  DiaryDetailsScreen,
  DiaryItemScreen,
  DiaryNewItemScreen,
  NutritionDetailScreen,
  NutritionRecipeScreen,
  ProgressScreen,
  SuccessScreen,
} from '@screens'
import { IMacroNutrientsCard, ITitleCardNutrition } from '@components'
import { OnBoardRoutes } from './onBoard.routes'
import { storage } from '@globalState'

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
  ProgressScreen: {
    macroNutrients: IMacroNutrientsCard[]
  }
  OnBoardRoutes: undefined
}

const Stack = createNativeStackNavigator<AppRoutesParamList>()

export const AppRoutes = () => {
  const onBoarding = storage.getBoolean('on_boarding')

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={onBoarding ? 'BottomTabs' : 'OnBoardRoutes'}
    >
      <Stack.Screen name="OnBoardRoutes" component={OnBoardRoutes} />
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
      <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
    </Stack.Navigator>
  )
}
