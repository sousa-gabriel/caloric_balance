import { ThemeColors } from '@theme'
import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IColorIndicator {
  color: ThemeColors
}

interface IHaveIndicator {
  haveIndicator: boolean
}

export const ContainerMacroNutrients = styled.TouchableOpacity<IHaveIndicator>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom-width: ${({ haveIndicator }) => (haveIndicator ? 1 : 0)}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray400};
  padding: ${normalize(16)}px 0px;
`

export const ContentMacroNutrients = styled.View``

export const Row = styled.View`
  flex-direction: row;
  margin-top: ${normalize(16)}px;
  margin-left: ${normalize(16)}px;
  width: ${normalize(100)}px;
`

export const Column = styled.View`
  align-items: flex-start;
  margin-left: ${normalize(60)}px;
  width: ${normalize(200)}px;
  margin-top: ${normalize(4)}px;
`

export const RowIndicator = styled.View`
  flex-direction: row;
  margin-top: ${normalize(16)}px;
  align-items: center;
  justify-content: center;
`
export const Indicator = styled.View<IColorIndicator>`
  width: ${normalize(5)}px;
  height: ${normalize(30)}px;
  border-radius: ${normalize(5)}px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  margin-right: ${normalize(16)}px;
`
