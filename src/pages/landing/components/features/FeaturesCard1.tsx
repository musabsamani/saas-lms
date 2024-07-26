import CallImgCard from "./CallImgCard";
import IMG2 from "../../../../assets/img/landing/Features2.png";
import IMG3 from "../../../../assets/img/landing/Features3.png";
import IMG4 from "../../../../assets/img/landing/Features4.png";
import IMG5 from "../../../../assets/img/landing/Features5.png";
import InstructorCard from "./InstructorCard";
import LaptopBG from "./LaptopBG";
import { useTranslation } from "react-i18next";

const FeaturesCard1 = ({ className }: { className: string }) => {
  const { t } = useTranslation()


  return (
    <div className={`max-w-[1000px] mx-auto w-full h-fit flex items-center justify-center ${className}`}>
      <LaptopBG>
        <InstructorCard />
        <div className="grid grid-cols-2 md:gap-5 gap-2">
          <CallImgCard className="self-end justify-self-end" img={IMG2} isInstructor={false} name={t(`features.cards.1.name1`)} />
          <CallImgCard className="lg:w-[120%] justify-self-start" img={IMG4} isInstructor={false} name={t(`features.cards.1.name2`)} />
          <CallImgCard className="justify-self-end" img={IMG3} isInstructor={false} name={t(`features.cards.1.name3`)} />
          <CallImgCard className="lg:w-[120%]" img={IMG5} isInstructor={false} name={t(`features.cards.1.name4`)} />
        </div>
      </LaptopBG>
    </div>
  );
};

export default FeaturesCard1;
