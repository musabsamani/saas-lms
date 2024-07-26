import React from "react";
interface Props {
  children: React.ReactNode;
}
const LaptopBG: React.FC<Props> = ({ children }) => {
  return (
    <div className="laptop relative flex flex-col w-[90%] h-[800px] sm:h-[1200px] lg:h-[1400px] xl:h-[500px]">
      <span className="parallax -z-[3] block absolute top-[-75px] start-0 w-[150px] h-[150px] rounded-full bg-[#33EFA0]"></span>
      <span className="parallax -z-[3] block absolute top-[-50px] start-[200px] w-[30px] h-[30px] rounded-full bg-[#33D9EF]"></span>
      <span className="parallax -z-[3] block absolute bottom-[-40px] end-[400px] w-[30px] h-[30px] rounded-full bg-[#F56666]"></span>
      <span className="parallax -z-[3] block absolute bottom-[-50px] end-[-50px] w-[250px] h-[250px] rounded-full bg-[#5B61EB]"></span>
      <div className="header relative top-1 w-full h-[35px] rounded-t-3xl bg-[#eaeaea] bg-opacity-60 backdrop-blur-lg">
        <div className="h-full flex items-center gap-5">
          <span className="w-4 h-4"></span>
          <span className="w-4 h-4 rounded-full bg-[#EE6767]"></span>
          <span className="w-4 h-4 rounded-full bg-[#F6C566]"></span>
          <span className="w-4 h-4 rounded-full bg-[#5BEB7B]"></span>
        </div>
      </div>
      <div className="body relative w-full h-[calc(100%-35px)] rounded-b-3xl bg-[#f4f4f4] bg-opacity-60 backdrop-blur-lg">
        <div className="absolute inset-0 w-[100%] mx-auto 2xl:w-[100%] h-[100%] flex flex-col xl:flex-row gap-x-5 gap-y-10 items-center justify-center p-10 px-5 md:px-10">{children}</div>
      </div>
    </div>
  );
};

export default LaptopBG;
