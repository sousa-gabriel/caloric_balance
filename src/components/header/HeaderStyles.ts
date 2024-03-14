import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IHeader {
  haveTitle: boolean
}

export const Header = styled.View<IHeader>`
  justify-content: center;
  align-items: flex-start;
  height: ${({ haveTitle }) => (haveTitle ? normalize(150) : normalize(50))}px;
`
export const ContainerIcon = styled.View`
  position: absolute;
  top: 0px;
`
