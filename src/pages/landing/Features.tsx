import Button from "../../components/common/buttons/Button";
import FeaturesCard1 from "./components/features/FeaturesCard1";
import FeaturesCard10 from "./components/features/FeaturesCard10";
import FeaturesCard2 from "./components/features/FeaturesCard2";
import FeaturesCard3 from "./components/features/FeaturesCard3";
import FeaturesCard4 from "./components/features/FeaturesCard4";
import FeaturesCard5 from "./components/features/FeaturesCard5";
import FeaturesCard6 from "./components/features/FeaturesCard6";
import FeaturesCard7 from "./components/features/FeaturesCard7";
import FeaturesCard8 from "./components/features/FeaturesCard8";
import FeaturesCard9 from "./components/features/FeaturesCard9";

export default function Features() {
  return (
    <section className="section features">
      <div className="container mx-auto">
        <div className="mb-20 xl:text-center flex flex-col gap-5 mx-auto max-w-[600px]">
          <h1 className="font-bold text-3xl">
            <span className="text-[#2F327D] ">Our </span>
            <span className="text-[#00CBB8] ">Features</span>
          </h1>
          <p className="text-[#696984] text-xl">This very extraordinary feature, can make learning activities more efficient</p>
        </div>
        <div className="mt-40 grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-40 justify-center items-center">
          <FeaturesCard1 />
          <FeaturesCard2 />
          <FeaturesCard3 />
          <FeaturesCard4 />
          <FeaturesCard5 />
          <FeaturesCard6 />
          <FeaturesCard7 />
          <FeaturesCard8 />
          <FeaturesCard9 />
          <FeaturesCard10 />
        </div>
        <div className="w-fit mx-auto mt-40">
          <Button className="rounded-full py-3 text-2xl text-[#49BBBD] border-2 border-[#49BBBD] nunito">see more features</Button>
        </div>
      </div>
    </section>
  );
}
