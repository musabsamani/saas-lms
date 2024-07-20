import CourseCard1 from "./components/courses/CourseCard1";
import CourseCard2 from "./components/courses/CourseCard2";
import CourseCard3 from "./components/courses/CourseCard3";

export default function Courses() {
  return (
    <section className="section courses relative !p-0">
      <div className="bg-[#9DCCFF] absolute w-[85%] h-full -z-10"></div>
      <div className="container mx-auto bg relative py-40">
        <div className="header roboto">
          <h1 className="text-4xl font-bold opacity-85">Explore Course</h1>
          <h2 className="mt-5 text-2xl font-medium opacity-55">Ut sed eros finibus, placerat orci id, dapibus.</h2>
        </div>
        <div className="flex flex-col gap-28 mt-28">
          <CourseCard1 />
          <CourseCard2 />
          <CourseCard3 />
        </div>
      </div>
    </section>
  );
}
