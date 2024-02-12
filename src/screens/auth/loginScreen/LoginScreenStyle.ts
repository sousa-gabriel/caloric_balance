import { normalize } from '@utils'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  flex-grow: 1;
`
export const ImageLogo = styled.Image`
  width: ${normalize(200)}px;
  height: ${normalize(200)}px;
`

export const ContainerImageLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ContentButtonLoginSocial = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-top-width: 0.5px;
  border-top-color: ${({ theme }) => theme.colors.gray300};
  margin-top: ${normalize(height > 700 ? 30 : 5)}%;
  padding-top: ${({ theme }) => theme.spaces.sp24}px;
  padding-bottom: ${({ theme }) => theme.spaces.sp16}px;
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
