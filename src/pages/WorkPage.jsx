import Cheif from "../components/Cheif";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import FancyCard from "../components/FancyCard";
import ProjectSlider from "../components/ProjectSlider";

const WorkPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <CustomHeader
        bgImg={data.bgImg}
        boldLine={data.boldLine}
        normalLine={data.normalLine}
      />
      <div className="min-h-screen bg-[#f2f8fd] font-roboto-condensed flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-5xl md:text-7xl text-[#102a41] font-semibold">Overview</h1>
        <p className="text-base md:text-xl max-w-screen-xl px-8 md:px-4">Knagz Power and Network-Infrastructure Group (KPNG) is a global leader in power and infrastructure development, founded in 2011 and headquartered in Riyadh, Saudi Arabia. With operations spanning over 20 countries and a workforce of more than 5,000 professionals, KPNG specializes in delivering sustainable and technologically advanced solutions in energy, transportation, and urban development. The company’s core services include infrastructure development, such as roads, highways, high-rise buildings, and urban projects, as well as power and energy solutions, focusing on renewable energy installations, power plant construction, and energy management systems. Additionally, KPNG integrates cutting-edge technology into its projects through smart city solutions, IoT-based infrastructure management, and automation while also excelling in large-scale project management, ensuring efficiency, risk mitigation, and timely execution.</p>
      </div>

      <Cheif data={data.cheif} />

      <div className="font-roboto-condensed max-w-screen-2xl mx-auto pt-10 pb-20">
      <h1 className="text-5xl md:text-6xl text-[#102a41] pb-5 pl-8 md:pl-20">Our Solutions</h1>
      <div className="flex gap-3 flex-wrap justify-center">
      {data.solutions && data.solutions.map((item, index) => (
        <FancyCard key={index} data={item} />
      ))}
      </div>
      </div>

      <div className="py-10 bg-[#102a41] font-roboto-condensed">
        <div className="flex items-center relative">
          <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="p-5 md:p-20">
              <img
                src={data.contentImg}
                alt="Collaborative Partner"
                className="w-full h-full object-cover shadow"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-screen-md h-full">
              <div className="h-full text-white p-4 md:p-8 md:rounded-lg flex flex-col gap-8 items-center justify-center">
                <h3 className="font-light text-5xl md:text-7xl uppercase py-5">
                Why Choose KPNG?
                </h3>

                {data.spans && data.spans.map((item, index) => (
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
      </div>

      <div className="pt-10 md:pt-28 pb-1 md:pb-10 font-roboto-condensed">
        <ProjectSlider />
      </div>

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
