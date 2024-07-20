import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMG1 from "../../../../assets/img/landing/Features1.png";
import Button from "../../../../components/common/buttons/Button";
import CallImgCard from "./CallImgCard";
interface Props {
  className?: string | null;
}
const InstructorCard = ({ className }: Props) => {
  return (
    <div className={`min-w-[300px] w-[75%] xl:w-[40%] flex flex-col gap-5 ${className}`}>
      <CallImgCard className="w-full" img={IMG1} isInstructor={true} name="Eveny Howard" />
      <div className="w-full flex justify-center gap-5">
        <Button className="bg-[#3465E1] text-white">preset</Button>
        <Button className="bg-[#E13468] text-white outline-[#FFD4E1] outline-8 outline" linkClass="flex gap-2">
          <span>
            <FontAwesomeIcon icon={faPhoneFlip} />
          </span>
          <span>call</span>
        </Button>
      </div>
    </div>
  );
};

export default InstructorCard;
