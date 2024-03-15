import { GraphDonut, IGraphData } from '../graphDonut/GraphDonut'
import { Roboto } from '../roboto/Roboto'
import * as S from './MacroNutrientsCardStyles'

export interface IMacroNutrientsCard {
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

export const MacroNutrientsCard = ({
  TotalWeigh,
  carbs,
  fats,
  name,
  protein,
  totalCalories,
  haveIndicator = true,
  onPress,
}: IMacroNutrientsCard) => {
  const mockDataGraph: IGraphData[] = [
    {
      name: 'carbs',
      y: carbs,
      color: 'success',
    },
    {
      name: 'protein',
      y: protein,
      color: 'primary',
    },
    {
      name: 'fats',
      y: fats,
      color: 'error',
    },
  ]

  return (
    <S.ContainerMacroNutrients haveIndicator={haveIndicator} onPress={onPress}>
      <S.ContentMacroNutrients>
        <Roboto text={name} color="secondary" textStyles="LargeSemiBold" />
        <S.Row>
          <GraphDonut
            data={mockDataGraph}
            label={totalCalories}
            size={25}
            sizeGraph={140}
            internalRadius={40}
          />
          <S.Column>
            <S.RowIndicator>
              <S.Indicator color="success" />
              <Roboto
                text={`Carboidrato: ${carbs}g`}
                color="secondary"
                textStyles="MediumSemiBold"
              />
            </S.RowIndicator>
            <S.RowIndicator>
              <S.Indicator color="primary" />
              <Roboto
                text={`Proteínas: ${protein}g`}
                color="secondary"
                textStyles="MediumSemiBold"
              />
            </S.RowIndicator>
            <S.RowIndicator>
              <S.Indicator color="error" />
              <Roboto
                text={`Gordura: ${fats}g`}
                color="secondary"
                textStyles="MediumSemiBold"
              />
            </S.RowIndicator>
          </S.Column>
        </S.Row>
      </S.ContentMacroNutrients>
      <Roboto text={TotalWeigh} color="secondary" textStyles="MediumRegular" />
    </S.ContainerMacroNutrients>
  )
}
