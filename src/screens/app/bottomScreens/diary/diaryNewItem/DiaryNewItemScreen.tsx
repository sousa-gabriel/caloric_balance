import React, { useState } from 'react'
import {
  Header,
  IMacroNutrientsCard,
  InputSearch,
  MacroNutrientsCard,
  Screen,
} from '@components'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function DiaryNewItemScreen() {
  const [searchValue, setSearchValue] = useState('')
  const navigation = useNavigation()
  let mockItemsConsumed = [
    {
      id: '1',
      name: 'Frango Cozido',
      totalCalories: 117,
      carbs: 0,
      protein: 21.6,
      fats: 1.4,
      TotalWeigh: '108 gramas',
      meal: 'Lunch',
    },
    {
      id: '2',
      name: 'Sorvete',
      totalCalories: 105,
      carbs: 14,
      protein: 1.7,
      fats: 4.5,
      TotalWeigh: '1 bola',
      meal: 'Dinner',
    },
    {
      id: '3',
      name: 'Ovo frito',
      totalCalories: 97,
      carbs: 1,
      protein: 6.2,
      fats: 7,
      TotalWeigh: '1 unidade',
      meal: 'Breakfast',
    },
    {
      id: '4',
      name: 'Arroz Cozido',
      totalCalories: 140,
      carbs: 30.2,
      protein: 0,
      fats: 3.2,
      TotalWeigh: '108 gramas',
      meal: 'Lunch',
    },
  ]

  function filterItems() {
    return mockItemsConsumed.filter(item => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.meal.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }

  function handleItemPress(item: IMacroNutrientsCard) {
    navigation.navigate('DiaryItemScreen', { itemMacroNutrients: item })
  }

  return (
    <Screen>
      <Header title={'common_item_list'} headerSize={100} />
      <FlatList
        data={filterItems()}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <InputSearch
            placeholder={'common_search'}
            value={searchValue}
            onChangeText={setSearchValue}
            onResetSearch={() => setSearchValue('')}
          />
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MacroNutrientsCard
            {...item}
            haveIndicator={filterItems().length - 1 !== index}
            onPress={() => handleItemPress(item)}
          />
        )}
      />
    </Screen>
  )
}
