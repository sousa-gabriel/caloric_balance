import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IHeader {
  haveTitle: boolean
  headerSize: number
}

export const Header = styled.View<IHeader>`
  justify-content: center;
  align-items: flex-start;
  height: ${({ haveTitle, headerSize }) =>
    haveTitle ? normalize(headerSize) : normalize(50)}px;
`
export const ContainerIcon = styled.View`
  position: absolute;
  top: 0px;
`
