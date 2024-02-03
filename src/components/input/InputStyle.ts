import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IInputStyle {
  color: 'primary' | 'secondary' | 'error'
}

export const InputContainer = styled.View`
  width: 100%;
`
export const Input = styled.TextInput<IInputStyle>`
  height: ${normalize(60)}px;
  border-width: 1px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  margin: ${normalize(16)}px 0px;
  border-radius: 5px;
  width: 100%;
  padding: 0px ${normalize(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
`
