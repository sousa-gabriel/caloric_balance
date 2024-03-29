import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { PublicRoutes } from './public.routes'
import { OnBoardRoutes } from './onBoard.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const authenticated = false
  return (
    <NavigationContainer>
      {/* {authenticated ? <OnBoardRoutes /> : <PublicRoutes />} */}
      <AppRoutes />
    </NavigationContainer>
  )
}
