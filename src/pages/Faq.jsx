import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/faqImages/image1.jpg";
import Accordion from "../components/Accordion";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"Clearing out queries"}
        normalLine={"THE BEST WAY TO THE BEST OUTCOMES"}
      />
      <div className="min-h-screen bg-[#f2f8fd] font-roboto-condensed py-10">
        <div className="w-full flex flex-col justify-center items-center px-5 py-20">
          <h3 className="font-light text-5xl md:text-7xl text-center">
            Frequently Asked Questions (FAQ)
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            Welcome to our FAQ section! We’ve compiled answers to some of the
            most common questions about our services, processes, and operations.
            If you have a question that’s not listed here, feel free to contact
            us.
          </p>
        </div>

        <Accordion />

        <div className="flex items-center relative py-24">
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
      </div>
      <Footer />
    </>
  );
};

export default Faq;
