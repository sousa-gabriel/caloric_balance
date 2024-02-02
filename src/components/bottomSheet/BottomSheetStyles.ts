import { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import styled from 'styled-components/native'

export const ContainerBackdrop = styled(BottomSheetBackdrop)`
  position: absolute;
  width: 120%;
  height: 100%;
  left: 0;
  top: 0;
`

export const BottomSheetContent = styled(BottomSheetView)`
  padding-bottom: ${({ theme }) => theme.spaces.sp32}px;
`
