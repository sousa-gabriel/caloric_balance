import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IInputStyle {
  color: 'primary' | 'secondary' | 'error'
}

export const InputContainer = styled.View`
  width: 100%;
`
export const Input = styled.TextInput<IInputStyle>`
  flex: 1;
  color: ${({ theme }) => theme.colors.secondary};
`
export const InputRow = styled.View<IInputStyle>`
  border-width: 1px;
  margin: ${normalize(16)}px 0px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  height: ${normalize(60)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
  padding: 0px ${normalize(16)}px;
`
