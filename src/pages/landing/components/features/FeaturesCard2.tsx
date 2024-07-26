import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const FeaturesCard2 = ({ className }: { className: string }) => {
  const { t } = useTranslation()

  return (
    <div className={`max-w-[600px] mx-auto xl:mx-0 ${className}`}>
      <h2 className="first-capitalize mb-10 text-4xl font-semibold text-[#2F327D]">
        <span>{t(`features.cards.2.title1`)}</span>
        <span>{" "}</span>
        <span className="text-[#00CBB8]">{t(`features.cards.2.title2`)}</span>
        <span>{" "}</span>
        <span>{t(`features.cards.2.title3`)}</span>
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <div className="flex justify-center items-center  w-[60px] min-w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <div className="grid grid-cols-2 w-7 h-7 gap-1">
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#F48C06] rounded-sm w-3 h-3 "></span>
            </div>
          </div>
          <p>{t(`features.cards.2.p1`)}</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <span className="bg-[#F48C06] w-5 h-5 relative top-[-4px] start-[6px]"></span>
            <span className="bg-[#2F327D] w-5 h-5 relative top-[4px] start-[-6px]"></span>
          </div>
          <p>{t(`features.cards.2.p2`)}</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <FontAwesomeIcon icon={faUsers} className="text-2xl text-[#2F327D]" />
          </div>
          <p>{t(`features.cards.2.p3`)}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard2;
