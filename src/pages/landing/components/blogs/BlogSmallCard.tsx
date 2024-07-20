import ImgCard from "./ImgCard";

interface Props {
  img: string;
  header: string;
  category: string;
  text: string;
  className?: string | null;
}
const BlogSmallCard = ({ img, category, header, text, className }: Props) => {
  return (
    <div className={`flex flex-col xl:flex-row gap-10 2xl:w-[75%] xl:w-[100%] w-full  md:w-[47.5%] ${className}`}>
      <div className="w-full">
        <ImgCard img={img} category={category} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-medium text-2xl text-[#252641]">{header}</h2>
        <p className="text-xl text-[#696984]">{text}</p>
      </div>
    </div>
  );
};

export default BlogSmallCard;
