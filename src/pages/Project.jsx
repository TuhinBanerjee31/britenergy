import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image31 from "../assets/allProjectImages/image31.jpg";
import imageDown from "../assets/SliderAreaImages/image1.jpg";
import { Link, useLocation } from "react-router-dom";

const Project = () => {
    const location = useLocation();
    const projectData = location.state;
  return (
    <>
      <CustomHeader
        bgImg={image31}
        boldLine={"In Longer-run"}
        normalLine={"Our work is what defines us"}
      />
      <div className="min-h-screen font-roboto-condensed">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <img
            src={projectData.imgUrl}
            className="max-w-sm transition-all hover:scale-105 cursor-pointer w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto md:mx-0"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 font-bold text-gray-900 leading-tight text-center md:text-left">
            {projectData.venue}
          </h1>
          <p className="text-md sm:text-lg text-red-600 font-semibold mt-2 text-center md:text-left">
            {projectData.headline}
          </p>

          <div className="mt-6 border-t border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase text-center md:text-left">
                Client
              </p>
              <p className="text-md sm:text-lg font-bold text-gray-900 text-center md:text-left">
                Hoag Memorial Hospital Presbyterian
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase text-center md:text-left">
                Project Status
              </p>
              <p className="text-md sm:text-lg font-bold text-gray-900 text-center md:text-left">
                In Progress
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase text-center md:text-left">
                Markets
              </p>
              <p className="text-md sm:text-lg font-bold text-red-600 underline text-center md:text-left">
                {projectData.sector}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#EBEBEA] min-h-[50vh] my-10 flex justify-center items-center">
          <p className="max-w-screen-md text-2xl tracking-wider">{projectData.desc}</p>
        </div>

        <div className="flex items-center relative py-20">
          <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div>
              <img
                src={imageDown}
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
      </div>
      <Footer />
    </>
  );
};

export default Project;
