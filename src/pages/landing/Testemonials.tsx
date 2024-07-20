import { faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestiCard from "./components/testimonials/TestiCard";
import Img from "../../assets/img/landing/Testimonial1.png";

export default function Testemonials() {
  return (
    <section className="section testimonials">
      <div className="container mx-auto">
        <div className="flex flex-col gap-40 2xl:flex-row 2xl:items-center 2xl:gap-20">
          <div className="intro 2xl:w-1/2 flex flex-col justify-center items-center gap-5 xl:text-center 2xl:text-left 2xl:items-start 2xl:justify-start">
            <div className="flex items-center gap-5 self-start">
              <span className="h-[1px] w-20 block bg-[#525596]"></span>
              <h1 className="uppercase nunito text-2xl text-[#525596]">testimonial</h1>
            </div>
            <div className="text max-w-[full] 2xl:max-w-[600px] mt-20">
              <h2 className="nunito text-6xl font-bold text-[#2F327D]">What They Say?</h2>
              <div className="mt-10 flex flex-col gap-5 text-2xl poppins text-[#696984]">
                <p>TOTC has got more than 100k positive ratings from our users around the world. </p>
                <p>aome of the students and teachers were greatly helped by the Skilline.</p>
                <p>are you too? Please give your assessment</p>
                <button className="xl:mx-auto 2xl:mx-0 relative mt-10 flex items-center justify-between md:w-[450px] h-20 rounded-full border-2 border-[#49BBBD] text-[#49BBBD] capitalize">
                  <span className="pl-10">write your assessment</span>
                  <span className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#49BBBD]">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="testi mx-auto max-w-[700px] w-full h-[750px]">
            <div className="relative max-w-[75%] h-fit">
              <img src={Img} alt="/" className="block w-full" />
              <div className="absolute xl:w-[650px] w-full right-[-100px] bottom-[-100px] xl:bottom-[-150px] xl:right-[-250px]">
                <TestiCard />
              </div>
              <div className="absolute top-1/3 right-[-50px] flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg ">
                <FontAwesomeIcon icon={faAngleRight} className="text-3xl text-[#1EA4CE]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
