import Cards from "./components/hero/Cards";
import IntroText from "./components/hero/IntroText";
export default function Hero() {
  return (
    <div className={`hero container mt-[100px] mx-auto h-full py-0`}>
      <div className="relative min-h-[90dvh] flex flex-col xl:flex-row gap-x-20 gap-y-28 justify-between">
        <div className="xl:w-1/2 w-full flex items-center inset-0 max-w-[700px] mx-auto">
          <IntroText />
        </div>
        <Cards className="xl:w-1/2 w-full py-10 max-w-[800px] mx-auto" />
      </div>
    </div>
  );
}
