import IMG from "../../../../assets/img/landing/HeroBg.svg";

const Background = () => {
  return <img src={IMG} alt="/" className="hidden lg:block w-full h-[100dvh] top-[100dvh] lg:top-0 inset-0 absolute" />;
};

export default Background;
