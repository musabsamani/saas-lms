import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../../../assets/img/landing/Hero2.png";
import Icon from "./Icon";
import Card from "./HeroCard";
import Img from "./Img";

const Cards = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex flex-col self-end ${className}`}>
      <Img className="img absolute bottom-0 left-1/2 -translate-x-1/2 w-full " />
      <Icon className="bg-[#D8587E] self-end shadow-lg backdrop-blur-lg">
        <FontAwesomeIcon icon={faSquarePollVertical} />
      </Icon>
      <Card icon={<FontAwesomeIcon icon={faCalendarDays} />} header="250k" text="assisted student" className="self-start" />
      <Card icon={<FontAwesomeIcon icon={faEnvelope} />} header="congratulations" text="your admission completed" className="mt-16 self-end" />
      <Card img={Profile} header="User experience class" text="today at 12.00 PM" button="join now" className="mt-3 self-start" />
    </div>
  );
};

export default Cards;
