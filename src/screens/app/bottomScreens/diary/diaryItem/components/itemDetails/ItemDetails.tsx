import { Roboto } from '@components'
import * as S from './ItemDetailsStyles'
import { ThemeColors } from '@theme'
import { useTranslation } from 'react-i18next'

export interface IItemDetails {
  id: string
  name: string
  totalCalories: number
  carbs: number
  protein: number
  fats: number
  TotalWeigh: string
  meal?: string
  haveIndicator?: boolean
  onPress?: () => void
}

interface IMacroNutrientsItem {
  value: string
  color: ThemeColors
}

export const ItemDetails = ({ carbs, fats, protein }: IItemDetails) => {
  const { t } = useTranslation()
  const macroNutrients: IMacroNutrientsItem[] = [
    { value: `${t('common_carbs')}: ${carbs}g`, color: 'success' },
    { value: `${t('common_proteins')}: ${protein}g`, color: 'primary' },
    { value: `${t('common_fats')}: ${fats}g`, color: 'error' },
  ]

  return (
    <S.Container>
      {macroNutrients.map((item, index) => (
        <S.RowIndicator key={index}>
          <S.Indicator color={item.color} />
          <Roboto
            text={item.value}
            color="secondary"
            textStyles="MediumSemiBold"
          />
        </S.RowIndicator>
      ))}
    </S.Container>
  )
}
