import { normalize } from '@utils'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-grow: 1;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`
export const Content = styled.View`
  width: 100%;
  flex-grow: 1;
`
export const ImageLogo = styled.Image`
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  margin-top: ${normalize(100)}px;
`
