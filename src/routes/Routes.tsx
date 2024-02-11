import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { PublicRoutes } from './public.routes'

export function Routes() {
  const authenticated = false
  return (
    <NavigationContainer>
      {authenticated ? (
        <View style={{ flex: 1, backgroundColor: 'red' }} />
      ) : (
        <PublicRoutes />
      )}
    </NavigationContainer>
  )
}
