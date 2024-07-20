import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesCard from "./components/services/ServicesCard";
import { faCalendarDays, faFileInvoice, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="max-w-[750px] mx-auto text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-[#2F327D]">All-In-One </span>
            <span className="text-[#00CBB8]">Cloud Software.</span>
          </h1>
          <p className="pt-10 text-[#696984] text-2xl">TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        </div>
        <div className="pt-40 flex flex-col items-center lg:flex-row lg:items-stretch gap-x-20 gap-y-40">
          <ServicesCard
            icon={<FontAwesomeIcon icon={faFileInvoice} />}
            iconColor="bg-[#5B72EE]"
            header="online billing, invoicing, & contracts"
            text="simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
          />
          <ServicesCard
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            iconColor="bg-[#00CBB8]"
            header="easy scheduling & attendance tracking"
            text="schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          />
          <ServicesCard
            icon={<FontAwesomeIcon icon={faUsers} />}
            iconColor="bg-[#29B9E7]"
            header="customer tracking"
            text="automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
          />
        </div>
      </div>
    </section>
  );
}
