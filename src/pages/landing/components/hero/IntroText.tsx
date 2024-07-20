import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../../components/common/buttons/Button";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface IntroTextProps {
  className?: string;
}
const IntroText = ({ className }: IntroTextProps) => {
  return (
    <div className={`text-white text-2xl lg:text-left text-center ${className}`}>
      <h1 className="font-bold text-[54px]">
        <span className="text-[#F48C06]">Studying </span>
        <span className="first-capitalize">Online is now much easier</span>
      </h1>
      <p className="pt-5 max-w-[523px] nunito">TOTC is an interesting platform that will teach you in more an interactive way</p>
      <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-10">
        <Button type="primary2">join for free</Button>
        <div className="flex items-center gap-10">
          <span className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPlay} className="text-[#23BDEE] text-3xl" />
          </span>
          <p className="text-[#252641] first-capitalize">watch how it works</p>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
