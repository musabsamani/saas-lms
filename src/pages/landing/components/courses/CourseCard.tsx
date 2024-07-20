import React from "react";
import Button from "../../../../components/common/buttons/Button";

interface Props {
  img: string;
  title: string;
  description: string;
  icons: React.ReactNode;
}
const CourseCard = ({ img, title, description, icons }: Props) => {
  return (
    <div className="w-[600px] p-10 flex gap-[50px] rounded-3xl bg-white bg-opacity-90 shadow-lg backdrop-blur-lg">
      <div className="h-full w-[200px]">
        <img src={img} alt="/" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="w-[350px] flex flex-col justify-between gap-5">
        <h2 className="text-3xl font-medium  opacity-85">{title}</h2>
        <h3 className="text-2xl opacity-50">{description}</h3>
        <span className="flex gap-1 text-[#F9BB1C]">{icons}</span>
        <Button className=" rounded-2xl uppercase text-[#00BCD4] border-2 border-[#00BCD4]">explore</Button>
      </div>
    </div>
  );
};

export default CourseCard;
