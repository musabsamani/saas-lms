import IMG from "../../../../assets/img/landing/HeroBg.svg";

const Background = () => {
  return <img src={IMG} alt="/" className="w-[100%] max-w-none absolute -bottom-1 h-[25px] lg:h-[50px] z-[1]" />;
};

export default Background;
