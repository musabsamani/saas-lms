import ImgCard from "./ImgCard";

interface Props {
  index: number;
  img: string;
  header: string;
  category: string;
  text: string;
  className?: string | null;
}
const BlogSmallCard = ({ index, img, category, header, text, className }: Props) => {
  return (
    <div className={`flex flex-col xl:flex-row gap-10 2xl:w-[75%] xl:w-[100%] w-full  md:w-[47.5%] ${className}`}>
      <div className="w-full">
        <ImgCard img={img} category={category} />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="h-[65px] font-medium text-2xl text-[#252641] line-clamp-2 text-ellipsis">{header}</h2>
        <p className="h-[85px] text-xl text-[#696984] line-clamp-3	text-ellipsis">{text}</p>
        {index === 0 && <button className="text-[#696984] underline">read more</button>}
      </div>
    </div>
  );
};

export default BlogSmallCard;
