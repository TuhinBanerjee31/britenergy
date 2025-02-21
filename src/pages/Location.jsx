import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/locationImages/image1.jpg";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import image2 from "../assets/locationImages/image2.jpg";
import image3 from "../assets/locationImages/image3.jpg";
import image4 from "../assets/locationImages/image4.jpg";
import image5 from "../assets/locationImages/image5.jpg";
import image6 from "../assets/locationImages/image6.jpg";
import image7 from "../assets/locationImages/image7.jpg";
import image8 from "../assets/locationImages/image8.jpg";
import image9 from "../assets/locationImages/image9.jpg";
import image10 from "../assets/locationImages/image10.jpg";
import image12 from "../assets/locationImages/image12.jpg";
import image13 from "../assets/locationImages/image13.jpg";
import image14 from "../assets/locationImages/image14.jpg";
import image15 from "../assets/locationImages/image15.jpg";
import image16 from "../assets/locationImages/image16.jpg";
import image17 from "../assets/locationImages/image17.jpg";
import image18 from "../assets/locationImages/image18.jpg";
import image19 from "../assets/locationImages/image19.jpg";
import image20 from "../assets/locationImages/image20.jpg";
import image21 from "../assets/locationImages/image21.jpg";
import image22 from "../assets/locationImages/image22.jpg";
import image23 from "../assets/locationImages/image23.jpg";
import image24 from "../assets/locationImages/image24.jpg";
import image25 from "../assets/locationImages/image25.jpg";
import image26 from "../assets/locationImages/image26.jpg";
import image27 from "../assets/locationImages/image27.jpg";
import image28 from "../assets/locationImages/image28.jpg";

const Location = () => {
  const asia = [
    {
      id: 1,
      state: "Visakhapatnam, India",
      office1: image2,
      office2: image3,
      address:
        "KPNG Office, 1st Floor, HMDA Complex, Dwaraka Nagar, Main Road, Visakhapatnam, Andhra Pradesh, 530016, India",
    },
    {
      id: 2,
      state: "Singapore, Singapore",
      office1: image4,
      office2: image5,
      address:
        "KPNG Office, 1 Raffles Place, #14-05, One Raffles Place, Singapore 048616",
    },
    {
      id: 3,
      state: "Shanghai, China",
      office1: image6,
      office2: image7,
      address:
        "KPNG Office, 5th Floor, The Center, 989 Changle Road, Xuhui District, Shanghai, 200031, China",
    },
    {
      id: 4,
      state: "Moscow, Russia",
      office1: image8,
      office2: image9,
      address:
        "KPNG Office, 10th Floor, Business Center 'Vernadsky', 15 Vernadskogo Avenue, Moscow, 119602, Russia",
    },
  ];

  const europe = [
    {
      id: 1,
      state: "London, United Kingdom",
      office1: image10,
      office2: image12,
      address:
        "KPNG Office, 4th Floor, 70 Gracechurch Street, London, EC3V 0HR, United Kingdom",
    },
    {
      id: 2,
      state: "Berlin, Germany",
      office1: image13,
      office2: image14,
      address:
        "KPNG Office, 3rd Floor, Potsdamer Platz 10, 10785 Berlin, Germany",
    },
    {
      id: 3,
      state: "Paris, France",
      office1: image15,
      office2: image16,
      address: "KPNG Office, 33 Rue de la Bourse, 75002 Paris, France",
    },
  ];

  const northAmerica = [
    {
      id: 1,
      state: "New York City, United States",
      office1: image17,
      office2: image18,
      address:
        "KPNG Office, 7th Floor, 285 Madison Avenue, New York, NY 10017, United States",
    },
    {
      id: 2,
      state: "Toronto, Canada",
      office1: image19,
      office2: image20,
      address:
        "KPNG Office, Suite 500, 123 Front Street West, Toronto, ON M5J 2M2, Canada",
    },
    {
      id: 3,
      state: "Los Angeles, United States",
      office1: image21,
      office2: image22,
      address:
        "KPNG Office, Suite 400, 1000 Wilshire Blvd, Los Angeles, CA 90017, United States",
    },
  ];

  const africa = [
    {
      id: 1,
      state: "Johannesburg, South Africa",
      office1: image23,
      office2: image24,
      address:
        "KPNG Office, 5th Floor, The Campus, 57 Sloane Street, Bryanston, Johannesburg, 2191, South Africa",
    },
  ];

  const southAmerica = [
    {
      id: 1,
      state: "São Paulo, Brazil",
      office1: image25,
      office2: image26,
      address:
        "KPNG Office, Avenida Paulista, 1234, 5th Floor, Bela Vista, São Paulo, SP, 01310-100, Brazil",
    },
    {
      id: 2,
      state: "Buenos Aires, Argentina",
      office1: image27,
      office2: image28,
      address:
        "KPNG Office, Avenida 9 de Julio, 800, 12th Floor, Retiro, Buenos Aires, C1009AAQ, Argentina",
    },
  ];

  const continents = { asia, europe, northAmerica, africa, southAmerica };

  const [data, setData] = useState(asia);
  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState("asia"); // Track active tab

  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const handleContinentChange = (continent, key) => {
    event.preventDefault();
    if (data !== continent) {
      setData(continent);
      setActiveTab(key); // Set the active tab
      setOpenItem(null); // Reset the open accordion item when switching continents
    }
  };

  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine="Our Offices"
        normalLine="Landmarks across the globe"
      />
      <div className="min-h-screen bg-gray-50 font-roboto-condensed pt-10 md:pt-20">
        {/* Continent Tabs */}
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg mx-auto px-4 text-lg md:text-xl font-semibold text-[#174e75] mb-8 md:mb-12">
          {Object.keys(continents).map((key) => (
            <button
              key={key}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 ${
                activeTab === key
                  ? "bg-[#111827] text-white shadow-lg"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => handleContinentChange(continents[key], key)}
            >
              {key === "northAmerica" || key === "southAmerica"
                ? key
                    .replace(/([A-Z])/g, " $1") // Add space before capital letters
                    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-screen-lg mx-auto px-4">
          {data.map((item) => (
            <div key={item.id} className="mb-4">
              <h2 id={`accordion-heading-${item.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  aria-expanded={openItem === item.id}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="text-lg md:text-xl font-medium text-[#102a41]">
                    {item.state}
                  </span>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? "max-h-[500px]" : "max-h-0"
                }`}
                aria-labelledby={`accordion-heading-${item.id}`}
              >
                <div className="p-4 md:p-6 bg-gray-100 rounded-b-lg flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-center md:justify-around items-center">
                  <p className="text-gray-600 max-w-sm text-base md:text-lg">
                    {item.address}
                  </p>
                  <div className="flex gap-2">
                    <img src={item.office1} className="h-28 w-auto" />
                    <img src={item.office2} className="h-28 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Location;
