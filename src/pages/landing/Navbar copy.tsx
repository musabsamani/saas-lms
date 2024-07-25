import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageButton from "../navbar/languageButton";
import { useTranslation } from "react-i18next";
import Logo from "../../components/common/Logo";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={`w-full h-[100px] text-white relative z-[3]`}>
      <div className="h-full container overflow-visible flex items-center justify-between mx-auto">
        {/* <div className="logo w-fit h-fit relative">
          <span className="absolute w-[50px] h-[50px] left-[-7px] top-[-7px] border-2 border-[#00fff0] rounded-sm z-[-1] rotate-[45deg] text-[#49BBBD] "></span>
          <span className="bold text-3xl tracking-widest">TOTC</span>
        </div> */}
        <Logo />
        <span className="block lg:hidden text-4xl">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <ul className="hidden lg:flex gap-5 capitalize list-none items-center text-center h-full">
          <li className="flex-auto">
            <Link to="/">{t("navbar.home")}</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">{t("navbar.about")}</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">{t("navbar.courses")}</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">{t("navbar.careers")}</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">{t("navbar.blog")}</Link>
          </li>
          <li className="flex-auto font-medium">
            <Button type="primary1">{t("navbar.login")}</Button>
          </li>
          <li className="flex-auto font-medium">
            <Button type="primary2">{t("navbar.signup")}</Button>
          </li>
          <li className="relative">
            <LanguageButton />
          </li>
        </ul>
      </div>
    </nav >
  );
}
export default Navbar
