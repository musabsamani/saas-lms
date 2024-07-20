import Cards from "./components/hero/Cards";
import IntroText from "./components/hero/IntroText";
export default function Hero() {
  return (
    <div className={`hero container mx-auto`}>
      <div className="relative flex flex-col lg:flex-row gap-x-20 gap-y-28 justify-between">
        <IntroText className="lg:w-1/2 w-full  pt-20 inset-0" />
        <Cards className="lg:w-1/2  w-full h-full py-10" />
      </div>
    </div>
  );
}
