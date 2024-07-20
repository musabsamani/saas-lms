import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaperPlane = () => {
  return (
    <div className="wrapper w-[85px] h-[85px] flex items-center justify-center">
      <div className="text-5xl w-[60px] h-[60px] rounded-full text-[#41BE90] bg-[#D8F9ED]">
        <div className="w-[60px] h-[60px] relative left-[-10px] flex items-center rotate-[-25deg]">
          <span className="h-full flex flex-col gap-1 items-end justify-center">
            <span className="w-[25px] rounded-xl h-[5px] bg-[#41BE90]"></span>
            <span className="w-[18px] rounded-xl h-[5px] bg-[#FBA333]"></span>
            <span className="w-[11px] rounded-xl h-[5px] bg-[#41BE90]"></span>
          </span>
          <FontAwesomeIcon icon={faPaperPlane} className="rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default PaperPlane;
