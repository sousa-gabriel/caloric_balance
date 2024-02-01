import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

interface IButtonStyle {
  type: 'Default' | 'ButtonLine' | 'ButtonText'
  isDisabled: boolean
}

export const ButtonContainer = styled.TouchableOpacity<IButtonStyle>`
  background-color: ${({ theme, type }) =>
    type === 'Default' ? theme.colors.primary : 'transparent'};
  height: ${normalize(50)}px;
  width: 100%;
  border-radius: ${normalize(5)}px;
  border-width: ${({ type }) => (type === 'ButtonLine' ? '1px' : '0px')};
  border-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${normalize(10)}px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`
