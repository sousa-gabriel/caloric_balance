import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import es from './es.json'
import pt from './pt.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'es',
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
