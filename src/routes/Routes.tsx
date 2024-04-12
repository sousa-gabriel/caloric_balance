import React from 'react'

import { PublicRoutes } from './public.routes'
import { AppRoutes } from './app.routes'
import { useAuth } from '@context'
import { Loading, Screen } from '@components'

export function Routes() {
  const { user, userStorageLoading } = useAuth()

  if (userStorageLoading) {
    return (
      <Screen>
        <Loading />
      </Screen>
    )
  }

  return user.id ? <AppRoutes /> : <PublicRoutes />
}
