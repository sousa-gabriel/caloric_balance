import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IInputStyle {
  color: 'primary' | 'secondary' | 'error'
  isFocused?: boolean
}

export const InputContainer = styled.Pressable`
  width: 100%;
`
export const Input = styled.TextInput<IInputStyle>`
  flex: 1;
  height: ${normalize(50)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${normalize(50)}px;
  margin: ${normalize(40)}px 0px;
`
export const InputRow = styled.View<IInputStyle>`
  height: ${normalize(60)}px;
  width: 100%;
  margin: ${normalize(16)}px 0px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${normalize(16)}px;
  border-radius: 5px;
  border-width: ${({ isFocused }) => (isFocused === true ? 2 : 1)}px;
`
