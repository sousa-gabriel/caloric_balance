import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  GenderScreen,
  ObjectiveScreen,
  YearScreen,
  gender,
  objective,
  WeightScreen,
  HeightScreen,
  WeightObjectScreen,
  BenefitsScreen,
  CalendarScreen,
  ActivityScreen,
  Activity,
  CompleteScreen,
} from '@screens'

export type OnBoardRoutesParamList = {
  GenderScreen: undefined
  ObjectiveScreen: {
    gender: gender
  }
  YearScreen: {
    gender: gender
    objective: objective
  }
  HeightScreen: {
    gender: gender
    objective: objective
    age: string
  }
  WeightScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
  }
  WeightObjectScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
    weight: string
  }
  BenefitsScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
    weight: string
    weightObject: string
  }
  CalendarScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
    weight: string
    weightObject: string
  }
  ActivityScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
    weight: string
    weightObject: string
    objectiveDay: string
  }
  CompleteScreen: {
    gender: gender
    objective: objective
    age: string
    height: string
    weight: string
    weightObject: string
    objectiveDay: string
    activity: Activity
  }
}

const Stack = createNativeStackNavigator<OnBoardRoutesParamList>()

export const OnBoardRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'GenderScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'GenderScreen'} component={GenderScreen} />
      <Stack.Screen name={'ObjectiveScreen'} component={ObjectiveScreen} />
      <Stack.Screen name={'YearScreen'} component={YearScreen} />
      <Stack.Screen name={'HeightScreen'} component={HeightScreen} />
      <Stack.Screen name={'WeightScreen'} component={WeightScreen} />
      <Stack.Screen
        name={'WeightObjectScreen'}
        component={WeightObjectScreen}
      />
      <Stack.Screen name={'BenefitsScreen'} component={BenefitsScreen} />
      <Stack.Screen name={'CalendarScreen'} component={CalendarScreen} />
      <Stack.Screen name={'ActivityScreen'} component={ActivityScreen} />
      <Stack.Screen name={'CompleteScreen'} component={CompleteScreen} />
    </Stack.Navigator>
  )
}
