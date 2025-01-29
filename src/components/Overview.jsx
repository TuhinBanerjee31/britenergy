import "./buttonStyle.css";
import image1 from "../assets/overviewImages/image1.jpg";
import image2 from "../assets/overviewImages/image2.jpg";
import image3 from "../assets/overviewImages/image3.jpg";
import image4 from "../assets/overviewImages/image4.jpg";
import image5 from "../assets/overviewImages/image5.jpg";
import image6 from "../assets/overviewImages/image6.jpg";
import image7 from "../assets/overviewImages/image7.jpg";
import image8 from "../assets/overviewImages/image8.jpg";
import image9 from "../assets/overviewImages/image9.jpg";
import LazyImage from "./LazyImage";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="min-h-screen font-roboto-condensed bg-[#EBEBEB]">
      <div className="flex items-center p-8 md:p-32">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl text-gray-900">
              WE BUILD WITH PURPOSE
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-light text-gray-800 mt-2 md:mt-4">
              THIS IS WHAT DEFINES US
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-light text-gray-800 mt-2 md:mt-4">
              AND FUELS OUR PASSION
            </h2>
            <p className="text-gray-700 mt-4 md:mt-6 text-lg sm:text-2xl">
              We unite to conquer challenges and achieve the best outcomes for
              everyone we serve—clients, employees, communities, and families.
            </p>
            <div className="py-4">
              <Link to={'/about-us'} className="button-48 py-10">
                <span className="text-base">ABOUT KPNG</span>
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <LazyImage
              src={image1}
              alt="Construction worker"
              className="col-span-1"
            />
            <LazyImage
              src={image2}
              alt="Person in red attire"
              className="col-span-1"
            />
            <LazyImage
              src={image6}
              alt="Person in red attire"
              className="col-span-1"
            />

            {/* Row 2 */}
            <LazyImage
              src={image3}
              alt="Building exterior"
              className="col-span-2"
            />

            {/* Row 3 */}
            <LazyImage
              src={image4}
              alt="Dock construction"
              className="col-span-1"
            />
            <LazyImage
              src={image5}
              alt="Person presenting"
              className="col-span-1"
            />
            <LazyImage
              src={image7}
              alt="Person presenting"
              className="col-span-1"
            />
            <LazyImage
              src={image8}
              alt="Person presenting"
              className="col-span-1"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center relative md:pb-20">
        <div className="container mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <LazyImage
              src={image9}
              alt="Collaborative Partner"
              className="w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-lg right-0 top-[20%]">
            <div className="bg-gray-900 text-white p-8 md:rounded-l-lg flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                TRUSTED
              </h2>
              <h2 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-light mb-4">
                COLLABORATION
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                RESULTS THAT MATTER
              </h3>
              <p className="text-lg sm:text-xl mb-6">
                With a focus on safety, quality, innovation, and technology, we
                deliver certainty through progressive and reliable solutions
                tailored to your needs.
              </p>
              <div>
                <Link to={'/our-impact'} className="button-48 py-10">
                  <span className="text">OUR RESULTS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
