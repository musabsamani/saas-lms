import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturesCard2 = () => {
  return (
    <div className="max-w-[600px] mx-auto xl:mx-0">
      <h2 className="mb-10 text-4xl font-semibold text-[#2F327D]">
        A <span className="text-[#00CBB8]">user interface</span> designed for the classroom
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <div className="flex justify-center items-center  w-[60px] min-w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <div className="grid grid-cols-2 w-7 h-7 gap-1">
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#2F327D] rounded-sm w-3 h-3"></span>
              <span className="bg-[#F48C06] rounded-sm w-3 h-3 "></span>
            </div>
          </div>
          <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <span className="bg-[#F48C06] w-5 h-5 relative top-[-4px] left-[6px]"></span>
            <span className="bg-[#2F327D] w-5 h-5 relative top-[4px] left-[-6px]"></span>
          </div>
          <p>TA’s and presenters can be moved to the front of the class.</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FBFBFB] bg-opacity-60 shadow-[0px_15px_44px_rgba(13,15,28,0.12)]">
            <FontAwesomeIcon icon={faUsers} className="text-2xl text-[#2F327D]" />
          </div>
          <p>Teachers can easily see all students and class data at one time.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard2;
