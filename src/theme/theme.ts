import { normalize } from '../utils/normalize'
import { Appearance } from 'react-native'

const isDarkMode = Appearance.getColorScheme() === 'dark'

export const theme = {
  fonts: {
    LargeBold: {
      fontSize: normalize(32),
      fontFamily: 'Roboto-Bold',
    },
    MediumBold: {
      fontSize: normalize(24),
      fontFamily: 'Roboto-Bold',
    },
    SmallBold: {
      fontSize: normalize(16),
      fontFamily: 'Roboto-Bold',
    },
    LargeSemiBold: {
      fontSize: normalize(16),
      fontFamily: 'Roboto-Medium',
    },
    MediumSemiBold: {
      fontSize: normalize(14),
      fontFamily: 'Roboto-Medium',
    },
    SmallSemibold: {
      fontSize: normalize(12),
      fontFamily: 'Roboto-Medium',
    },
    LargeRegular: {
      fontSize: normalize(16),
      fontFamily: 'Roboto-Regular',
    },
    MediumRegular: {
      fontSize: normalize(14),
      fontFamily: 'Roboto-Regular',
    },
    SmallRegular: {
      fontSize: normalize(12),
      fontFamily: 'Roboto-Regular',
    },
  },
  spaces: {
    sp0: normalize(0),
    sp4: normalize(4),
    sp8: normalize(8),
    sp12: normalize(12),
    sp16: normalize(16),
    sp20: normalize(20),
    sp24: normalize(24),
    sp32: normalize(32),
    sp40: normalize(40),
    sp48: normalize(48),
    sp56: normalize(56),
  },
  colors: {
    // comum
    gray700: '#232129',
    gray600: '#3E3B47',
    gray500: '#666360',
    gray400: '#B3B3B3',
    gray300: '#E1E1E1',
    gray200: '#FEFEFE',
    gray100: '#FFFFFF',
    success: '#03B252',
    error: '#DC1637',
    successContainer: '#C4F3DD',
    errorContainer: '#FFDFDF',

    // Dark or Light
    background: isDarkMode ? '#312E38' : '#FFFFFF',
    primary: isDarkMode ? '#FF9000' : '#645C96',
    onPrimary: isDarkMode ? '#312E38' : '#FFFFFF',
    secondary: isDarkMode ? '#FFFFFF' : '#232129',
    onSecondary: isDarkMode ? '#312E38' : '#FFFFFF',
    disabled: isDarkMode ? '#FFFFFF55' : '#23212955',
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    shadowColor: '#00000066',
  },
}

export type Theme = typeof theme
export type ThemeColors = keyof Theme['colors']
export type ThemeFonts = keyof Theme['fonts']
export type ThemeSpaces = keyof Theme['spaces']
