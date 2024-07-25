import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  img: string;
  grade: string;
  direction: "left" | "right";
  parentClassName: string;
  spanClassName: string;
}

const FeaturesCard8Grade = ({ img, grade, direction, parentClassName, spanClassName }: Props) => {
  return (
    <div className={`z-[2] md:h-[30px] h-[20px] absolute ${parentClassName} ${direction === "left" ? "start-0" : "end-0"}`}>
      <div className={`h-[50px] w-[50px] md:w-[80px] md:h-[80px] absolute top-[-15px] md:top-[-30px] ${direction === "left" ? "end-[-15px]" : "start-[-15px]"}`}>
        <img src={img} alt="/" className={`rounded-full w-full`} />
        {grade === "100" && <FontAwesomeIcon icon={faStar} className="text-[#F9BB1C] text-xl absolute start-0 end-0 mx-auto md:bottom-[-12px] bottom-[-8px]" />}
        <span className={`absolute p-2 w-16 md:w-fit flex items-center justify-center rounded-full md:py-2 md:px-5 md:rounded-2xl font-medium text-xl  ${spanClassName} bottom-0 top-0 md:bottom-[-20px] md:top-auto ${direction === "left" ? "end-[-70px] md:end-[-50px] " : "start-[-70px] md:start-[-50px] "}`}>{grade}</span>
      </div>
    </div>
  );
};
/* Rectangle 65 */

export default FeaturesCard8Grade;
