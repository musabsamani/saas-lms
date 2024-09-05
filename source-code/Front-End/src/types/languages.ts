export type supportedLanguagesTypes = "ar" | "en" | "fr" | "es";
export type LngsType = {
  [key in supportedLanguagesTypes]?: {
    latinName: string;
    nativeName: string;
  };
};
