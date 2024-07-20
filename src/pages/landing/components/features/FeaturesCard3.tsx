import Img from "../../../../assets/img/landing/FeaturesHandStop.svg";
const FeaturesCard3 = () => {
  return (
    <div className="max-w-[600px] mx-auto xl:mx-0">
      <h2 className="2xl:max-w-[60%] capitalize text-4xl font-semibold">
        <span className="text-[#00CBB8]">tools </span>
        <span className="text-[#2F327D]">for teachers and learners</span>
      </h2>
      <div className="mt-5  relative">
        <p className="text-lg text-[#696984] leading-10">
          class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
        </p>
        <img src={Img} alt="/" className="absolute bottom-[10%] left-[70%] -z-10" />
      </div>
    </div>
  );
};

export default FeaturesCard3;
