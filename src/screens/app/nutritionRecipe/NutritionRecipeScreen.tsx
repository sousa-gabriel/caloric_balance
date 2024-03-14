import React from 'react'
import { Header, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'

export function NutritionRecipeScreen({
  route,
}: AppRoutesProps<'NutritionRecipeScreen'>) {
  const { title } = route.params

  return (
    <Screen>
      <Header title={title} />
      {/* Inserir dados via ia ver como fazer kkkk */}
      {/* Todo inserir aqui uma foto */}
      {/* Lista de ingredientes  */}
      {/* Lista de modo de preparo */}
    </Screen>
  )
}
