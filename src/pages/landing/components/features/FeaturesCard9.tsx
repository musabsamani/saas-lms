import LaptopBgBlur from "./LaptopBgBlur";
import LaptopDiscuss from "./LaptopDiscuss";

const FeaturesCard9 = ({ className }: { className: string }) => {
  return (
    <div className={`relative w-[100%] h-[650px] ${className}`}>
      <div className="relative flex items-center  h-[500px] mx-auto">
        <LaptopBgBlur className="h-full w-[100%] relative -z-[3] p-10 blur-sm" />
        <div className="mx-auto w-[80%] absolute inset-0 flex justify-center items-center h-[600px]">
          <LaptopDiscuss />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard9;
