import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../../../../assets/img/landing/CoursesPhotographer.jpg";
import TopToBottomCard from "./TopToBottomCard";
import CourseCard from "./CourseCard";
import CoursesCardHeader from "./CoursesCardHeader";

const CourseCard1 = ({ cardNumber }: { cardNumber: number }) => {
  return (
    <div className="flex flex-col gap-10 max-w-[400px] xl:max-w-[600px] ">
      <CoursesCardHeader cardNumber={cardNumber} />

      <div className="flex gap-20">
        <div className="hidden xl:flex gap-7">
          <TopToBottomCard color="bg-[#6DB4A7]" text="Curabitur Egestas" />
          <TopToBottomCard color="bg-[#C583FF]" text="Vestibulum faucibu" />
          <TopToBottomCard color="bg-[#00A8FF]" text="Ut Sed Eros" />
          {/* <TopToBottomCard color="bg-[#FFB300]" text="Vestibulum fauci…" />
          <TopToBottomCard color="bg-[#FF8374]" text="Cras Convallis" /> */}
          <TopToBottomCard color="bg-[#FF6F00]" text="Quisque Conseq…" />
          <TopToBottomCard color="bg-[#B45A1B]" text="lorem Conseq…" />
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
      </div>
    </div>
  );
};

export default CourseCard1;