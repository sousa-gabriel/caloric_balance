import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IButtonStyle {
  type: 'Default' | 'ButtonLine' | 'ButtonText'
  isDisabled: boolean
}

export const ButtonContainer = styled.TouchableOpacity<IButtonStyle>`
  background-color: ${({ theme, type }) =>
    type === 'Default' ? theme.colors.button : 'transparent'};
  height: ${normalize(40)}px;
  width: 100%;
  border-radius: ${normalize(5)}px;
  border-width: ${({ type }) => (type === 'ButtonLine' ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.button};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${normalize(10)}px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`
