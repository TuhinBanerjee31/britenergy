import Cheif from "../components/Cheif";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import image11 from "../assets/SliderAreaImages/image1.jpg";

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
      <Cheif data={data.cheif} />
      <div className="py-10 bg-gray-900">
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
              <div className="h-full text-white p-8 md:rounded-lg flex flex-col items-center justify-center">
                <h3 className="font-light text-5xl md:text-7xl uppercase">
                  {data.title}
                </h3>
                <p className="font-light text-xl tracking-wider py-8" dangerouslySetInnerHTML={{ __html: data.p1 }} />

                <p className="font-light text-xl tracking-wider py-8" dangerouslySetInnerHTML={{ __html: data.p2 }} />

                <p className="font-light text-xl tracking-wider py-8" dangerouslySetInnerHTML={{ __html: data.p3 }} />

                <p className="font-light text-xl tracking-wider py-8" dangerouslySetInnerHTML={{ __html: data.p4 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center relative py-28">
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
            <div className="bg-gray-900 text-white p-8 md:rounded-lg flex flex-col justify-center">
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
