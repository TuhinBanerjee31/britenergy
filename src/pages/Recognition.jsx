import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/recognitionImages/image1.jpg";
import image2 from "../assets/recognitionImages/image2.jpg";
import CertifacteCard from "../components/CertifacteCard";
import { TrophyIcon } from "@heroicons/react/24/outline";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const Recognition = () => {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      desc: "Certified for Quality Management Systems, ensuring top-notch service delivery and operational excellence.",
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      desc: "Recognized for our commitment to environmental management and sustainable practices.",
    },
    {
      id: 3,
      title: "ISO 45001:2018",
      desc: "Certified for Occupational Health and Safety Management, ensuring the well-being of our workforce.",
    },
    {
      id: 4,
      title: "LEED Certification",
      desc: "Multiple projects certified for leadership in energy and environmental design.",
    },
    {
      id: 5,
      title: "BREEAM Certification",
      desc: "Achieving excellence in sustainability for large-scale infrastructure projects.",
    },
    {
      id: 6,
      title: "PMI Standards Compliance",
      desc: "Adherence to global project management standards set by the Project Management Institute (PMI).",
    },
    {
      id: 7,
      title: "Green Building Certification",
      desc: " Recognized for implementing environmentally sustainable construction practices.",
    },
    {
      id: 8,
      title: "Energy Star Certification",
      desc: "For developing energy-efficient systems in power and infrastructure projects.",
    },
  ];

  const awards = [
    {
      id: 1,
      award: "Global Infrastructure Excellence Award",
      year: 2022,
      description:
        "For completing a state-of-the-art smart city project in Asia.",
    },
    {
      id: 2,
      award: "Sustainability Leadership Award",
      year: 2021,
      description:
        "Awarded for outstanding contributions to renewable energy solutions in South America.",
    },
    {
      id: 3,
      award: "International Construction Innovation Award",
      year: 2020,
      description:
        "Recognized for innovative construction techniques implemented in the UAE.",
    },
    {
      id: 4,
      award: "Best Renewable Energy Project",
      year: 2019,
      description:
        "Honored for the successful completion of a large-scale solar park in Africa.",
    },
    {
      id: 5,
      award: "World Smart City Award",
      year: 2018,
      description:
        "For introducing IoT-enabled smart city solutions in Europe.",
    },
    {
      id: 6,
      award: "Excellence in Project Management Award",
      year: 2017,
      description:
        "Celebrated for our streamlined execution of large-scale infrastructure projects globally.",
    },
    {
      id: 7,
      award: "Green Infrastructure Pioneer Award",
      year: 2016,
      description:
        "Acknowledged for our leadership in eco-friendly construction practices.",
    },
    {
      id: 8,
      award: "Best Employer in Infrastructure Sector",
      year: 2015,
      description:
        "Recognized for our commitment to employee development and workplace safety.",
    },
    {
      id: 9,
      award: "Top Innovator in Energy Solutions",
      year: 2014,
      description:
        "For introducing breakthrough technologies in renewable energy systems.",
    },
    {
      id: 10,
      award: "Global Visionary Leadership Award",
      year: 2013,
      description:
        "Awarded to our CEO for outstanding leadership and visionary growth strategies.",
    },
  ];

  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"Recognizing Excellence"}
        normalLine={"In Innovation, Quality, and Sustainability"}
      />
      <div className="min-h-screen bg-[#EBEBEB] font-roboto-condensed py-10">
        <div className="min-h-[70vh] w-full flex flex-col justify-center items-center px-5">
          <h1 className="font-light text-5xl md:text-7xl text-center">
            <span className="font-normal">MARK OF BRILLIANCE</span>
          </h1>
          <h3 className="font-light text-5xl md:text-7xl text-center">
            TRUST STARTS WITH GREAT QAULITY
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            At KPNG, our unwavering commitment to delivering world-class
            solutions has been acknowledged through prestigious certifications
            and awards. These accolades reflect our dedication to excellence,
            innovation, and sustainability in every project we undertake. Our
            certifications are a testament to our adherence to the highest
            industry standards and global best practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-5 px-5 pb-40">
          {certificates.map((item) => (
            <div key={item.id}>
              <CertifacteCard data={item} />
            </div>
          ))}
        </div>

        <div
          className="min-h-[60vh] w-full flex flex-col justify-center items-center text-white px-5"
          style={{
            backgroundImage: "url(" + image2 + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
            A Promise of Excellence
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            At KPNG, these certifications and awards are more than just
            achievements—they represent our promise to continue innovating,
            delivering exceptional results, and building a sustainable future.
            Want to know more about our certified projects? Contact Us today!
          </p>
        </div>

        <div className="min-h-[70vh] w-full flex flex-col justify-center items-center px-5 py-20">
          <h1 className="font-light text-5xl md:text-7xl text-center uppercase">
            <span className="font-normal">Awards</span>
          </h1>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            Our achievements have been celebrated by industry leaders and global
            organizations. Here are some of the most prestigious awards we’ve
            received:
          </p>

          <div className="min-h-screen flex flex-wrap justify-around items-center gap-10 px-8">
            {awards.map((item) => (
              <div key={item.id}>
                <TrophyIcon class="h-12 w-12 text-yellow-700" />
                <h4 className="text-lg font-semibold tracking-wider">
                  {item.award}
                </h4>
                <p className="max-w-xs tracking-wider">{item.description}</p>
                <p className="text-gray-500">{item.year}</p>
              </div>
            ))}
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
      </div>
      <Footer />
    </>
  );
};

export default Recognition;
