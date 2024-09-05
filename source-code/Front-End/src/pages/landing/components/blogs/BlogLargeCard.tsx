import { useTranslation } from "react-i18next";
import ImgCard from './ImgCard';

interface Props {
  img: string;
  header: string;
  category: string;
  text: string;
  className?: string | null;
}
const BlogLargeCard = ({ img, category, header, text, className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={`hidden xl:flex xl:w-[40%] xl:flex-col xl:justify-between xl:items-start gap-5 ${className}`}>
      <ImgCard img={img} category={category} />
      <h2 className="font-medium text-xl text-[#252641] xl:w-[85%] line-clamp-2	text-ellipsis">{header}</h2>
      <p className="text-[#696984] xl:w-[80%] line-clamp-4 text-ellipsis">{text}</p>
      <button className="text-[#696984] underline">{t("blogs.button")}</button>
    </div>
  );
}

export default BlogLargeCard;
