import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonTypes } from "../../../types/components";

interface Button1Props {
  children: ReactNode;
  to?: string | null;
  type?: buttonTypes;
  className?: string | null;
  linkClass?: string;
}

const style = {
  basic: "first-capitalize px-8 py-2 rounded-3xl duration-300 transition-all",
  submit: "",
  reset: "",
  section1: "rounded-full py-3 text-2xl text-[#49BBBD] border-2 border-[#49BBBD] nunito hover:bg-[#49BBBD] hover:text-white",
  section2: "rounded-2xl uppercase text-[#00BCD4] hover:text-white hover:bg-[#00BCD4] border-2 border-[#00BCD4]",
  primary1: "text-[#5B5B5B] bg-white hover:text-white hover:bg-[#5B5B5B]",
  primary2: "bg-white bg-opacity-30 hover:bg-opacity-100 hover:text-[#5B5B5B]",
  bd1: "rounded-full text-2xl py-6 px-10 border-[1px] border-white bg-opacity-30 font-medium ",
  bd2: "rounded-full text-2xl py-6 px-10 bg-[#23BDEE] bg-opacity-80 font-medium ",
};

const Button: React.FC<Button1Props> = ({ children, to, type, linkClass, className }) => {
  const styling = type ? style.basic + " " + style?.[type] : style.basic;
  return (
    <button className={`${styling} ${className}`}>
      <Link to={to ? to : "/"} className={linkClass}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
