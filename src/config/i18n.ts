import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { translationEN } from './locales/en/translation'
import { translationES } from './locales/es/translation'

const detectionOptions = {
  order: ['path'],
  lookupFromPathIndex: 0,
}

i18n
  .use(backend) // Avoid glitches on page refresh
  .use(detector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: localStorage.getItem('locale') ?? 'es-ES', // Avoid flicker if language is not default
    // lng: 'es',
    // lng: 'en',
    // have a common namespace used around the full app
    ns: ['translations', 'app'],
    defaultNS: 'translations',
    detection: detectionOptions,

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },

    resources: {
      es: translationES,
      en: translationEN,
    },
  })

export default i18n
