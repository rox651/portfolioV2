import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      Spanish: "Español",
      English: "Ingles",
      Portfolio: "Portafolio",
      "About me": "Sobre mi",
      Categories: "Categorias",
      "Contact me": "Contactame",
    },
  },
  en: {
    Spanish: "Spanish",
    English: "English",
    Portfolio: "Portfolio",
    "About me": "Sobre mi",
    Categories: "Categories",
    "Contact me": "Contact me",
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
