import { faSignal, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./Icon";
import Img1 from "../../../../assets/img/landing/Features1.png";
import Img2 from "../../../../assets/img/landing/Features5.png";
import SVG from "../../../../assets/img/landing/svg.svg";
import { useTranslation } from "react-i18next";

const LaptopDiscuss = () => {
  const { t } = useTranslation()

  return (
    <div className="laptop relative flex flex-col w-[80%] xs:w-full">
      <img src={SVG} alt="/" className="parallax w-[120px] h-[120px] p-5 -z-[3]0 block absolute top-[-35px] end-[-30px]" />
      <div className="header relative top-1 w-full h-[30px] rounded-t-3xl bg-[#eaeaea] bg-opacity-60 backdrop-blur-lg">
        <div className="h-full flex items-center gap-5">
          <span className="w-4 h-4"></span>
          <span className="w-4 h-4 rounded-full bg-[#EE6767]"></span>
          <span className="w-4 h-4 rounded-full bg-[#F6C566]"></span>
          <span className="w-4 h-4 rounded-full bg-[#5BEB7B]"></span>
        </div>
      </div>
      <div className="body w-full min-h-[700px] xs:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] rounded-b-3xl bg-[#f4f4f4] bg-opacity-60 backdrop-blur-lg">
        <Icon
          OuterClassName="parallax z-[3] w-[100px] h-[100px] top-[-30px] start-[-50px] rounded-full"
          InnerClassName="w-full h-full flex items-center justify-center text-[#2C93F1] rounded-full rotate-[-8deg]"
        >
          <FontAwesomeIcon icon={faUserGroup} />
        </Icon>
        <div className="p-10 absolute inset-0 w-[100%] h-[100%] flex flex-col gap-5 sm:gap-10 justify-center">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-5 sm:gap-10">
            <img src={Img1} alt="/" className="w-full aspect-square" />
            <div className="relative w-full aspect-square">
              <img src={Img2} alt="/" className="w-full h-full object-cover" />
              <div className="flex justify-center absolute start-0 end-0 mx-auto bottom-2 max-w-[90%] ">
                <div className="flex gap-5 items-center justify-center p-2 rounded-xl text-sm font-semibold text-white bg-[#C9D3E7] bg-opacity-40 backdrop-blur-sm">
                  <span>
                    <FontAwesomeIcon icon={faSignal} />
                  </span>
                  <span>
                    {t('features.cards.9.person1').split(" ").map(
                      (item, index) =>
                        <span key={index} className={` ${index === 0 ? "" : "hidden md:inline-block"}`}>{item}{" "}</span>
                    )
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row justify-between items-center gap-5">
            <div>
              <h2 className="capitalize font-bold text-xl text-[#696984] text-center xs:text-start">{t('features.cards.9.title1')}</h2>
              <p className="font-semibold text-base text-[#62656f] text-center xs:text-start">{t('features.cards.9.title2')}</p>
            </div>
            <button className="rounded-2xl capitalize font-medium text-xl text-white bg-[#EB493A] px-5 py-3">{t('features.cards.9.button')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDiscuss;
