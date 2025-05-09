import { ArrowRight } from "lucide-react";
import image1 from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";
import { articles3 } from "../data/articleData";

const SliderArea = () => {
  const featured = articles3[0];

  return (
    <div className="font-roboto-condensed min-h-screen bg-[#f2f8fd] pt-10">
      <div className="h-full w-full flex flex-col justify-center items-center p-5 md:py-20">
        <h1 className="font-norma text-5xl md:text-7xl">Solving Problems</h1>
        <h3 className="font-light text-5xl md:text-7xl">Before They Happen</h3>
        <p className="font-light text-xl md:text-2xl max-w-screen-sm tracking-wider text-center py-5">
          We combine expertise, process innovation and technology into services
          that proactively identify and address challenges — saving time and
          money on every project.
        </p>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src={featured.image}
              alt="Featured"
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Featured Story
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 line-clamp-3">
                  {featured.excerpt}
                </p>
                <Link
                  to={featured.redirect}
                  state={featured}
                  className="inline-flex items-center text-white bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to={"/newsroom"} className="button-48 py-10 ">
            <span className="text">VISIT OUR NEWSROOM</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center relative py-20">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={image1}
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

export default SliderArea;
