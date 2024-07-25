import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMG1 from "../../../../assets/img/landing/Features1.png";
import Button from "../../../../components/common/buttons/Button";
import CallImgCard from "./CallImgCard";
import { useTranslation } from "react-i18next";
interface Props {
  className?: string | null;
}
const InstructorCard = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={`min-w-[250px] w-[75%] xl:w-[60%] 2xl:w-[40%] flex flex-col gap-5 ${className}`}>
      <CallImgCard className="w-full" img={IMG1} isInstructor={true} name={t(`features.cards.1.name0`)} />
      <div className="w-full flex justify-center gap-5">
        <Button className="bg-[#3465E1] text-white">{t(`features.cards.1.button1`)}</Button>
        <Button className="bg-[#E13468] text-white outline-[#FFD4E1] outline-8 outline" linkClass="flex gap-2">
          <span>
            <FontAwesomeIcon icon={faPhoneFlip} className="rtl" />
          </span>
          <span>{t(`features.cards.1.button2`)}</span>
        </Button>
      </div>
    </div>
  );
};

export default InstructorCard;
