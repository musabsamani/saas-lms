import { useTranslation } from "react-i18next";

const FeaturesCard10 = ({ className }: { className: string }) => {
  const { t } = useTranslation()


  return (
    <div className={`mx-auto xl:mx-0 max-w-[600px] ${className}`}>
      <h2 className="flex flex-col gap-3 max-w-[400px] capitalize text-4xl font-semibold text-[#2F327D]">
        <span className="text-[#00CBB8]"></span>
        <span>{t(`features.cards.10.title1`)}</span>
        <span>{" "}</span>
        <span>{t(`features.cards.10.title2`)}</span>
      </h2>
      <div className="mt-5  relative">
        <p className="text-lg text-[#696984] leading-10">{t(`features.cards.10.description`)}</p>
      </div>
    </div>
  );
};

export default FeaturesCard10;
