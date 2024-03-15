import styled from 'styled-components/native'

export const ContainerItemFood = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray400};
  padding: 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContentItemFood = styled.View`
  align-items: flex-start;
`
