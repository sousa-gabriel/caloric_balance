import { normalize } from '@utils'
import styled from 'styled-components/native'

export const HeaderScreensContainer = styled.View`
  width: 100%;
  height: ${normalize(100)}px;
  flex-direction: row;
  align-items: center;
`
export const UserPhoto = styled.View`
  width: ${({ theme }) => theme.spaces.sp56}px;
  height: ${({ theme }) => theme.spaces.sp56}px;
  border-radius: ${({ theme }) => theme.spaces.sp32}px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: ${({ theme }) => theme.spaces.sp4}px;
  align-items: center;
  justify-content: center;
`

export const Photo = styled.Image`
  width: ${({ theme }) => theme.spaces.sp56 - theme.spaces.sp4}px;
  height: ${({ theme }) => theme.spaces.sp56 - theme.spaces.sp4}px;
  border-radius: ${({ theme }) => theme.spaces.sp32}px;
`
export const UserInformation = styled.View`
  margin-left: ${({ theme }) => theme.spaces.sp16}px;
  justify-content: center;
`
