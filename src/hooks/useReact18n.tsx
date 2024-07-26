import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "../translation/ar.json";
import en from "../translation/en.json";
import { useEffect, useState } from "react";
import { getBrowserOrLocalStorageLang, getHTMLRootLang, isSupportedLanguage } from "../utils/languages";
import { supportedLanguagesTypes } from "../types/languages";
import { localStorageDefaultLang } from "../constants/global";

const langs = { en, ar };

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ...langs,
    },
  });


const useReact18n = () => {
  const [language, setLanguage] = useState<supportedLanguagesTypes>(getBrowserOrLocalStorageLang());

  useEffect(() => {
    // Update i18n language based on the current language
    i18n.changeLanguage(language);
    // Set HTML root language and direction
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  useEffect(() => {
    // Update state if the language attribute changes in the HTML root
    const handleLanguageChange = () => {
      setLanguage(getHTMLRootLang());
    };

    // Set up a MutationObserver to listen for changes to the lang attribute
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    return () => observer.disconnect();
  }, []);


  // Sets the language attribute of the HTML root element to the provided language
  const changeLanguage = (lang: supportedLanguagesTypes) => {
    const newLang = isSupportedLanguage(lang) ? lang : getHTMLRootLang();
    setLanguage(newLang);
    localStorage.setItem(localStorageDefaultLang, newLang);
  };

  return { changeLanguage, i18n }
};

export default useReact18n;

