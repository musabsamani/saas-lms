interface Props {
  img: string;
  category: string;
  className?: string | null;
}

const ImgCard = ({ img, category, className }: Props) => {
  return (
    <div className="relative">
      <img src={img} alt="/" className={`rounded-xl w-full ${className}`} />
      <span className="absolute block bottom-5 right-5 text-white bg-[#49BBBD] py-2 px-5 rounded-full text-base">{category}</span>
    </div>
  );
};

export default ImgCard;
