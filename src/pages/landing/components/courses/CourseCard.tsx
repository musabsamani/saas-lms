import React from "react";
import Button from "../../../../components/common/buttons/Button";
import { useTranslation } from "react-i18next";

interface Props {
  img: string;
  title: string;
  description: string;
  icons: React.ReactNode;
}
const CourseCard = ({ img, icons }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="w-full p-5 xl:p-10 flex flex-col xl:flex-row gap-y-5 gap-x-[50px] rounded-3xl bg-white bg-opacity-90 shadow-lg backdrop-blur-lg">
      <div className="h-full w-full xl:w-[200px]">
        <img src={img} alt="/" className="w-full h-full aspect-[3/2] object-cover rounded-3xl" />
      </div>
      <div className="max-w-[350px] flex flex-col justify-between gap-2 xl:gap-5">
        <h2 className="xl:text-3xl font-medium  opacity-85">{t("courses.title")}</h2>
        <h3 className="xl:text-2xl opacity-50">{t("courses.description")}</h3>
        <span className="flex gap-1 text-[#F9BB1C]">{icons}</span>
        <Button type="section2">explore</Button>
      </div>
    </div>
  );
};

export default CourseCard;
