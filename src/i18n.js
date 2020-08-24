import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./messages/messages.en.json";
import he from "./messages/messages.he.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: en
    },
    he: {
      global: he
    }
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
