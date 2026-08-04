import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if detected language is not available
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    // Optional: specify supported languages
    supportedLngs: ['en', 'ru'],
  });

export default i18n;