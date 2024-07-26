import { useTranslation } from "react-i18next";
import SuccessStat from "./components/success/SuccessStat";

export default function Success() {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="max-w-[750px] mx-auto text-center">
          <h1 className="capitalize text-5xl font-bold text-[#010514]">{t("success.title")}</h1>
          <p className="pt-5 pb-28 text-lg text-[#010514] text-opacity-80">
            {t("success.description")}
          </p>
        </div>
        <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-20">
          <SuccessStat cardNumber={1} />
          <SuccessStat cardNumber={2} />
          <SuccessStat cardNumber={3} />
          <SuccessStat cardNumber={4} />
          <SuccessStat cardNumber={5} />
        </div>
      </div>
    </section>
  );
}
