import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation()


  return (
    <section className="section features max-w-[100dvw] overflow-hidden">
      <div className="container mx-auto overflow-visible">
        <div className="mb-20 xl:text-center flex flex-col gap-5 mx-auto max-w-[600px]">
          <h1 className="font-bold text-3xl">
            <span className="text-[#2F327D] ">{t(`features.title1`)}</span>
            <span>{" "}</span>
            <span className="text-[#00CBB8] ">{t(`features.title2`)}</span>
          </h1>
          <p className="text-[#696984] text-xl">{t(`features.description`)}</p>
        </div>
        <div className="mt-40 grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-40 justify-center items-center">
          <FeaturesCard1 className="order-1 xl:order-2 2xl:order-1 xl:col-span-2 2xl:col-span-1" />
          <FeaturesCard2 className="order-1 xl:col-span-2 xl:justify-self-center 2xl:col-span-1" />
          <FeaturesCard3 className="order-3" />
          <FeaturesCard4 className="order-4" />
          <FeaturesCard5 className="order-5" />
          <FeaturesCard6 className="order-6" />
          <FeaturesCard7 className="order-7" />
          <FeaturesCard8 className="order-8" />
          <FeaturesCard9 className="order-9" />
          <FeaturesCard10 className="order-10" />
        </div>
        <div className="w-fit mx-auto mt-40">
          <Button type="section1">{t(`features.button`)}</Button>
        </div>
      </div>
    </section>
  );
}
