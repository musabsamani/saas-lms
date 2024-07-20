import React from "react";
interface Props {
  children: React.ReactNode;
  OuterClassName: string;
  InnerClassName: string;
}
const Icon: React.FC<Props> = ({ children, OuterClassName, InnerClassName }) => {
  return (
    <div className={`absolute flex items-center justify-center p-[10px] text-3xl rounded-3xl bg-[#FFF] bg-opacity-80 shadow-[0px_14px_44px_rgba(86,91,221,0.1)] ${OuterClassName}`}>
      <div className={`bg-[#FFF] rounded-3xl shadow-[0px_14px_44px_rgba(13,15,28,0.1)] ${InnerClassName}`}>{children}</div>
    </div>
  );
};

export default Icon;
