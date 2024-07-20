import React from "react";
interface Props {
  children: React.ReactNode;
}
const LaptopBG2: React.FC<Props> = ({ children }) => {
  return (
    <div className="laptop relative flex flex-col w-[650px]">
      <div className="header relative top-1 w-full h-[34px] rounded-t-3xl bg-[#eaeaea] bg-opacity-60 backdrop-blur-lg">
        <div className="h-full flex items-center gap-5">
          <span className="w-4 h-4"></span>
          <span className="w-4 h-4 rounded-full bg-[#EE6767]"></span>
          <span className="w-4 h-4 rounded-full bg-[#F6C566]"></span>
          <span className="w-4 h-4 rounded-full bg-[#5BEB7B]"></span>
        </div>
      </div>
      <div className="body w-full h-[483px] rounded-b-3xl bg-[#f4f4f4] bg-opacity-60 backdrop-blur-lg">
        <div className="absolute inset-0 w-[120%] h-[100%] flex gap-5 items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default LaptopBG2;
