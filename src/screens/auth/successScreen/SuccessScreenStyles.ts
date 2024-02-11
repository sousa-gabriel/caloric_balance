import { normalize } from '@utils'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
