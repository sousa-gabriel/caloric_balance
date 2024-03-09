import { normalize } from '@utils'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: ${normalize(10)}px;
  align-items: center;
  justify-content: center;
`

export const CenterGraph = styled.TouchableOpacity`
  position: absolute;
  width: ${normalize(150)}px;
  height: ${normalize(150)}px;
  border-radius: ${normalize(100)}px;
  align-items: center;
  justify-content: center;
`
