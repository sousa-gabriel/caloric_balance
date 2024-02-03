import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from '../theme/theme'

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets()

  return {
    top: Math.max(top, theme.spaces.sp20),
    bottom: Math.max(bottom, theme.spaces.sp20),
  }
}
