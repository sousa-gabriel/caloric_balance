import React, { useCallback, useState } from 'react'
import {
  Header,
  IMacroNutrientsCard,
  InputSearch,
  Loading,
  MacroNutrientsCard,
  Roboto,
  Screen,
} from '@components'
import { FlatList, View } from 'react-native'
import { useNavigation, useScrollToTop } from '@react-navigation/native'
import { Nutrition, nutritionService } from '@services'
import LottieView from 'lottie-react-native'
import { normalize } from '@utils'

export function DiaryNewItemScreen() {
  const [listItem, setListItem] = useState<Nutrition[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const flatListRef = React.useRef<FlatList<Nutrition>>(null)
  useScrollToTop(flatListRef)
  const navigation = useNavigation()
  let page = 1

  function filterItems() {
    return listItem.filter(item => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.meal.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }

  function handleItemPress(item: IMacroNutrientsCard) {
    navigation.navigate('DiaryItemScreen', { itemMacroNutrients: item })
  }

  const handleItens = useCallback(
    (updatePage: boolean) => {
      if (updatePage) {
        page += 1
      } else {
        page = 1
      }
      setLoading(true)
      nutritionService
        .getList({ page, searchValue })
        .then(data => {
          setListItem([...listItem, ...data])
        })
        .finally(() => setLoading(false))
    },
    [searchValue, listItem],
  )

  return (
    <Screen>
      <Header title={'common_item_list'} headerSize={100} />
      <FlatList
        ref={flatListRef}
        data={filterItems()}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <InputSearch
            handleSearch={() => handleItens(false)}
            placeholder={'common_search'}
            value={searchValue}
            onChangeText={setSearchValue}
            onResetSearch={() => setSearchValue('')}
          />
        }
        ListEmptyComponent={
          <View style={{ flex: 1, marginTop: 50, alignItems: 'center' }}>
            <LottieView
              autoPlay
              loop
              source={require('../../../../../assets/lottie/EmptyList.json')}
              style={{
                width: normalize(250),
                height: normalize(250),
                alignSelf: 'center',
                marginBottom: 20,
              }}
            />
            <Roboto
              text="list_empty"
              textStyles="LargeSemiBold"
              color="secondary"
              style={{ fontSize: 20 }}
            />
          </View>
        }
        ListFooterComponent={loading ? <Loading /> : null}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MacroNutrientsCard
            {...item}
            haveIndicator={filterItems().length - 1 !== index}
            onPress={() => handleItemPress(item)}
          />
        )}
        onEndReached={() => {
          if (listItem.length > 8) {
            handleItens(true)
          }
        }}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  )
}
