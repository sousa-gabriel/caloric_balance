import React from 'react'
import { Header, MacroNutrientsCard, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'
import { FlatList } from 'react-native'

export function DiaryDetailsScreen({
  route,
}: AppRoutesProps<'DiaryDetailsScreen'>) {
  const { macroNutrients, title } = route.params

  return (
    <Screen>
      <Header title={title} headerSize={100} />
      <FlatList
        data={macroNutrients}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <MacroNutrientsCard
            key={item.id}
            {...item}
            haveIndicator={macroNutrients.length - 1 !== index}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </Screen>
  )
}
