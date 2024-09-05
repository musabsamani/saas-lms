import { useTranslation } from "react-i18next";

const FeaturesCard6 = ({ className }: { className: string }) => {
  const { t } = useTranslation()


  return (
    <div className={`mx-auto xl:mx-0 max-w-[600px] ${className}`}>
      <h2 className="max-w-[400px] capitalize text-4xl font-semibold text-[#2F327D]">
        <span className="mb-3 block">{t(`features.cards.6.title1`)}</span>
        <span>{" "}</span>
        <span className="text-[#00CBB8]">{t(`features.cards.6.title2`)}</span>
        <span>{" "}</span>
        <span>{t(`features.cards.6.title3`)}</span>
      </h2>
      <div className="mt-5  relative">
        <p className="text-lg text-[#696984] leading-10">{t('features.cards.6.description')}</p>
      </div>
    </div>
  );
};

export default FeaturesCard6;
