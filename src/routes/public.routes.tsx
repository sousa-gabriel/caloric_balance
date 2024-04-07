import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  WellComeScreens,
} from '@screens'
import { useWellComeCompleted } from '@globalState'

export type PublicRoutesParamList = {
  WellComeScreens: undefined
  BalanceWellComeScreens: undefined
  CaloriesWellComeScreens: undefined
  ForgotPasswordScreen: undefined
  LoginScreen: undefined
  NutrientsWellComeScreens: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    description: string
  }
}

const Stack = createNativeStackNavigator<PublicRoutesParamList>()

export const PublicRoutes = () => {
  const { wellComeCompleted } = useWellComeCompleted()

  return (
    <Stack.Navigator
      initialRouteName={wellComeCompleted ? 'LoginScreen' : 'WellComeScreens'}
      screenOptions={{ headerShown: false }}
    >
      {/* wellcome to the screens index */}
      <Stack.Screen name={'WellComeScreens'} component={WellComeScreens} />

      {/* public routes */}
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'SuccessScreen'} component={SuccessScreen} />
      <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}
