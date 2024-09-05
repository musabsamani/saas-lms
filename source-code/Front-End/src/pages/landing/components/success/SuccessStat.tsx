import { useTranslation } from "react-i18next";
import { SuccessStatProps } from "../../../../types/components";

const SuccessStat = ({ cardNumber }: SuccessStatProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-center capitalize w-[250px]">
      <h2 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">{t(`success.cards.${cardNumber}.number`)}</h2>
      <p className="pt-5 text-2xl text-[#010514] text-opacity-80">{t(`success.cards.${cardNumber}.text`)}</p>
    </div>
  );
};

export default SuccessStat;
