import { useState } from "react";
import Cheif from "../components/Cheif";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import FancyCard from "../components/FancyCard";
import ProjectSlider from "../components/ProjectSlider";
import LazyImage from "../components/LazyImage";

const WorkPage = () => {
  const location = useLocation();
  const data = location.state;

  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <CustomHeader
        bgImg={data.bgImg}
        boldLine={data.boldLine}
        normalLine={data.normalLine}
      />
      <div className="min-h-screen bg-[#f2f8fd] font-roboto-condensed flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-5xl md:text-7xl text-[#102a41] font-semibold">
          Overview
        </h1>
        <p className="text-base md:text-xl max-w-screen-xl px-8 md:px-4">
          {data.overview}
        </p>
      </div>

      <Cheif data={data.cheif} />

      <div className="pb-1 md:pb-10 font-roboto-condensed">
        <ProjectSlider />
      </div>

      <p className="max-w-screen-md font-roboto-condensed italic text-center mx-auto pt-2 pb-12">
        &quot;{data.cta1}&quot;
      </p>

      <div className="min-h-screen py-12 bg-[#f2f8fd] font-roboto-condensed flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-4xl md:text-6xl text-[#102a41] font-semibold">
          Our Expertise
        </h1>
        <p className="text-base md:text-xl max-w-screen-xl px-8 md:px-4 pb-5">
          {data.expertise}
        </p>

        <div className="flex flex-col gap-5 px-4">
          {data.solutions &&
            data.solutions.map((item, index) => (
              <FancyCard
                key={index}
                p={item.p}
                ilus={item.ilus}
                title={item.title}
                sub={item.sub}
              />
            ))}
        </div>
      </div>

      <div className="flex items-center relative my-28 font-roboto-condensed">
        <div className="container mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <LazyImage
              src={data.contentImg}
              alt="Collaborative Partner"
              className="md:w-[50vw] h-[55vh] md:h-[80vh] rounded-none"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-lg right-0 top-[20%]">
            <div className="bg-[#102a41] text-white p-8 md:rounded-l-lg flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 uppercase">
                {data.subheader[0]}
              </h2>
              <h2 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-light mb-4">
              {data.subheader[1]}
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 uppercase">
              {data.subheader[2]}
              </h3>
              <p className="text-lg sm:text-xl mb-6">
                {data.subp}
              </p>
              {/* <div>
                <Link to={"/our-impact"} className="button-48 py-10">
                  <span className="text">OUR RESULTS</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="font-roboto-condensed flex flex-col justify-center items-center gap-5 text-center py-20">
        <h1 className="text-5xl text-[#102a41] font-semibold">
          Why Choose KPNG?
        </h1>
        <p className="text-base md:text-xl max-w-screen-xl px-8 md:px-4">
          A compelling section that differentiates KPNG from competitors:
        </p>

        <div id="accordion-flush" className="max-w-screen-sm mx-auto py-5 px-5">
          {/* Accordion Item 1 */}
          {data.faq.map((item) => (
            <div key={item.id}>
              <h2 id={`accordion-flush-heading-${item.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-[#102a41] border-b border-[#174e75] gap-3"
                  aria-expanded={openItem === item.id}
                  aria-controls={`accordion-flush-body-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? "max-h-[500px]" : "max-h-0"
                }`}
                aria-labelledby={`accordion-flush-heading-${item.id}`}
              >
                <div className="py-5 border-b border-gray-200 dark:border-[#174e75]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="max-w-screen-md text-3xl font-roboto-condensed italic text-center mx-auto pt-10 pb-12">
        &quot;{data.cta2}&quot;
      </p>

      {/* <div className="font-roboto-condensed max-w-screen-2xl mx-auto pt-10 pb-20 px-4">
        <h1 className="text-5xl md:text-6xl text-[#102a41] pb-5 pl-8 md:pl-20">
          Our Solutions
        </h1>
        <div className="flex gap-3 flex-wrap justify-center">
          {data.solutions &&
            data.solutions.map((item, index) => (
              <FancyCard key={index} data={item} />
            ))}
        </div>
      </div> */}

      {/* <div className="py-10 bg-[#102a41] font-roboto-condensed">
        <div className="flex items-center relative">
          <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-5 md:p-20">
              <img
                src={data.contentImg}
                alt="Collaborative Partner"
                className="w-full h-full object-cover shadow"
              />
            </div>

            
            <div className="max-w-screen-md h-full">
              <div className="h-full text-white p-4 md:p-8 md:rounded-lg flex flex-col gap-8 items-center justify-center">
                <h3 className="font-light text-5xl md:text-7xl uppercase py-5">
                  Why Choose KPNG?
                </h3>

                {data.spans &&
                  data.spans.map((item, index) => (
                    <span
                      key={index}
                      className="font-light text-lg tracking-wider p-4 md:p-8 bg-[#f2f8fd1d] rounded shadow-lg border border-[#f2f8fd]"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex items-center relative py-28 font-roboto-condensed">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={image11}
              alt="Collaborative Partner"
              className="w-full h-full object-cover shadow"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-md right-[20%] top-[25%]">
            <div className="bg-[#102a41] text-white p-8 md:rounded-lg flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                Let’s Talk
              </h2>
              <h2 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-light mb-4">
                Let’s Build Together
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Need to Reach Us?
              </h3>
              <div>
                <Link to={"/contact"} className="button-48 py-10">
                  <span className="text">CONTACT US</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkPage;
