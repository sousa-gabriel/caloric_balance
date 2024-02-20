import { normalize } from '@utils'
import styled from 'styled-components/native'

export const ActivityCardContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.sp16}px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.spaces.sp20}px;
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spaces.sp24}px;
  height: ${normalize(130)}px;
`

export const ActivityCardContent = styled.View`
  width: 60%;
  align-items: flex-start;
  justify-content: space-around;
`
