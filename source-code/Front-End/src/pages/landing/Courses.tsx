import { useTranslation } from "react-i18next";
import CourseCard1 from "./components/courses/CourseCard1";
import CourseCard2 from "./components/courses/CourseCard2";
import CourseCard3 from "./components/courses/CourseCard3";

export default function Courses() {
  const { t } = useTranslation()

  return (
    <section className="section courses relative !p-0">
      <div className="bg-[#9DCCFF] absolute w-[75%] xl:w-[85%] h-full -z-[3]"></div>
      <div className="container mx-auto bg relative py-40">
        <div className="header roboto">
          <h1 className="text-4xl font-bold opacity-85">{t("courses.title1")}</h1>
          <h2 className="mt-5 text-xl xl:text-2xl font-medium opacity-55">{t("courses.title2")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col gap-x-10 gap-y-28 mt-28">
          <CourseCard1 cardNumber={1} />
          <CourseCard2 cardNumber={2} />
          <CourseCard3 cardNumber={3} />
          <CourseCard3 cardNumber={3} className="hidden md:flex lg:hidden" />
        </div>
      </div>
    </section>
  );
}
