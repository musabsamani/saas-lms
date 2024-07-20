import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img2 from "../../../../assets/img/landing/Features2.png";
import Img3 from "../../../../assets/img/landing/Features3.png";
import Img4 from "../../../../assets/img/landing/Features4.png";
import Img5 from "../../../../assets/img/landing/Features5.png";
import Waves from "../../../../assets/img/landing/FeaturesWaves.svg";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
const FeaturesCard8 = () => {
  return (
    <div className="relative mx-auto xl:mx-0 w-[90%] h-[600px] flex items-center justify-center">
      <div className="w-[85%] h-fit relative rounded-3xl shadow-[0px_10px_48px_rgba(40,43,111,0.1)]">
        <div className="relative z-10">
          <Icon OuterClassName="w-[100px] h-[100px] top-[-30px] left-[-50px] rounded-full" InnerClassName="w-full h-full flex items-center justify-center text-[#F9BB1C] rounded-full rotate-[-25deg]">
            <FontAwesomeIcon icon={faStar} />
          </Icon>
          <Icon OuterClassName="w-[100px] h-[100px] top-[80px] right-[-50px] rounded-full" InnerClassName="w-full h-full flex items-center justify-center text-[#3491E7] rounded-full rotate-[-25deg]">
            <FontAwesomeIcon icon={faBook} />
          </Icon>
        </div>
        <div className="absolute w-full h-full inset-0 -z-10">
          <span className="absolute bg-[#9FD7FF] w-[45px] h-[45px] rounded-full top-[-50px] right-[5px]"></span>
          <span className="absolute bg-[#9FD7FF] w-[20px] h-[20px] rounded-full top-[10px] right-[-30px]"></span>
          <span className="absolute bg-[#D3E7FF] w-[300px] h-[200px] rounded-3xl bottom-[-30px] left-[-30px]"></span>
        </div>
        <img src={Waves} alt="/" className="absolute z-10 w-[100px] bottom-[30px] left-[-30px]" />
        <div className="w-full h-[70px] bg-[#54AFF0] flex items-center justify-center rounded-t-3xl">
          <h2 className="text-2xl font-semibold text-[#F2FDFF]">GradeBook</h2>
        </div>
        <div className="w-full h-[400px] relative rounded-b-3xl bg-white">
          <div className="w-[130px] h-[30px] absolute bg-[#3AC6F2] top-[40px] left-0">
            <div className="relative h-full">
              <img src={Img3} alt="/" className="w-[80px] absolute top-[-25px] right-[-20px] rounded-full" />
              <FontAwesomeIcon icon={faStar} className="text-[#F9BB1C] text-2xl absolute right-[5px] bottom-[-35px]" />
            </div>
            <span className="absolute right-[-65px] top-[15px] py-2 px-5 rounded-2xl font-medium text-xl bg-[#CDF3FF] text-[#43869B]">100</span>
          </div>
          <div className="w-[300px] h-[30px] absolute bg-[#3189EF] top-[130px] right-0">
            <div className="relative h-full">
              <img src={Img4} alt="/" className="w-[80px] absolute top-[-25px] left-[-20px] rounded-full" />
            </div>
            <span className="absolute left-[-65px] top-[15px] py-2 px-5 rounded-2xl font-medium text-xl bg-[#CDE4FF] text-[#486F9C]">89</span>
          </div>
          <div className="w-[145px] h-[30px] absolute bg-[#F13C3C] top-[200px] right-0">
            <div className="relative h-full">
              <img src={Img5} alt="/" className="w-[80px] absolute top-[-25px] left-[-20px] rounded-full" />
            </div>
            <span className="absolute left-[-65px] top-[15px] py-2 px-5 rounded-2xl font-medium text-xl bg-[#FFCDCD] text-[#9E5555]">88</span>
          </div>
          <div className="w-[260px] h-[30px] absolute bg-[#68F146] top-[300px] left-0">
            <div className="relative h-full">
              <img src={Img2} alt="/" className="w-[80px] absolute top-[-25px] right-[-20px] rounded-full" />
            </div>
            <span className="absolute right-[-65px] top-[15px] py-2 px-5 rounded-2xl font-medium text-xl bg-[#D7FFCD] text-[#4E8C3F]">78</span>
          </div>
        </div>
      </div>
    </div>
  );
};
/* Rectangle 65 */

export default FeaturesCard8;
