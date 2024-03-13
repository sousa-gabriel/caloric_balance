import { ThemeColors } from '@theme'
import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IGraphColor {
  color: ThemeColors
  percentage?: number
}

export const Container = styled.View`
  margin-top: ${normalize(10)}px;
  align-items: flex-start;
  justify-content: center;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${normalize(60)}px;
`

export const ContainerGraph = styled.View<IGraphColor>`
  width: 100%;
  height: ${normalize(16)}px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  border-width: ${normalize(1)}px;
  border-radius: ${normalize(5)}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ContentGraph = styled.View<IGraphColor>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${normalize(3)}px;
`
