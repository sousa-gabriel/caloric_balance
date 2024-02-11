import styled from 'styled-components/native'
import { Button } from '@components'

interface IWellComeButton {
  buttonFinish?: boolean
}

export const WellComeContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
`

export const WellComeContent = styled.View``

export const WellComeButton = styled(Button)<IWellComeButton>`
  width: ${({ buttonFinish }) => (buttonFinish ? '100%' : '50%')};
  margin-bottom: 32px;
  align-self: flex-end;
`
