import { useTranslation } from "react-i18next";
import Img from "../../../../assets/img/landing/FeaturesHandStop.svg";

const FeaturesCard3 = ({ className }: { className: string }) => {
  const { t } = useTranslation()

  return (
    <div className={`max-w-[600px] mx-auto xl:mx-0 ${className}`}>
      <h2 className="2xl:max-w-[60%] capitalize text-4xl font-semibold">
        <span className="text-[#00CBB8]">{t(`features.cards.3.title1`)}</span>
        <span>{" "}</span>
        <span className="text-[#2F327D]">{t(`features.cards.3.title2`)}</span>
      </h2>
      <div className="mt-5  relative">
        <p className="text-lg text-[#696984] leading-10">
          {t(`features.cards.3.description`)}
        </p>
        <img src={Img} alt="/" className="absolute bottom-[10%] start-[70%] -z-[3]" />
      </div>
    </div>
  );
};

export default FeaturesCard3;
