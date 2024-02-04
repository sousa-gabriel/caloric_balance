import styled from 'styled-components/native'

export const OnBoardContainer = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.spaces.sp16}px;
  padding-right: ${({ theme }) => theme.spaces.sp16}px;
  margin-top: ${({ theme }) => theme.spaces.sp56}px;
`

export const OnBoardButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spaces.sp32}px;
  right: ${({ theme }) => theme.spaces.sp16}px;
`

export const OnBoardButtonStart = styled.View`
  width: 100%;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces.sp32}px;
  right: ${({ theme }) => theme.spaces.sp16}px;
`
