import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IInputRow {
  focusable: boolean
}

export const InputContainer = styled.Pressable`
  width: 100%;
  height: ${normalize(50)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${normalize(50)}px;
`
export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: ${normalize(16)}px;
`
export const InputRow = styled.View<IInputRow>`
  height: ${normalize(50)}px;
  width: 100%;
  border-color: ${({ theme, focusable }) =>
    theme.colors[focusable ? 'primary' : 'gray400']};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0px ${normalize(16)}px;
  border-width: 1px;
  margin-right: 16px;
`
