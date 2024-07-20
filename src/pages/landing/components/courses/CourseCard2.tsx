import { faArrowRight, faPalette, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../../../../assets/img/landing/CoursesPlate.jpg";
import TopToBottomCard from "./TopToBottomCard";
import CourseCard from "./CourseCard";

const CourseCard2 = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="header flex justify-between">
        <div className="flex gap-5">
          <span className="text-3xl opacity-55">
            <FontAwesomeIcon icon={faPalette} />
          </span>
          <span className="roboto font-bold text-3xl opacity-90">Lorem Ipsum</span>
        </div>
        <button className="flex gap-20 roboto font-medium uppercase text-3xl text-[#00BCD4]">
          <span>see all</span>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="flex gap-20">
        <div className="flex gap-7">
          <TopToBottomCard color="bg-[#C583FF]" text="Vestibulum faucibu" />
          <TopToBottomCard color="bg-[#FFB300]" text="Vestibulum fauci…" />
          <TopToBottomCard color="bg-[#FF8374]" text="Cras Convallis" />
          <TopToBottomCard color="bg-[#FF6F00]" text="Quisque Conseq…" />
        </div>
        <CourseCard
          img={Img1}
          title="Lorem ipsum dolor consectetur amet"
          description="Lorem ipsum dolor sit amet consectetur inventore veritatis Ipsum."
          icons={
            <>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </>
          }
        />

        <div className="flex gap-7">
          <TopToBottomCard color="bg-[#00A8FF]" text="Ut Sed Eros" />
          <TopToBottomCard color="bg-[#6DB4A7]" text="Curabitur Egestas" />
          <TopToBottomCard color="bg-[#B45A1B]" text="lorem Conseq…" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard2;
