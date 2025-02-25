import Cheif from "../components/Cheif";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import FancyCard from "../components/FancyCard";
import ProjectSlider from "../components/ProjectSlider";
import image1 from "../assets/ourWorkImages/image1.png"
import image2 from "../assets/ourWorkImages/image2.png"
import image3 from "../assets/ourWorkImages/image3.png"
import image4 from "../assets/ourWorkImages/image4.png"
import image5 from "../assets/ourWorkImages/image5.png"
import image6 from "../assets/ourWorkImages/image6.png"

const WorkPage = () => {
  const location = useLocation();
  const data = location.state;

  const p= ['Expressways & Highways – Facilitating smooth traffic flow with modern road infrastructure.', 'Rail & Metro Networks – Advanced rail systems for efficient public transportation.', ' Airport Infrastructure – Runways, terminals, and cargo facilities to support global travel.']
  const p2= ['High-Rise Buildings – Residential and commercial skyscrapers designed for functionality and aesthetics.', ' Commercial Complexes – Business centers, retail spaces, and industrial parks.', 'Public Infrastructure – Parks, educational institutions, and healthcare facilities.']
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
          At Knagz Power and Network-Infrastructure Group (KPNG), we are
          committed to shaping the future of global infrastructure through
          innovation, sustainability, and engineering excellence. With a strong
          presence in over 20 countries and a team of 5,000+ professionals, we
          specialize in delivering large-scale infrastructure solutions that
          drive economic growth and improve quality of life. Our expertise spans
          across diverse sectors, including transportation, urban development,
          and smart infrastructure, ensuring that every project is designed for
          long-term resilience and efficiency. From building roads, highways,
          and bridges that enhance connectivity to constructing high-rise
          buildings, commercial hubs, and modern urban spaces, KPNG is at the
          forefront of infrastructural transformation. We integrate
          state-of-the-art technology into our projects, incorporating
          IoT-enabled infrastructure, smart city solutions, and automation to
          create intelligent, interconnected environments. Our commitment to
          sustainable construction practices ensures eco friendly developments
          that align with global standards and environmental responsibility. At
          KPNG, we don't just build infrastructure—we create foundations for
          progress, delivering projects that empower communities, strengthen
          economies, and redefine the future of urban living.
        </p>
      </div>

      <Cheif data={data.cheif} />

      <div className="pb-1 md:pb-10 font-roboto-condensed">
        <ProjectSlider />
      </div>

      <p className="max-w-screen-md italic text-center mx-auto pt-2 pb-12">
        &quot;Building the Future, Connecting the World – KPNG’s expertise in
        infrastructure development ensures smart, sustainable, and
        high-performance solutions that drive economic growth and
        innovation.&quot;
      </p>

      <div className="min-h-screen py-12 bg-[#f2f8fd] font-roboto-condensed flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-4xl md:text-6xl text-[#102a41] font-semibold">
          Our Expertise
        </h1>
        <p className="text-base md:text-xl max-w-screen-xl px-8 md:px-4 pb-5">
          At KPNG, we specialize in delivering world-class infrastructure
          solutions that enhance connectivity, drive economic growth, and create
          sustainable urban environments. Our expertise spans multiple sectors,
          integrating cutting-edge technology, innovative engineering, and
          eco-friendly practices to ensure long-term efficiency and resilience.
        </p>

        <FancyCard p={p} ilus={[image1, image2, image3]} title={'Transportation Infrastructure'} sub={'We design and develop high-performance road networks, highways, and bridges, improving mobility and connectivity across regions. Our expertise includes:'} />
        <FancyCard p={p2} ilus={[image4, image5, image6]} title={'Urban Development & High-Rise Construction'} sub={'We shape modern cityscapes by developing commercial hubs, residential complexes, and public spaces with a focus on sustainability and smart city integration. Our urban projects include:'} />
      </div>

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
