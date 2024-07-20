import React from "react";
interface SuccessStatProps {
  icon: React.ReactNode;
  iconColor: string;
  header: string;
  text: string;
  className?: string | null;
}
const ServicesCard: React.FC<SuccessStatProps> = ({ icon, iconColor, header, text, className }) => {
  return (
    <div className=" flex flex-col max-w-[400px]">
      <div className={`text-center px-5 py-10 pt-0 bg-white bg-opacity-60 rounded-2xl shadow-xl backdrop-blur-xl ${className}`}>
        <span className={`mx-auto relative top-[-50px] rounded-full w-[100px] h-[100px] text-white text-5xl flex items-center justify-center shadow-lg ${iconColor}`}>{icon}</span>
        <h2 className="h-[120px] flex justify-center items-center capitalize font-medium text-3xl text-[#2F327D]">{header}</h2>
        <p className="flex-grow pt-10 text-lg text-[#696984] self-end">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
