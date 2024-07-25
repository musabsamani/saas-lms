import { faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import TestiCard from "./components/testimonials/TestiCard";
import { testimonialsArrayTypes } from "../../types/components";


export default function Testemonials() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const testimonialsArray = t('testimonials.data', { returnObjects: true }) as testimonialsArrayTypes[]
  const [testimonial, setTestimonial] = useState(testimonialsArray[0])

  const handleTesimonialsChange = () => {
    if (testimonialsArray[index + 1] === undefined) {
      setTestimonial(testimonialsArray[0])
      setIndex(0)
    } else {
      setTestimonial(testimonialsArray[index + 1])
      setIndex(index + 1)

    }
  }

  return (
    <section className="section testimonials">
      <div className="container mx-auto">
        <div className="flex flex-col gap-40 2xl:flex-row 2xl:items-center 2xl:gap-20 md:mb-40">
          <div className="intro 2xl:w-1/2 flex flex-col justify-center items-center gap-5 xl:text-center 2xl:text-start 2xl:items-start 2xl:justify-start">
            <div className="flex items-center gap-5 self-start">
              <span className="h-[1px] w-20 block bg-[#525596]"></span>
              <h1 className="uppercase nunito text-2xl text-[#525596]">{t("testimonials.heading")}</h1>
            </div>
            <div className="text max-w-[full] 2xl:max-w-[600px] mt-20">
              <h2 className="nunito text-6xl font-bold text-[#2F327D]">{t("testimonials.title")}</h2>
              <div className="mt-10 flex flex-col gap-5 text-2xl poppins text-[#696984]">
                <p className="max-w-[900px]">{t(`testimonials.description`)}</p>
                <label
                  className="xl:mx-auto 2xl:mx-0 relative mt-10 flex items-center justify-between max-w-full sm:max-w-[450px] h-[60px] md:h-[80px] rounded-full border-2 border-[#49BBBD] text-[#49BBBD] capitalize">
                  <input type="text" placeholder={t("testimonials.button")} className="w-[calc(100%-80px)] sm:max-w-full text-ellipsis capitalize ps-10 bg-transparent outline-none focus:outline-none" />
                  <button type="submit" className="flex items-center justify-center rounded-[50px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] md:rounded-[80px] border-2 border-[#49BBBD] hover:text-white hover:bg-[#49BBBD] transition-all duration-300">
                    <FontAwesomeIcon icon={faArrowRightLong} className="rtl" />
                  </button>
                </label>
              </div>
            </div>
          </div>
          <div className="testi mx-auto max-w-[700px] w-full h-[750px]">
            <div className="relative max-w-[75%] h-fit">
              <div className="w-full aspect-[7/10]">
                <img src={testimonial.img} alt="/" className="block w-full h-full object-cover" />
                {/* copyright from freepik - reference */}
                <div className="hidden">
                  <a href="https://www.freepik.com/free-photo/doctor-with-documents-hall_1796588.htm#from_view=detail_alsolike">Image by freepik</a>
                  <a href="https://www.freepik.com/free-photo/talking-about-videography-technology-recording-videoblog_16559781.htm#fromView=search&page=2&position=3&uuid=ced07ed6-8e70-43ee-bf31-db1aadb18010">Image by DC Studio on Freepik</a>
                  <a href="https://www.freepik.com/free-photo/pleased-satisfied-excited-funny-european-male-with-bristle-glasses-green-casual-t-shirt-showing-thumbs-up-smiling-joyfully-approving-good-idea_10151306.htm#fromView=search&page=1&position=31&uuid=cb8863b5-2e7a-4b8d-a116-ed4ba461796b">Image by cookie_studio on Freepik</a>
                  <a href="https://www.freepik.com/free-photo/smiling-blond-businessman-showing-thumbs-up-like-approve-smth-good-standing-white-shirt-against-studio-background_24481112.htm#fromView=image_search_similar&page=1&position=1&uuid=532676ff-3217-41f1-9d8f-7b726cddace7">Image by cookie_studio on Freepik</a>
                </div>
              </div>
              <div className="absolute xl:w-[650px] md:w-full w-[110%] start-[20px] md:end-[-100px] xl:end-[-200px] top-[80%] xl:bottom-[-150px]">
                <span className="absolute inset-0 w-full h-full block backdrop-blur-lg"></span>
                <TestiCard name={testimonial.name} text={testimonial.text} reviwes={+testimonial.reviews} stars={+testimonial.stars} />
              </div>
              <div className="absolute top-1/3 end-[-50px] flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg ">
                <button className="w-full h-full" onClick={() => handleTesimonialsChange()}>
                  <FontAwesomeIcon icon={faAngleRight} className="rtl text-3xl text-[#1EA4CE]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
