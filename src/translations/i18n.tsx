import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import es from './es.json'
import pt from './pt.json'
import { NativeModules, Platform } from 'react-native'

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage.split('_')[0],
  resources: {
    en: en,
    es: es,
    pt: pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
