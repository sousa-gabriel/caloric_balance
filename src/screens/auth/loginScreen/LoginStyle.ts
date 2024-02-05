import styled from 'styled-components/native'

export const ImageLogo = styled.Image``

export const ContainerImageLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spaces.sp40}px;
`
export const ContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
`
export const ContentButton = styled.View`
  flex: 1;
`

export const divider = styled.View`
  width: ${({ theme }) => theme.spaces.sp16}px;
`
export const ContainerButtonLoginSocial = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray300};
  margin-top: ${({ theme }) => theme.spaces.sp40}px;
  padding-top: ${({ theme }) => theme.spaces.sp40}px;
`
export const IconCircle = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spaces.sp40}px;
  height: ${({ theme }) => theme.spaces.sp40}px;
  border-radius: ${({ theme }) => theme.spaces.sp32}px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
`
