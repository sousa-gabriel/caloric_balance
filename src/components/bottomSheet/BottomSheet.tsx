import {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import React, { ReactNode, RefObject, useCallback } from 'react'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useBottomSheetBackHandler } from './utils'
import * as S from './BottomSheetStyles'
import { theme } from '../../theme/theme'

export interface IBottomSheet {
  bottomSheetRef: RefObject<BottomSheetModalMethods>
  children: ReactNode
}

export function BottomSheet({ bottomSheetRef, children }: IBottomSheet) {
  const { handleSheetPositionChange } =
    useBottomSheetBackHandler(bottomSheetRef)

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <S.ContainerBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={'close'}
      />
    ),
    [],
  )

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        onChange={handleSheetPositionChange}
        keyboardBlurBehavior={'restore'}
        enableDynamicSizing
        animateOnMount
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.primary }}
      >
        <S.BottomSheetContent>{children}</S.BottomSheetContent>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}
