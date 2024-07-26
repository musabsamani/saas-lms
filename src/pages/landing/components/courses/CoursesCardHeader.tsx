import { faArrowRight, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

const CoursesCardHeader = ({ cardNumber }: { cardNumber: number }) => {
    const { t } = useTranslation()

    return (
        <div className="header h-[60px] flex justify-between text-xl xl:text-3xl">
            <div className="flex gap-5">
                <span className="opacity-55">
                    <FontAwesomeIcon icon={faPalette} />
                </span>
                <span className="roboto font-bold opacity-90">{t(`courses.cards.${cardNumber}.title`)}</span>
            </div>
            <button className="flex gap-5 xl:gap-20 roboto font-medium uppercase text-[#00BCD4]">
                <span>{t("courses.seeAll")}</span>
                <span>
                    <FontAwesomeIcon icon={faArrowRight} className="rtl" />
                </span>
            </button>
        </div>
    );
}

export default CoursesCardHeader;
