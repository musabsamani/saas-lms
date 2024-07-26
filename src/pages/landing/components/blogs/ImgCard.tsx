import useImportImg from "../../../../hooks/useImportImg";

interface Props {
  img: string;
  category: string;
  className?: string | null;
}

const ImgCard = ({ img, category, className }: Props) => {
  const imageSrc = useImportImg(img)

  return (
    <div className="relative aspect-[3/2]">
      <img src={imageSrc} alt="/" className={`rounded-xl w-full h-full object-cover ${className}`} />
      <span className="absolute block bottom-5 end-5 text-white bg-[#49BBBD] py-2 px-5 rounded-full text-base">{category}</span>
    </div>
  );
};

export default ImgCard;
