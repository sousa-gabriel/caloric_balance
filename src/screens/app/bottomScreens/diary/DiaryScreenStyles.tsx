import { normalize } from '@utils'
import styled from 'styled-components/native'
import { Button } from '@components'

export const ContainerGraph = styled.View`
  margin-bottom: ${normalize(150)}px;
  margin-top: ${normalize(-50)}px;
`

export const ButtonAdd = styled(Button)`
  position: absolute;
  bottom: ${normalize(80)}px;
  width: ${normalize(100)}px;
  right: ${normalize(16)}px;
`
