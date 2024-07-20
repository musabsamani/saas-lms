import React from "react";
interface SuccessStatProps {
  number: string;
  text: string;
}
const SuccessStat: React.FC<SuccessStatProps> = ({ number, text }) => {
  return (
    <div className="text-center capitalize w-[250px]">
      <h2 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">{number}</h2>
      <p className="pt-5 text-2xl text-[#010514] text-opacity-80">{text}</p>
    </div>
  );
};

export default SuccessStat;
