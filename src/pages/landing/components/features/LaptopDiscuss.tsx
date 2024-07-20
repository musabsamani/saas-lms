import { faSignal, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./Icon";
import Img1 from "../../../../assets/img/landing/Features1.png";
import Img2 from "../../../../assets/img/landing/Features5.png";
import SVG from "../../../../assets/img/landing/svg.svg";

const LaptopDiscuss = () => {
  return (
    <div className="laptop relative flex flex-col w-[90%]">
      {/* <span className="w-[120px] h-[120px] p-5 -z-100 block absolute top-[-35px] right-[-30px] rounded-full bg-[#23BDEE]">
        <span className="block rounded-full bg-white w-full h-full"></span>
      </span> */}
      <img src={SVG} alt="/" className="w-[120px] h-[120px] p-5 -z-100 block absolute top-[-35px] right-[-30px]" />
      <div className="header relative top-1 w-full h-[30px] rounded-t-3xl bg-[#eaeaea] bg-opacity-60 backdrop-blur-lg">
        <div className="h-full flex items-center gap-5">
          <span className="w-4 h-4"></span>
          <span className="w-4 h-4 rounded-full bg-[#EE6767]"></span>
          <span className="w-4 h-4 rounded-full bg-[#F6C566]"></span>
          <span className="w-4 h-4 rounded-full bg-[#5BEB7B]"></span>
        </div>
      </div>
      <div className="body w-full h-[370px] rounded-b-3xl bg-[#f4f4f4] bg-opacity-60 backdrop-blur-lg">
        <Icon
          OuterClassName="z-10 w-[100px] h-[100px] top-[-30px] left-[-50px] rounded-full"
          InnerClassName="w-full h-full flex items-center justify-center text-[#2C93F1] rounded-full rotate-[-8deg]"
        >
          <FontAwesomeIcon icon={faUserGroup} />
        </Icon>
        <div className="p-10 absolute inset-0 w-[100%] h-[100%] flex gap-10 justify-center">
          <div className="flex flex-col gap-10 flex-1 w-1/2">
            <img src={Img1} alt="/" className="w-full" />
            <div>
              <h2 className="capitalize font-bold text-xl text-[#696984]">private discussion</h2>
              <p className="font-semibold text-base text-[#A8A8B6]">your video can’t be seen by others</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 flex-1 w-1/2">
            <div className="relative">
              <img src={Img2} alt="/" className="w-full" />
              <div className="flex justify-center absolute left-0 right-0 mx-auto bottom-2 max-w-[90%] ">
                <div className="flex gap-5 items-center justify-center p-2 rounded-xl text-sm font-semibold text-white bg-[#C9D3E7] bg-opacity-40 backdrop-blur-sm">
                  <span>
                    <FontAwesomeIcon icon={faSignal} />
                  </span>
                  <span>Patricia Mendoza</span>
                </div>
              </div>
            </div>
            <button className="rounded-2xl capitalize font-medium text-xl text-white bg-[#EB493A] px-5 py-3">end discussion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDiscuss;
