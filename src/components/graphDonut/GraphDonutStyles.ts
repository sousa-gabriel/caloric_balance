import { normalize } from '@utils'
import styled from 'styled-components/native'

interface IGraphDonutContainer {
  sizeGraph: number
}

export const Container = styled.View<IGraphDonutContainer>`
  margin-top: ${normalize(10)}px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ sizeGraph }) => normalize(sizeGraph)}px;
`

export const CenterGraph = styled.TouchableOpacity`
  position: absolute;
  width: ${normalize(150)}px;
  height: ${normalize(150)}px;
  border-radius: ${normalize(100)}px;
  align-items: center;
  justify-content: center;
`
