import React from 'react'
import { Header, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'
import { ItemFoodFavorite } from './components/itemFoodFavorite/ItemFoodFavorite'
import { FlatList } from 'react-native'

export function NutritionDetailScreen({
  route,
}: AppRoutesProps<'NutritionDetailScreen'>) {
  const { title } = route.params

  const titleScreen = handleTitleCardNutrition()

  function handleTitleCardNutrition(): string {
    switch (title) {
      case 'common_carbs':
        return 'nutrition_detail_title_carbs'
      case 'common_proteins':
        return 'nutrition_detail_title_proteins'
      case 'common_fats':
        return 'nutrition_detail_title_fats'
    }
  }

  const mockFoodsFavorite = [
    {
      id: '1',
      title: 'Frango Cozido',
      calories: '117 Calorias',
    },
    {
      id: '2',
      title: 'Peixe Cozido',
      calories: '82 Calorias',
    },
    {
      id: '3',
      title: 'Frango Grelhado',
      calories: '164 Calorias',
    },
    {
      id: '4',
      title: 'Salmão Cozido',
      calories: '206 Calorias',
    },
    {
      id: '5',
      title: 'Patinho Cozido',
      calories: '219 Calorias',
    },
    {
      id: '6',
      title: 'Frango A Milanesa',
      calories: '207 Calorias',
    },
  ]

  return (
    <Screen>
      <Header title={titleScreen} />
      <FlatList
        data={mockFoodsFavorite}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemFoodFavorite
            titleFood={item.title}
            calories={item.calories}
            id={item.id}
          />
        )}
      />
    </Screen>
  )
}
