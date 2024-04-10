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
  const graphCustom: IGraphData[] = [
    {
      name: 'carbs',
      y: carbs,
      color: 'graphBlue',
    },
    {
      name: 'protein',
      y: protein,
      color: 'graphGreen',
    },
    {
      name: 'fats',
      y: fats,
      color: 'graphYellow',
    },
  ]

  return (
    <S.ContainerMacroNutrients haveIndicator={haveIndicator} onPress={onPress}>
      <S.ContentMacroNutrients>
        <Roboto text={name} color="secondary" textStyles="LargeSemiBold" />
        <S.Row>
          <GraphDonut
            data={graphCustom}
            label={totalCalories.toFixed(0)}
            size={25}
            sizeGraph={140}
            internalRadius={40}
          />
          <S.Column>
            <S.RowIndicator>
              <S.Indicator color="graphBlue" />
              <Roboto
                text={`Carboidrato: ${carbs ? carbs.toFixed(2) : 0}g`}
                color="secondary"
                textStyles="MediumSemiBold"
              />
            </S.RowIndicator>
            <S.RowIndicator>
              <S.Indicator color="graphGreen" />
              <Roboto
                text={`Proteínas: ${protein ? protein.toFixed(2) : 0}g`}
                color="secondary"
                textStyles="MediumSemiBold"
              />
            </S.RowIndicator>
            <S.RowIndicator>
              <S.Indicator color="graphYellow" />
              <Roboto
                text={`Gordura: ${fats ? fats.toFixed(2) : 0}g`}
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
