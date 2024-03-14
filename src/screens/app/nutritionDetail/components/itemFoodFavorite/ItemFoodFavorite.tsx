import { IconWrapper, Roboto } from '@components'
import * as S from './ItemFoodFavoriteStyles'
import { useNavigation } from '@react-navigation/native'

type IItemFoodFavorite = {
  titleFood: string
  calories: string
  id: string
}

export function ItemFoodFavorite({
  titleFood,
  calories,
  id,
}: IItemFoodFavorite) {
  const navigation = useNavigation()

  function handleNavigateToNutritionRecipe() {
    navigation.navigate('NutritionRecipeScreen', { title: titleFood, id: id })
  }

  return (
    <S.ContainerItemFood
      onPress={handleNavigateToNutritionRecipe}
      activeOpacity={0.7}
    >
      <S.ContentItemFood>
        <Roboto text={titleFood} textStyles="LargeSemiBold" color="primary" />
        <Roboto
          text={calories}
          textStyles="MediumRegular"
          style={{ marginTop: 16 }}
          color="secondary"
        />
      </S.ContentItemFood>
      <IconWrapper icon="chevron-right" size={'sp24'} color="secondary" />
    </S.ContainerItemFood>
  )
}
