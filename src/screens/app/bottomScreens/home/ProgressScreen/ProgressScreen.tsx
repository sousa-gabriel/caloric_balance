import React from 'react'
import { Header, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'

export function ProgressScreen({ route }: AppRoutesProps<'ProgressScreen'>) {
  const { macroNutrients } = route.params

  return (
    <Screen>
      <Header title={'progress_screen_title'} headerSize={100} />
    </Screen>
  )
}
