import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

interface IScreenStyle {
  top: number
  bottom: number
}

export const ScreenContainer = styled.View<IScreenStyle>`
  padding-top: ${({ top }) => normalize(top)}px;
  padding-bottom: ${({ bottom }) => normalize(bottom)}px;
  padding-left: ${({ theme }) => normalize(theme.spaces.sp16)}px;
  padding-right: ${({ theme }) => normalize(theme.spaces.sp16)}px;
`
