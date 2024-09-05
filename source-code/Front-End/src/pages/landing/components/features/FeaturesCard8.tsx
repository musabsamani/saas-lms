import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img2 from "../../../../assets/img/landing/Features2.png";
import Img3 from "../../../../assets/img/landing/Features3.png";
import Img4 from "../../../../assets/img/landing/Features4.png";
import Img5 from "../../../../assets/img/landing/Features5.png";
import Waves from "../../../../assets/img/landing/FeaturesWaves.svg";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import FeaturesCard8Grade from "./FeaturesCard8Grade";

const FeaturesCard8 = ({ className }: { className: string }) => {
  const { t } = useTranslation()

  return (
    <div className={`relative mx-auto xl:mx-0 w-[90%] h-[600px] flex items-center justify-center ${className}`}>
      <div className="w-[85%] h-fit relative rounded-3xl shadow-[0px_10px_48px_rgba(40,43,111,0.1)]">
        <div className="relative z-[3]">
          <Icon OuterClassName="parallax w-[100px] h-[100px] top-[-30px] start-[-50px] rounded-full" InnerClassName="w-full h-full flex items-center justify-center text-[#F9BB1C] rounded-full rotate-[-25deg]">
            <FontAwesomeIcon icon={faStar} />
          </Icon>
          <Icon OuterClassName="parallax w-[100px] h-[100px] top-[80px] end-[-50px] rounded-full" InnerClassName="w-full h-full flex items-center justify-center text-[#3491E7] rounded-full rotate-[-25deg]">
            <FontAwesomeIcon icon={faBook} />
          </Icon>
        </div>
        <div className="absolute w-full h-full inset-0 -z-[3]">
          <span className="parallax absolute bg-[#9FD7FF] w-[45px] h-[45px] rounded-full top-[-50px] end-[5px]"></span>
          <span className="parallax absolute bg-[#9FD7FF] w-[20px] h-[20px] rounded-full top-[10px] end-[-30px]"></span>
          <span className="parallax absolute bg-[#D3E7FF] w-[300px] h-[200px] rounded-3xl bottom-[-30px] start-[-30px]"></span>
        </div>
        <img src={Waves} alt="/" className="parallax absolute z-[1] w-[100px] bottom-[30px] start-[-30px]" />
        <div className="w-full h-[70px] bg-[#54AFF0] flex items-center justify-center rounded-t-3xl">
          <h2 className="text-2xl font-semibold text-[#F2FDFF]">{t('features.cards.8.title')}</h2>
        </div>
        <div className="w-full h-[400px] relative rounded-b-3xl bg-white">
          <FeaturesCard8Grade
            img={Img3}
            direction="left"
            grade="100"
            parentClassName="w-[50%] top-[35px] bg-[#3AC6F2]"
            spanClassName="bg-[#CDF3FF] text-[#43869B]"
          />
          <FeaturesCard8Grade
            img={Img4}
            direction="right"
            grade="89"
            parentClassName="w-[65%] top-[130px] bg-[#3189EF]"
            spanClassName="bg-[#CDE4FF] text-[#486F9C]"
          />
          <FeaturesCard8Grade
            img={Img5}
            direction="right"
            grade="88"
            parentClassName="w-[30%] top-[200px] bg-[#F13C3C]"
            spanClassName="bg-[#FFCDCD] text-[#9E5555]"
          />
          <FeaturesCard8Grade
            img={Img2}
            direction="left"
            grade="78"
            parentClassName="w-[45%] top-[300px] bg-[#68F146]"
            spanClassName="bg-[#D7FFCD] text-[#4E8C3F]"
          />
        </div>
      </div>
    </div>
  );
};
/* Rectangle 65 */

export default FeaturesCard8;
