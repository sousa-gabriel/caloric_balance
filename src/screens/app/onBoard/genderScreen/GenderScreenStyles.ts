import styled from 'styled-components/native'

export const GenderScreenContainer = styled.View`
  align-items: center;
`

export const GenderContainerOptions = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spaces.sp56}px;
  margin-bottom: ${({ theme }) => theme.spaces.sp56}px;
`

export const GenderOption = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`
