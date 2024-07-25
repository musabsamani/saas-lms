import Girl from "../../../../assets/img/landing/Hero1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../../../assets/img/landing/Hero2.png";
import Icon from "./Icon";
import Card from "./HeroCard";
// import Img from "./Img";

const Cards = ({ className }: { className?: string }) => {

  return (
    <div className={`relative xl:min-h-fit md:min-h-[800px] min-h-[700px] flex flex-col self-end ${className}`}>
      <div className="hidden md:block img max-w-[400px] w-[65%] h-full mx-auto xl:start-auto absolute start-0 xl:end-0 xl:bottom-0" >
        <img src={Girl} alt="/" className="object-contain block mx-auto absolute bottom-0" />
      </div>
      <Icon className="bg-[#D8587E] self-end shadow-lg backdrop-blur-lg">
        <FontAwesomeIcon icon={faSquarePollVertical} />
      </Icon>
      <Card icon={<FontAwesomeIcon icon={faCalendarDays} />} cardNumber={1} className="self-start" />
      <Card icon={<FontAwesomeIcon icon={faEnvelope} />} cardNumber={2} className="mt-16 self-end" />
      <Card img={Profile} cardNumber={3} button={true} className="mt-3 self-start" />
    </div >
  );
};

export default Cards;
