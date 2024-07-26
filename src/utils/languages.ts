import axios from "axios";

import { localStorageDefaultLang, supportedLanguages } from "../constants/global";
import { supportedLanguagesTypes } from "../types/languages";

// Function to validate if a language is supported
export function isSupportedLanguage(lang: string | null): lang is supportedLanguagesTypes {
  return lang !== null && supportedLanguages.includes(lang as supportedLanguagesTypes);
}

// Function to get language from localStorage or browser
export function getBrowserOrLocalStorageLang(): supportedLanguagesTypes {
  let defaultLang = localStorage.getItem(localStorageDefaultLang);
  if (!isSupportedLanguage(defaultLang)) {
    defaultLang = navigator.language.split("-")[0];

    if (!isSupportedLanguage(defaultLang)) {
      defaultLang = "en";
    }
  }

  return defaultLang as supportedLanguagesTypes;
}

// Function to get the current language attribute from the HTML root
export function getHTMLRootLang(): supportedLanguagesTypes {
  const lang = document.documentElement.getAttribute("lang");
  return isSupportedLanguage(lang) ? lang : "en";
}

// translate.js

export const translateText = async ({ text, sourcetLang, targetLang }: { text: string; sourcetLang: string; targetLang: string }) => {
  const url = "https://libretranslate.com/translate";

  try {
    const response = await axios.post(url, {
      q: text,
      source: sourcetLang,
      target: targetLang,
      format: "text",
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    return text; // Return original text in case of error
  }
};
