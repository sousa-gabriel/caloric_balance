import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { PublicRoutes } from './public.routes'
import { OnBoardRoutes } from './onBoard.routes'
import { AppRoutes } from './app.routes'
import { useAuthStore } from '@globalState'

export function Routes() {
  const { onBoarding, user } = useAuthStore()

  function validateAccess() {
    return <AppRoutes />
    if (user === null) {
      return <PublicRoutes />
    }

    if (!onBoarding) {
      return <OnBoardRoutes />
    }

    return <AppRoutes />
  }

  return <NavigationContainer>{validateAccess()}</NavigationContainer>
}
