// import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { translateText } from "../../../../utils/languages";
import { I18nextProvider, useTranslation } from "react-i18next";

interface Props {
  name: string;
  text: string;
  reviwes: number
  stars: number
}
const TestiCard = ({ text, name, reviwes, stars }: Props) => {
  const { i18n, t } = useTranslation()
  // const [translatedText, setTranslatedText] = useState(text);

  // useEffect(() => {
  //   const translate = async () => {
  //     const translated = await translateText({ sourcetLang: "en", targetLang: i18n.language, text });
  //     setTranslatedText(translated);
  //   };

  //   translate();
  // }, [text, i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-[200px] relative flex flex-col justify-between w-full h-fit xl:p-10 p-5 ps-10 gap-5 rounded-xl bg-white bg-opacity-80 shadow-lg">
        <span className="bg-[#F67766] absolute start-0 top-0 block w-3 h-full rounded-s-3xl"></span>
        <q className="nunito xl:text-xl text-[#5F5F7E] xl:leading-9">{text}</q>
        <div className=" flex flex-col gap-2 sm:flex-row justify-between sm:items-center">
          <p className="xl:text-2xl font-semibold text-[#5F5F7E]"><bdi>{name}</bdi></p>
          <div className="flex flex-col gap-x-5 gap-y-2">
            <span className="flex gap-2 sm:justify-center text-[#f9bb1c]">
              {Array.from({ length: stars }, (_, index) => <FontAwesomeIcon key={index} icon={faStar} />)}
            </span>
            <p className="font-semibold text-lg sm:text-center text-[#80819A]">{reviwes} {t('testimonials.reviews')}</p>
          </div>
        </div>
      </div>
    </I18nextProvider >
  );
};

export default TestiCard;
