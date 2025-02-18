import Cheif from "../components/Cheif";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/ourWorkImages/image1.jpg";
import image2 from "../assets/ourWorkImages/image2.jpg";
import { Link } from "react-router-dom";
import image11 from "../assets/SliderAreaImages/image1.jpg";

const WorkPage = () => {
  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"Our Work"}
        normalLine={"Most Reliable Infrastructure"}
      />
      <Cheif />
      <div className="py-10 bg-gray-900">
        <div className="flex items-center relative">
          <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="p-5 md:p-20">
              <img
                src={image2}
                alt="Collaborative Partner"
                className="w-full h-full object-cover shadow"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-screen-md h-full">
              <div className="h-full text-white p-8 md:rounded-lg flex flex-col items-center justify-center">
                <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
                  MARKETS WE SERVE NATIONALLY
                </h3>
                <p className="font-light text-xl max-w-screen-sm tracking-wider text-center py-8">
                  We are deeply committed to the communities we serve,
                  recognizing that our work goes beyond construction—it’s about
                  building connections, fostering growth, and creating lasting
                  positive impacts. Every project we undertake is driven by the
                  belief that strong communities are the foundation of a
                  thriving society. We actively engage with local stakeholders,
                  invest in sustainable practices, and support initiatives that
                  enhance the well-being of the people around us. From creating
                  job opportunities to supporting community programs, our goal
                  is to leave a legacy of progress and prosperity. Together, we
                  strive to build not just structures, but resilient, inclusive,
                  and vibrant communities for generations to come.
                </p>
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
