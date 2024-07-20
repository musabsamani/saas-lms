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
  basic: "first-capitalize px-8 py-2 rounded-3xl ",
  submit: "",
  reset: "",
  primary1: "text-[#5B5B5B] bg-white ",
  primary2: "bg-white bg-opacity-30 ",
  bd1: "rounded-full text-2xl py-6 px-10 border-[1px] border-white bg-opacity-30 font-medium ",
  bd2: "rounded-full text-2xl py-6 px-10 bg-[#23BDEE] bg-opacity-80 font-medium ",
};

const Button: React.FC<Button1Props> = ({ children, to, type, linkClass, className }) => {
  const styling = type ? style.basic + style?.[type] : style.basic;
  return (
    <button className={`${styling} ${className}`}>
      <Link to={to ? to : "/"} className={linkClass}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
