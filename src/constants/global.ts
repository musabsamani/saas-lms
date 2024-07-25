import { LngsType, supportedLanguagesTypes } from "../types/languages";

// Define localStorageDefaultLang variavel name
export const localStorageDefaultLang = "defaultLang";

// Define supported languages and type
export const supportedLanguages: supportedLanguagesTypes[] = ["ar", "en", "fr", "es"];

// Define supported languages and type
export const lngs: LngsType = {
  en: { latinName: "English", nativeName: "English" },
  ar: { latinName: "Arabic", nativeName: "عربي" },
};
