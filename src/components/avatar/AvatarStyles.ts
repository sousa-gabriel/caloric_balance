import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

export const AvatarContainer = styled.View`
  width: ${normalize(80)}px;
  height: ${normalize(80)}px;
  border-radius: ${normalize(40)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `${3}px solid ${theme.colors.primary}`};
  background: ${({ theme }) => theme.colors.primary};
`

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`

export const AvatarInitials = styled.Text`
  color: ${({ theme }) => theme.colors.onPrimary};
`
