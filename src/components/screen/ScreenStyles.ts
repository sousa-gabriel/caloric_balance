import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

interface IScreenStyle {
  top: number
}

export const ScreenContainer = styled.View<IScreenStyle>`
  flex: 1;
  width: 100%;
  padding-left: ${({ theme }) => normalize(theme.spaces.sp16)}px;
  padding-right: ${({ theme }) => normalize(theme.spaces.sp16)}px;
  margin-bottom: ${({ top }) => normalize(top)}px;
`
