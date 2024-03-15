import { normalize } from '@utils'
import styled from 'styled-components/native'

export const InputContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${normalize(32)}px;
`
export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: ${normalize(16)}px;
`
export const InputRow = styled.View`
  height: ${normalize(60)}px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray400};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0px ${normalize(16)}px;
  border-width: 1px;
`
