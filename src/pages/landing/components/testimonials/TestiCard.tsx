import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestiCard = () => {
  return (
    <div className="relative flex flex-col w-full h-fit xl:p-10 xl:pl-20 xl:gap-10 p-5 pl-10 gap-5 rounded-3xl bg-white bg-opacity-80 backdrop-blur-lg shadow-lg">
      <span className="bg-[#F67766] absolute left-0 top-0 block w-3 h-full rounded-l-3xl"></span>
      <q className="nunito xl:text-xl text-[#5F5F7E] xl:leading-9">
        Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.
      </q>
      <div className=" flex justify-between items-center">
        <p className="xl:text-2xl font-semibold text-[#5F5F7E]">Gloria Rose</p>
        <div className="flex flex-col gap-5">
          <span className="flex gap-2 justify-center text-[#f9bb1c]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <p className="font-semibold text-lg text-[#80819A]">12 reviews at Yelp</p>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
