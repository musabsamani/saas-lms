import Girl from "../../../../assets/img/landing/Hero1.png";
const Img = ({ className }: { className?: string }) => {
  return (
    <div className="w-[544px] overflow-hidden">
      <img src={Girl} alt="/" className={className} />
    </div>
  );
};

export default Img;
