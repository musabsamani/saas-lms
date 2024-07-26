import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesCard from "./components/services/ServicesCard";
import { faCalendarDays, faFileInvoice, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container mx-auto overflow-visible">
        <div className="max-w-[750px] mx-auto text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-[#2F327D]">{t(`services.title1`)}</span>
            <span>{" "}</span>
            <span className="text-[#00CBB8]">{t(`services.title2`)}</span>
          </h1>
          <p className="pt-10 text-[#696984] text-2xl">{t(`services.description`)}</p>
        </div>
        <div className="pt-40 flex flex-wrap justify-center items-center gap-x-20 gap-y-40">
          <ServicesCard
            icon={<FontAwesomeIcon icon={faFileInvoice} />}
            iconColor="bg-[#5B72EE]"
            cardNumber={1}
          />
          <ServicesCard
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            iconColor="bg-[#00CBB8]"
            cardNumber={2}
          />
          <ServicesCard
            icon={<FontAwesomeIcon icon={faUsers} />}
            iconColor="bg-[#29B9E7]"
            cardNumber={3}
          />
        </div>
      </div>
    </section>
  );
}
