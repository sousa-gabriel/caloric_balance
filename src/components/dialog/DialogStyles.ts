import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import { normalize } from '../../utils/normalize'

export const DialogContainer = styled(Modal)`
  margin: 0px ${({ theme }) => theme.spaces.sp16}px;
  align-items: center;
  justify-content: center;
`

export const DialogContent = styled.View`
  padding: ${({ theme }) => theme.spaces.sp16}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding-bottom: ${normalize(70)}px;
`

export const DialogButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spaces.sp16}px;
  right: ${({ theme }) => theme.spaces.sp16}px;
  width: 40%;
`
