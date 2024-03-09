import { normalize } from '@utils'
import styled from 'styled-components/native'

export const ContainerCardSmack = styled.TouchableOpacity`
  height: ${normalize(90)}px;
  width: 100%;
  border-radius: ${normalize(10)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${normalize(16)}px;
  margin-bottom: ${normalize(8)}px;
  margin-top: ${normalize(8)}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ContentCardSmack = styled.View`
  margin-left: ${normalize(16)}px;
`

export const RowCardSmack = styled.View`
  flex-direction: row;
  align-items: center;
`
