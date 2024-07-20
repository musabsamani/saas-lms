import CallImgCard from "./CallImgCard";
import IMG2 from "../../../../assets/img/landing/Features2.png";
import IMG3 from "../../../../assets/img/landing/Features3.png";
import IMG4 from "../../../../assets/img/landing/Features4.png";
import IMG5 from "../../../../assets/img/landing/Features5.png";
import InstructorCard from "./InstructorCard";
import LaptopBG from "./LaptopBG";

const FeaturesCard1 = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center">
      <LaptopBG>
        <InstructorCard />
        <div className="grid grid-cols-2 gap-5">
          <CallImgCard className="w-[100%] self-end justify-self-end" img={IMG2} isInstructor={false} name="Tamara" />
          <CallImgCard className="w-[120%] justify-self-start" img={IMG4} isInstructor={false} name="Adam Levin" />
          <CallImgCard className="w-[100%] justify-self-end" img={IMG3} isInstructor={false} name="Humbert" />
          <CallImgCard className="w-[120%]" img={IMG5} isInstructor={false} name="Patricia Mendoza" />
        </div>
      </LaptopBG>
    </div>
  );
};

export default FeaturesCard1;
