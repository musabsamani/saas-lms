import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Img from "../../../../assets/img/landing/FeatureQuestion.png";
import PaperPlane from "./PaperPlane";
const FeaturesCard5 = () => {
  return (
    <div className="relative mx-auto xl:mx-0 max-w-[700px] w-[70%] xs:w-[50%] flex items-center justify-center bg-opacity-30 ">
      <div className="relative w-[100%] max-w-[400px] py-10 rounded-3xl bg-[#FFF] shadow-[_0px_10px_44px_rgba(40,43,111,0.1)]">
        <div className="px-8 relative z-10 ">
          <h2 className="w-fit bg-[#CDD8FF] text-xl text-[#717FB0] font-medium rounded-full py-3 px-8">Question 1</h2>
          <p className="my-10 text-3xl text-[#55578D] font-semibold leading-[50px]">true or false? this play takes place in Italy</p>
        </div>
        <img src={Img} alt="/" className="relative w-[110%] left-5" />
        <div>
          <span className="w-[70px] h-[70px] absolute right-[20px] top-[-30px] flex justify-center items-center rounded-full bg-[#FFF] rotate-[15deg] shadow-[0px_5px_40px_rgba(47,50,125,0.1)]">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-full text-xl text-[#EE3175] border-2 border-[#EE3175]">
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </span>
          <span className="w-[70px] h-[70px] absolute right-[-20px] top-[30px] flex justify-center items-center rounded-full bg-[#FFF] rotate-[-15deg] shadow-[0px_5px_40px_rgba(47,50,125,0.1)]">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-full text-xl text-[#2DD38E] border-2 border-[#2DD38E]">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </span>
        </div>
        <div className="absolute inset-0 w-full h-full -z-10">
          <span className="absolute top-[-30px] left-[-60px] w-[100px] h-[100px] rounded-full bg-[#687EF3]"></span>
          <span className="absolute bottom-[-50px] left-[-30px] w-[20px] h-[20px] rounded-full bg-[#34E7A5]"></span>
          <span className="absolute top-[-40px] left-[100px] w-[23px] h-[23px] rounded-full bg-[#F3A268]"></span>
        </div>
        <div className="w-[360px] absolute right-[-100px] bottom-[-30px]">
          <div className="flex items-center gap-10 py-3 px-5 rounded-3xl bg-[#FFF] bg-opacity-70 backdrop-blur-lg shadow-[0px_20px_50px_rgba(40,43,111,0.08)]">
            <PaperPlane />
            <span className="absolute -z-10 bottom-[10px] right-[20px] w-[40px] h-[40px] rounded-full bg-[#D8F9ED]"></span>
            <p className="text-2xl font-semibold text-[#41BE90] leading-8">Your answer was sent successfully</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard5;
