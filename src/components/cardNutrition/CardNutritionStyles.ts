import { ThemeColors } from '@theme'
import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IIndicator {
  color: ThemeColors
}

export const CardNutritionContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-radius: ${normalize(5)}px;
  flex-direction: row;
  justify-content: space-between;
  padding: ${normalize(20)}px ${normalize(20)}px ${normalize(20)}px 0px;
  margin-bottom: ${normalize(16)}px;
`
export const CollorIndicator = styled.View<IIndicator>`
  width: ${normalize(2)}px;
  height: ${normalize(32)}px;
  background-color: ${({ color, theme }) => theme.colors[color]};
`

export const CardNutritionContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerButton = styled.View<IIndicator>`
  border-width: 1px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${normalize(8)}px;
  padding: ${normalize(8)}px ${normalize(16)}px;
  margin-bottom: ${normalize(24)}px;
`

export const CardNutrition = styled.View`
  align-items: flex-start;
  margin-left: ${normalize(24)}px;
  justify-content: flex-start;
`
export const ContainerIndicatorLevel = styled.View`
  flex-direction: row;
`

export const IndicatorLevel = styled.View<IIndicator>`
  width: ${normalize(35)}px;
  height: ${normalize(5)}px;
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin-right: ${normalize(4)}px;
  margin-top: ${normalize(8)}px;
`
