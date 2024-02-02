import styled from 'styled-components/native'
import Modal from 'react-native-modal'

export const ModalLib = styled(Modal)`
  margin: 0;
`
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ModalHeader = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.sp16}px;
`

export const ModalContent = styled.View`
  width: 100%;
  flex: 1;
  padding: ${({ theme }) => theme.spaces.sp16}px;
  padding-top: ${({ theme }) => theme.spaces.sp48}px;
`

export const ModalFooter = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.sp16}px;
  margin-bottom: ${({ theme }) => theme.spaces.sp24}px;
`

export const ModalFooterDivider = styled.View`
  width: ${({ theme }) => theme.spaces.sp16}px;
`
export const ModalFooterButton = styled.View`
  flex: 1;
`
