import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Img from "../../../../assets/img/landing/FeatureQuestion.png";
import PaperPlane from "./PaperPlane";
import { useTranslation } from "react-i18next";
const FeaturesCard5 = ({ className }: { className: string }) => {
  const { t } = useTranslation()


  return (
    <div className={`relative mx-auto xl:mx-0 max-w-[700px] md:w-[70%] w-full px-5 md:px-0 flex items-center justify-center bg-opacity-30 ${className}`}>
      <div className="relative w-[100%] max-w-[400px] pt-10 md:py-10 rounded-3xl bg-[#FFF] shadow-[_0px_10px_44px_rgba(40,43,111,0.1)]">
        <div className="px-8 relative z-[3] ">
          <h2 className="w-fit bg-[#CDD8FF] text-xl text-[#717FB0] font-medium rounded-full py-3 px-8">{t(`features.cards.5.title`)}</h2>
          <p className="my-10 text-3xl text-[#55578D] font-semibold leading-[50px]">{t(`features.cards.5.questionText`)}</p>
        </div>
        <img src={Img} alt="/" className="relative md:w-[110%] w-full md:start-5" />
        <div>
          <span className="w-[70px] h-[70px] absolute end-[25px] top-[-35px] flex justify-center items-center rounded-full bg-[#FFF] rotate-[15deg] shadow-[0px_5px_40px_rgba(47,50,125,0.1)]">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-full text-xl text-[#EE3175] border-2 border-[#EE3175]">
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </span>
          <span className="w-[70px] h-[70px] absolute end-[-25px] top-[35px] flex justify-center items-center rounded-full bg-[#FFF] rotate-[-15deg] shadow-[0px_5px_40px_rgba(47,50,125,0.1)]">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-full text-xl text-[#2DD38E] border-2 border-[#2DD38E]">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </span>
        </div>
        <div className="parallax absolute inset-0 w-full h-full -z-[3]">
          <span className="absolute top-[-30px] start-[-60px] w-[100px] h-[100px] rounded-full bg-[#687EF3]"></span>
          <span className="absolute bottom-[-50px] start-[-30px] w-[20px] h-[20px] rounded-full bg-[#34E7A5]"></span>
          <span className="absolute top-[-40px] start-[100px] w-[23px] h-[23px] rounded-full bg-[#F3A268]"></span>
        </div>
        <div className="md:w-[360px] w-[105%] absolute bottom-[-100px] md:end-[-100px] md:bottom-[-30px]">
          <div className="flex items-center gap-10 py-3 px-5 rounded-3xl bg-[#FFF] bg-opacity-70 backdrop-blur-lg shadow-[0px_20px_50px_rgba(40,43,111,0.08)]">
            <PaperPlane />
            <span className="parallax absolute -z-[3] bottom-[10px] end-[20px] w-[40px] h-[40px] rounded-full bg-[#D8F9ED]"></span>
            <p className="text-2xl font-semibold text-[#41BE90] leading-8">{t(`features.cards.5.questionFeedback`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard5;
