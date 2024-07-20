import AboutCard from "./components/about/AboutCard";
import IMG1 from "../../assets/img/landing/About1.png";
import IMG2 from "../../assets/img/landing/About2.png";
import IMG3 from "../../assets/img/landing/About3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <section className="section">
      <div className="container mx-auto flex flex-col gap-40">
        <div className="intro max-w-[1050px] mx-auto xl:text-center flex flex-col gap-20">
          <h1 className="font-semibold text-[44px]">
            <span className="text-[#2F327D]">What is </span>
            <span className="text-[#00CBB8]">TOTC?</span>
          </h1>
          <p className="text-2xl leading-10 text-[#696984]">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade
            results and provide students with feedback all in one place.
          </p>
          <div className="flex justify-between lg:flex-row flex-col gap-x-20 gap-y-40">
            <AboutCard img={IMG1} header="for instructors" button="start a class today" buttonType="bd1" />
            <AboutCard img={IMG2} header="for students" button="enter access code" buttonType="bd2" />
          </div>
        </div>
        <div className="flex items-center justify-between flex-col xl:flex-row gap-x-20 gap-y-40">
          <div className="w-full flex flex-1 flex-col gap-10 ">
            <h2 className="relative text-3xl font-medium first-capitalize">
              <span className="text-[#2F327D]">everything you can do in a physical classroom, </span>
              <span className="text-[#00CBB8]">you can do with TOTC</span>
              <span className="absolute -z-10 -top-6 -left-5 rounded-full w-20 h-20 bg-[#33EFA0]"></span>
            </h2>
            <p className="relative text-[#696984] text-xl text-justify">
              <span>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</span>
              <span className="absolute -z-10 top-14 -right-2 rounded-full w-10 h-10 bg-[#33EFA0]"></span>
            </p>
            <Link to="/" className="text-xl underline text-[#696984]">
              Learn more
            </Link>
          </div>
          <div className="relative w-full flex-1  max-w-[600px] xl:max-w-none h-fit">
            <span className="absolute -left-5 -top-5 -z-10 w-32 h-32 bg-[#23BDEE] rounded-3xl"></span>
            <span className="absolute -right-5 -bottom-5 -z-10 w-60 h-60 bg-[#33EFA0] rounded-3xl"></span>
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  h-20 w-20 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} className="text-[#00CBB8] text-3xl" />
            </span>
            <img src={IMG3} alt="/" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
