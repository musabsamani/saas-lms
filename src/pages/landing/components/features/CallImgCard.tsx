import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  className: string;
  img: string;
  isInstructor: boolean;
  name: string;
}
const CallImgCard: React.FC<Props> = ({ className, img, isInstructor, name }) => {
  return (
    <div className={`relative h-fit ${className}`}>
      <img src={img} alt="/" className="w-full" />
      <div className="flex items-center justify-center absolute left-0 right-0 mx-auto bottom-2 max-w-[90%] ">
        <div className="flex gap-5 items-center justify-center p-2 rounded-xl text-sm font-semibold text-white bg-[#C9D3E7] bg-opacity-40 backdrop-blur-sm">
          <span>
            <FontAwesomeIcon icon={faSignal} />
          </span>
          {isInstructor && <span className="py-1 px-2 rounded-lg bg-[#3793FF]">instructor</span>}
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default CallImgCard;
