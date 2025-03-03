// Import i18next for internationalization
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import translationEN from './locales/en.json'
import translationFR from './locales/fr.json'
import translationAR from './locales/ar.json'
import translationDE from './locales/de.json'
import translationIT from './locales/it.json'
import translationES from './locales/es.json'

// Resources object containing all translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  ar: {
    translation: translationAR
  },
  de: {
    translation: translationDE
  },
  it: {
    translation: translationIT
  },
  es: {
    translation: translationES
  }
}

// Initialize i18next with configurations
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: false, // Set to true for development
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n