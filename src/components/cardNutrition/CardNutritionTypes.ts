import { ThemeColors } from '@theme'

type IConsumptionLevel = 'common_high' | 'common_medium' | 'common_low'
type ITitleCardNutrition = 'common_proteins' | 'common_carbs' | 'common_fats'

export interface ICardNutrition {
  title: ITitleCardNutrition
  consumption: string
  consumptionLevel: IConsumptionLevel
  color: ThemeColors
}
