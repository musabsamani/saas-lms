import BlogSmallCard from "./components/blogs/BlogSmallCard";
import BlogLargeCard from "./components/blogs/BlogLargeCard";
import { useTranslation } from "react-i18next";
import { blogArrayTypes } from "../../types/components";


export default function Blogs() {
  const { t } = useTranslation()
  const blogs = t('blogs.data', { returnObjects: true }) as blogArrayTypes[]


  return (
    <section className="section blog">
      <div className="container mx-auto">
        <div className="nunito mb-40 flex flex-col gap-10 lg:text-center">
          <h1 className="text-3xl font-bold text-[#2F327D]">{t("blogs.title")}</h1>
          <p className="text-2xl text-[#696984]">{t("blogs.description")}</p>
        </div>
        <div className="flex xl:gap-[5%]">
          <BlogLargeCard img={blogs[0].img} category={blogs[0].category} header={blogs[0].header} text={blogs[0].text} className={blogs[0].className} />
          <div className="xl:w-[55%] w-full flex flex-col md:flex-row xl:flex-col flex-wrap justify-between gap-y-20 gap-x-[2.5%]">
            {
              blogs.slice(1).map((item, index) => (
                <BlogSmallCard key={index} index={index} img={item.img} category={item.category} header={item.header} text={item.text} className={item.className} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
