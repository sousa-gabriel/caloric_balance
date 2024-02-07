import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IImageLogo {
  bottom: number
}

export const Header = styled.View`
  justify-content: center;
  align-items: flex-start;
  height: ${normalize(100)}px;
`

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`
export const Content = styled.View`
  width: 100%;
`

export const ContainerIcon = styled.View`
  position: absolute;
  top: 0px;
`
export const ImageLogo = styled.Image<IImageLogo>`
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  margin-top: ${normalize(100)}px;
  resize-mode: contain;
`
