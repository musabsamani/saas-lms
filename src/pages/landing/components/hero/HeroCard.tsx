import React from "react";
import Button from "../../../../components/common/buttons/Button";

interface CardProps {
  icon?: React.ReactNode | null;
  img?: string | null;
  header: string;
  text: string;
  button?: string | null;
  className: string;
}

const Card: React.FC<CardProps> = ({ icon, img, header, text, button, className }) => {
  return (
    <div className={`nunito relative ${className}`}>
      <div className="p-7 bg-white bg-opacity-60 rounded-3xl shadow-lg backdrop-filter backdrop-blur-lg overflow-hidden flex gap-5">
        {icon && <div className="bg-[#F48C06] text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center">{icon}</div>}
        {img && (
          <div className="w-14 h-14 relative">
            <span className="w-5 h-5 rounded-full border-white border-2 bg-[#2EBB5E] absolute bottom-0 right-0"></span>
            <img src={img} alt="/" className="w-full h-full" />
          </div>
        )}
        <div>
          <h2 className="text-2xl capitalize font-bold text-[#595959]">{header}</h2>
          <p className="text-xl font-semibold text-[#545567] first-capitalize">{text}</p>
          {button && <Button className="bg-[#D8587E] text-white mt-5">{button}</Button>}
        </div>
      </div>
    </div>
  );
};

export default Card;
