import Button from "../../../../components/common/buttons/Button";
import { useTranslation } from "react-i18next";
import VidoeIcon from "../common/VidoeIcon";

interface IntroTextProps {
  className?: string;
}
const IntroText = ({ className }: IntroTextProps) => {
  const { t } = useTranslation();

  return (
    <div className={`text-white text-2xl mt-20 xl:mt-0 xl:text-start text-center ${className}`}>
      <h1 className="font-bold text-[54px]">
        <span className="text-[#F48C06]">
          {t("hero.introText.1")}
        </span>{" "}
        <span className="first-capitalize">
          {t("hero.introText.2")}
        </span>
      </h1>
      <p className="pt-5 max-w-[523px] mx-auto xl:mx-0  nunito">
        {t("hero.introText.p1")}
      </p>
      <div className="pt-10 flex flex-col 2xl:flex-row 2xl:items-center justify-center xl:justify-start xl:items-start items-center gap-10">
        <Button type="primary2">
          {t("hero.introText.button")}
        </Button>
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <VidoeIcon iconClassName="text-[#23BDEE] !animate-none" animateClassName="animate-none" />

          <p className="text-[#252641] first-capitalize">
            {t("hero.introText.p2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
