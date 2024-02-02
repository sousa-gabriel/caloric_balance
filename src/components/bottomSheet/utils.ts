import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { BackHandler, NativeEventSubscription } from 'react-native'
import { RefObject, useCallback, useRef } from 'react'

/**
 * hook that dismisses the bottom sheet on the hardware back button press if it is visible
 * @param dismissOnBackHandler parameter to check if the bottom sheet should be closed/dismissed on the back press
 * @param bottomSheetRef ref to the bottom sheet which is going to be closed/dismissed on the back press
 */
export const useBottomSheetBackHandler = (
  bottomSheetRef: RefObject<BottomSheetModal | null>,
  dismissOnBackHandler: boolean = true,
) => {
  const backHandlerSubscriptionRef = useRef<NativeEventSubscription | null>(
    null,
  )
  const handleSheetPositionChange = useCallback<
    NonNullable<BottomSheetModalProps['onChange']>
  >(
    index => {
      const isBottomSheetVisible = index >= 0
      if (isBottomSheetVisible && !backHandlerSubscriptionRef.current) {
        backHandlerSubscriptionRef.current = BackHandler.addEventListener(
          'hardwareBackPress',
          () => {
            if (dismissOnBackHandler) {
              bottomSheetRef.current?.dismiss()
            }
            return true
          },
        )
      } else if (!isBottomSheetVisible) {
        backHandlerSubscriptionRef.current?.remove()
        backHandlerSubscriptionRef.current = null
      }
    },
    [dismissOnBackHandler, bottomSheetRef, backHandlerSubscriptionRef],
  )
  return { handleSheetPositionChange }
}
