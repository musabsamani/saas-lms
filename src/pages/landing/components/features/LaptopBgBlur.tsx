import CallImgCard from "./CallImgCard";
import IMG2 from "../../../../assets/img/landing/Features2.png";
import IMG3 from "../../../../assets/img/landing/Features3.png";
// import IMG4 from "../../../../assets/img/landing/Features4.png";
// import IMG5 from "../../../../assets/img/landing/Features5.png";
import InstructorCard from "./InstructorCard";
import LaptopBG2 from "./LaptopBG2";

const LaptopBgBlur = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-center justify-center ${className} `}>
      <LaptopBG2>
        <InstructorCard className="w-full col-span-2 row-span-2 mx-auto" />
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
          <CallImgCard className="w-full" img={IMG2} isInstructor={false} name="Tamara" />
          {/* <CallImgCard className="w-[200px] justify-self-start" img={IMG4} isInstructor={false} name="Adam Levin" /> */}
          <CallImgCard className="w-full" img={IMG3} isInstructor={false} name="Humbert" />
        </div>
        {/* <CallImgCard className="w-[200px]" img={IMG5} isInstructor={false} name="Patricia Mendoza" /> */}
      </LaptopBG2>
    </div>
  );
};

export default LaptopBgBlur;
