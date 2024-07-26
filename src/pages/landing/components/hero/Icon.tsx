import React from "react";

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

const Icon = ({ children, className }: IconProps) => {
  return <div className={` text-white text-3xl w-16 h-16 rounded-lg flex items-center justify-center ${className}`}>{children}</div>;
};

export default Icon;
