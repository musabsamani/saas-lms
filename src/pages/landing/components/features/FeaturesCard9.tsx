import LaptopBgBlur from "./LaptopBgBlur";
import LaptopDiscuss from "./LaptopDiscuss";

const FeaturesCard9 = () => {
  return (
    <div className="relative w-[100%] h-[650px]">
      <div className="relative w-full flex items-center">
        <LaptopBgBlur className="w-[80%] h-[500px] relative -z-10" />
        <div className="absolute inset-0 flex justify-center items-center w-[100%] h-[600px]">
          <LaptopDiscuss />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard9;
