import styled from 'styled-components/native'

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
`

export const ContentButton = styled.View`
  flex: 1;
`

export const Divider = styled.View`
  width: ${({ theme }) => theme.spaces.sp16}px;
`
