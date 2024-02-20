import styled from 'styled-components/native'
import { Button } from '@components'

interface IWellComeButton {
  buttonFinish?: boolean
}

export const WellComeContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding-right: ${({ theme }) => theme.spaces.sp24}px;
  padding-left: ${({ theme }) => theme.spaces.sp24}px;
  padding-top: ${({ theme }) => theme.spaces.sp24}px;
  padding-bottom: ${({ theme }) => theme.spaces.sp24}px;
  border-top-width: ${3}px;
  border-top-color: ${({ theme }) => theme.colors.primary};
`

export const WellComeContent = styled.View``

export const WellComeButton = styled(Button)<IWellComeButton>`
  width: ${({ buttonFinish }) => (buttonFinish ? '100%' : '50%')};
  margin-bottom: 32px;
  align-self: flex-end;
`
