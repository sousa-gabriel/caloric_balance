import { Roboto } from '../roboto/Roboto'
import * as S from './CardNutritionStyles'
import { ICardNutrition } from './CardNutritionTypes'

export const CardNutrition = ({
  color,
  consumption,
  consumptionLevel,
  title,
}: ICardNutrition) => {
  const isMedium =
    consumptionLevel === 'common_high' || consumptionLevel === 'common_medium'
  const isHigh = consumptionLevel === 'common_high'

  function handleTitleCardNutrition(): string {
    switch (consumptionLevel) {
      case 'common_high':
        return 'card_nutrition_high_consumption_indicator'
      case 'common_medium':
        return 'card_nutrition_medium_consumption_indicator'
      case 'common_low':
        return 'card_nutrition_low_consumption_indicator'
    }
  }

  return (
    <S.CardNutritionContainer>
      <S.CollorIndicator color={color} />
      <S.CardNutritionContent>
        <S.CardNutrition>
          <Roboto text={title} textStyles="MediumBold" color="secondary" />
          <Roboto
            text="card_nutrition_total_consumption"
            textStyles="MediumRegular"
            color="gray400"
            style={{ marginTop: 24 }}
          />
          <Roboto
            text={consumption}
            textStyles="LargeRegular"
            color="secondary"
            style={{ marginTop: 8 }}
          />
        </S.CardNutrition>
        <S.CardNutrition>
          <S.ContainerButton color={color}>
            <Roboto
              text={handleTitleCardNutrition()}
              textStyles="SmallSemibold"
              color={color}
            />
          </S.ContainerButton>
          <Roboto
            text="card_nutrition_medium_consumption"
            textStyles="MediumRegular"
            color="gray400"
          />
          <Roboto
            text={consumptionLevel}
            textStyles="LargeRegular"
            color="secondary"
            style={{ marginTop: 8 }}
          />
          <S.ContainerIndicatorLevel>
            <S.IndicatorLevel color={color} />
            <S.IndicatorLevel color={isMedium ? color : 'gray400'} />
            <S.IndicatorLevel color={isHigh ? color : 'gray400'} />
          </S.ContainerIndicatorLevel>
        </S.CardNutrition>
      </S.CardNutritionContent>
    </S.CardNutritionContainer>
  )
}
