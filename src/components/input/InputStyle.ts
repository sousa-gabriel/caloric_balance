import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IInputStyle {
  color: 'primary' | 'secondary' | 'error'
  isFocused?: boolean
}

export const InputContainer = styled.View`
  width: 100%;
`
export const Input = styled.TextInput<IInputStyle>`
  flex: 1;
  color: ${({ theme }) => theme.colors.secondary};
`
export const InputRow = styled.View<IInputStyle>`
  height: ${normalize(60)}px;
  width: 100%;
  margin: ${normalize(16)}px 0px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0px ${normalize(16)}px;
  border-width: ${({ isFocused }) => (isFocused === true ? 2 : 1)}px;
`
