import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutCard from "./components/about/AboutCard";
import IMG1 from "../../assets/img/landing/About1.png";
import IMG2 from "../../assets/img/landing/About2.png";
import IMG3 from "../../assets/img/landing/About3.png";
import VidoeIcon from "./components/common/VidoeIcon";


export default function About() {
  const { t } = useTranslation()


  return (
    <section className="section max-w-[100dvw] overflow-hidden">
      <div className="container mx-auto flex flex-col gap-40 overflow-visible">
        <div className="intro max-w-[1050px] mx-auto xl:text-center flex flex-col gap-20">
          <h1 className="font-semibold text-[44px]">
            <span className="text-[#2F327D]">{t(`about.title1`)}</span>
            <span>{" "}</span>
            <span className="text-[#00CBB8]">{t(`about.title2`)}</span>
          </h1>
          <p className="text-2xl leading-10 text-[#696984]">
            {t(`about.description`)}
          </p>
          <div className="flex justify-between lg:flex-row flex-col gap-x-20 gap-y-40">
            <AboutCard img={IMG1} cardNumber={1} buttonType="bd1" />
            <AboutCard img={IMG2} cardNumber={2} buttonType="bd2" />
          </div>
        </div>
        <div className="flex items-center justify-between flex-col xl:flex-row gap-x-20 gap-y-40">
          <div className="w-full flex flex-1 flex-col gap-10 ">
            <h2 className="relative text-3xl font-medium first-capitalize">
              <span className="text-[#2F327D]">{t("about.span1")}</span>
              <span>{" "}</span>
              <span className="text-[#00CBB8]">{t("about.span2")}</span>
              <span className="parallax absolute -z-[3] -top-6 -start-5 rounded-full w-20 h-20 bg-[#33EFA0]"></span>
            </h2>
            <p className="relative text-[#696984] text-xl text-justify">
              <span>{t("about.span3")}</span>
              <span className="parallax absolute -z-[3] top-14 -end-2 rounded-full w-10 h-10 bg-[#33EFA0]"></span>
            </p>
            <Link to="/" className="text-xl underline text-[#696984]">
              {t("about.button")}
            </Link>
          </div>
          <div className="relative w-full flex-1  max-w-[600px] xl:max-w-none h-fit">
            <span className="parallax absolute -start-5 -top-5 -z-[3] w-32 h-32 bg-[#23BDEE] rounded-3xl"></span>
            <span className="parallax absolute -end-5 -bottom-5 -z-[3] w-60 h-60 bg-[#33EFA0] rounded-3xl"></span>
            <div className="absolute top-[50%] start-[50%] rtl:translate-x-[50%] translate-x-[-50%] translate-y-[-50%]">
              <VidoeIcon iconClassName="text-[#00CBB8]" />
            </div>
            <img src={IMG3} alt="/" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
