import { ThemeColors } from '@theme'
import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IColorIndicator {
  color: ThemeColors
}

export const Container = styled.View``

export const RowIndicator = styled.View`
  flex-direction: row;
  margin-top: ${normalize(16)}px;
  align-items: center;
  width: 100%;
`
export const Indicator = styled.View<IColorIndicator>`
  width: ${normalize(5)}px;
  height: ${normalize(30)}px;
  border-radius: ${normalize(5)}px;
  margin-right: ${normalize(16)}px;
  background-color: ${({ theme, color }) => theme.colors[color]};
`
