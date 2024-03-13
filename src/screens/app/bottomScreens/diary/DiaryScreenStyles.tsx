import { SCREEN_HEIGHT, SCREEN_WIDTH, normalize } from '@utils'
import styled from 'styled-components/native'
import { Button } from '@components'
const isNotTablet = SCREEN_WIDTH / SCREEN_HEIGHT < 0.6
const size = isNotTablet ? 80 : 50

export const ContainerGraph = styled.View`
  margin-bottom: ${normalize(150)}px;
  margin-top: ${normalize(-50)}px;
`

export const ButtonAdd = styled(Button)`
  position: absolute;
  bottom: ${normalize(size)}px;
  width: ${normalize(100)}px;
  right: ${normalize(16)}px;
`
