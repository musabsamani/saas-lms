import { useTranslation } from "react-i18next";
import Button from "./buttons/Button";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section className="section footer bg-[#252641] !py-20">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex gap-20 flex-col lg:flex-row justify-between items-center text-white">
          <div className="logo flex lg:justify-end lg:w-[250px]">
            <Logo />
          </div>
          <span className="w-[2px] hidden lg:block h-20 lg:bg-[#626381]"></span>
          <p className="w-[250px] text-center ">{t("footer.title")}</p>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <p className="font-medium text-center text-2xl text-[#B2B3CF]">{t("footer.subscribe")}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col lg:flex-row gap-5">
            <input type="text" placeholder={t("footer.input")} className="max-w-[400px] bg-transparent border-2 border-[#83839A] px-8 py-3 rounded-3xl text-xl text-[#83839A]" />
            <Button type="submit" className="font-medium text-xl bg-[#49BBBD] text-white">
              {t("footer.button")}
            </Button>
          </form>
        </div>
        <div className="text-[#B2B3CF] flex flex-col lg:flex-row lg:items-center gap-10">
          <ul className="list-none flex flex-col lg:flex-row lg:divide-x-2 divide-[#B2B3CF]">
            <li className="px-5">{t("footer.list1")}</li>
            <li className="px-5">{t("footer.list2")}</li>
            <li className="px-5">{t("footer.list3")}</li>
          </ul>
          <p>
            <bdi>
              <span>©</span>
              <span>{" "}</span>
              <span>{t("footer.copyright")}</span>
            </bdi>
          </p>
        </div>
      </div>
    </section>
  );
}
