import React from "react";
import Button from "../../../../components/common/buttons/Button";
import { buttonTypes } from "../../../../types/components";

interface Props {
  img: string;
  header: string;
  button: string;
  buttonType: buttonTypes;
}
const AboutCard: React.FC<Props> = ({ img, header, button, buttonType }) => {
  return (
    <div className="relative flex-1 w-full rounded-3xl shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
      <div className=" bg-[#171B41] rounded-3xl w-full h-full absolute inset-0 opacity-45"></div>
      <img src={img} alt="/" className="rounded-3xl w-full" />
      <div className="w-full h-full absolute inset-0 ">
        <div className="relatve text-white w-full h-full flex flex-col gap-5 md:gap-20 lg:gap-5 items-center justify-center">
          <h2 className="font-semibold text-3xl uppercase">{header}</h2>
          <Button type={buttonType}>{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
