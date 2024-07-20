import BlogSmallCard from "./components/blogs/BlogSmallCard";
import Img1 from "../../assets/img/landing/Blog1.png";
import Img2 from "../../assets/img/landing/Blog2.png";
import Img3 from "../../assets/img/landing/Blog3.png";
import Img4 from "../../assets/img/landing/Blog4.png";
import ImgCard from "./components/blogs/ImgCard";

export default function Blogs() {
  return (
    <section className="section blog">
      <div className="container mx-auto">
        <div className="flex xl:gap-20">
          <div className="hidden xl:flex 2xl:w-[47.5%] xl:w-[50%] xl:flex-col xl:justify-between xl:items-start gap-5">
            <ImgCard img={Img1} category="Education" />
            <h2 className="font-medium text-xl text-[#252641]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
            <p className="text-[#696984]">class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <button className="text-[#696984] underline">read more</button>
          </div>
          <div className="2xl:w-[47.5%] xl:w-[50%] w-full flex flex-col md:flex-row xl:flex-col flex-wrap justify-between gap-y-20 gap-x-[2.5%]">
            <BlogSmallCard
              img={Img2}
              category="Education"
              header="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
              text="This year, investors have reaped big financial returns from betting on Zoom..."
            />
            <BlogSmallCard
              img={Img3}
              category="Education"
              header="Zoom’s earliest investors are betting millions on a better Zoom for schools"
              text="Zoom was never created to be a consumer product. Nonetheless, the..."
            />
            <BlogSmallCard
              img={Img4}
              category="Education"
              header="Class Technologies Inc., the company that created Class,..."
              text="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
              className="flex xl:hidden"
            />
            <BlogSmallCard
              img={Img4}
              category="Education"
              header="Class Technologies Inc., the company that created Class,..."
              text="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
              className="flex xl:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
