import { SCREEN_HEIGHT, SCREEN_WIDTH, normalize } from '@utils'
import styled from 'styled-components/native'
const isNotTablet = SCREEN_WIDTH / SCREEN_HEIGHT < 0.6
const size = isNotTablet ? 300 : 550

export const Container = styled.View`
  margin-top: ${normalize(10)}px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${size}px;
`

export const CenterGraph = styled.TouchableOpacity`
  position: absolute;
  width: ${normalize(150)}px;
  height: ${normalize(150)}px;
  border-radius: ${normalize(100)}px;
  align-items: center;
  justify-content: center;
`
