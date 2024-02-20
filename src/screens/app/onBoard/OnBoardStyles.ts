import styled from 'styled-components/native'

export const OnBoardContainer = styled.View`
  align-items: center;
`

export const OnBoardContainerOptions = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spaces.sp56}px;
  margin-bottom: ${({ theme }) => theme.spaces.sp56}px;
`

export const OnBoardOption = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const OnBoardContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spaces.sp24}px;
`
