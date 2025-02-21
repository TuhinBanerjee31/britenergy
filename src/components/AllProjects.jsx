import "./buttonStyle.css";
import imageDown from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";
import { projectsData } from "../data/allProjectsData";

const AllProjects = () => {

  return (
    <div className="font-roboto-condensed min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-20">
        <h2 className="text-3xl uppercase tracking-wide py-3 text-center">
          All Projects
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-10">
          {projectsData.map((item) => (
            <Link
              to={item.redirect}
              state={item}
              key={item.id}
              className="flex flex-col gap-0.5"
            >
              <img
                src={item.imgUrl}
                className="max-w-sm transition-all hover:scale-105 cursor-pointer"
              />
              <h5 className="text-red-600 font-semibold tracking-wider mt-1">
                {item.sector}
              </h5>
              <p className="text-gray-400 text-xs">{item.headline}</p>
              <h5 className="text-lg font-semibold tracking-wider">
                {item.venue}
              </h5>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center pt-10">
          <button className="button-48 py-10">
            <span className="text">LOAD MORE</span>
          </button>
        </div>
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
    </div>
  );
};

export default AllProjects;
