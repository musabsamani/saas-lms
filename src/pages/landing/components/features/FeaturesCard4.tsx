import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./Icon";
import Img from "../../../../assets/img/landing/Hero1.png";

const FeaturesCard4 = () => {
  return (
    <div className="relative mx-auto xl:mx-0 w-[80%] h-[700px] flex justify-end items-start">
      <img src={Img} alt="/" className="min-w-[350px] w-[100%] absolute left-0" />
      <div className="dots relative mx-auto w-[400px] h-[70%] top-[25%]">
        <div className="container -z-10 top-0 right-0 absolute grid grid-cols-10 w-[100%] h-[100%] rotate-[-15deg]">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span className="w-7 h-7 -z-10 absolute bottom-0 left-[-100px] block rounded-full bg-[#FF9A7A]"></span>
          <span className="w-5 h-5 -z-10 absolute top-[-10%] right-0 block rounded-full bg-[#6BF0A8]"></span>
          <span className="w-5 h-5 -z-10 absolute bottom-[0%] right-[20%] block rounded-full bg-[#8C7AFF]"></span>
        </div>
        <Icon OuterClassName="w-[85px] h-[85px] absolute top-0 left-0 lg:left-[-100px] rotate-[-20deg]" InnerClassName="grid grid-cols-4 gap-1 w-full h-full p-3">
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#F48C06] col-span-2 row-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2 row-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2"></span>
        </Icon>
        <Icon OuterClassName="w-[85px] h-[85px] p-5 top-0 right-0 rotate-[25deg]" InnerClassName="flex items-center justify-center w-full h-full p-3 text-[#545AE8]">
          <FontAwesomeIcon icon={faChalkboardUser} />
        </Icon>
      </div>
    </div>
  );
};

export default FeaturesCard4;
