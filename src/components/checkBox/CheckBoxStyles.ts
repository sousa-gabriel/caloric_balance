import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

interface ICheckBoxStyles {
  isChecked: boolean
}

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-self: flex-start;
`

export const CheckBoxShow = styled.View<ICheckBoxStyles>`
  height: ${normalize(24)}px;
  width: ${normalize(24)}px;
  margin-right: ${normalize(16)}px;
  border-radius: ${normalize(4)}px;
  border-width: ${normalize(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.background};
  align-items: center;
  justify-content: center;
`
