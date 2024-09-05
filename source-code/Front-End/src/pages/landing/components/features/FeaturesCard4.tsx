import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./Icon";
import Img from "../../../../assets/img/landing/Hero1.png";

const FeaturesCard4 = ({ className }: { className: string }) => {
  return (
    <div className={`relative mx-auto max-w-[400px] w-[100%] h-[700px] flex justify-end items-start ${className}`}>
      <img src={Img} alt="/" className="z-[2] w-[80%] mx-auto absolute start-0 end-0 h-full object-contain" />
      <div className="dots relative mx-auto w-full h-[70%] top-[25%]">
        <div className="container !-z-[3] top-0 end-0 absolute grid grid-cols-10 w-[100%] h-[100%] rotate-[-15deg]">
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
          <span className="parallax w-7 h-7 -z-[3] absolute bottom-0 start-[-100px] block rounded-full bg-[#FF9A7A]"></span>
          <span className="parallax w-5 h-5 -z-[3] absolute top-[-10%] end-0 block rounded-full bg-[#6BF0A8]"></span>
          <span className="parallax w-5 h-5 -z-[3] absolute bottom-[0%] end-[20%] block rounded-full bg-[#8C7AFF]"></span>
        </div>
        <Icon OuterClassName="parallax w-[85px] h-[85px] absolute top-0 start-0 lg:start-[-100px] rotate-[-20deg]" InnerClassName="grid grid-cols-4 gap-1 w-full h-full p-3">
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#F48C06] col-span-2 row-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2 row-span-2"></span>
          <span className="w-full h-full block rounded-xl bg-[#8C7AFF] col-span-2"></span>
        </Icon>
        <Icon OuterClassName="parallax w-[85px] h-[85px] p-5 top-0 end-0 rotate-[25deg]" InnerClassName="flex items-center justify-center w-full h-full p-3 text-[#545AE8]">
          <FontAwesomeIcon icon={faChalkboardUser} />
        </Icon>
      </div>
    </div>
  );
};

export default FeaturesCard4;
