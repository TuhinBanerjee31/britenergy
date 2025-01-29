import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/locationImages/image1.jpg";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Location = () => {
  const asia = [
    {
      id: 1,
      state: "Visakhapatnam, India",
      address:
        "KPNG Office, 1st Floor, HMDA Complex, Dwaraka Nagar, Main Road, Visakhapatnam, Andhra Pradesh, 530016, India",
    },
    {
      id: 2,
      state: "Singapore, Singapore",
      address:
        "KPNG Office, 1 Raffles Place, #14-05, One Raffles Place, Singapore 048616",
    },
    {
      id: 3,
      state: "Shanghai, China",
      address:
        "KPNG Office, 5th Floor, The Center, 989 Changle Road, Xuhui District, Shanghai, 200031, China",
    },
    {
      id: 4,
      state: "Moscow, Russia",
      address:
        "KPNG Office, 10th Floor, Business Center 'Vernadsky', 15 Vernadskogo Avenue, Moscow, 119602, Russia",
    },
  ];

  const europe = [
    {
      id: 1,
      state: "London, United Kingdom",
      address:
        "KPNG Office, 4th Floor, 70 Gracechurch Street, London, EC3V 0HR, United Kingdom",
    },
    {
      id: 2,
      state: "Berlin, Germany",
      address:
        "KPNG Office, 3rd Floor, Potsdamer Platz 10, 10785 Berlin, Germany",
    },
    {
      id: 3,
      state: "Paris, France",
      address: "KPNG Office, 33 Rue de la Bourse, 75002 Paris, France",
    },
  ];

  const northAmerica = [
    {
      id: 1,
      state: "New York City, United States",
      address:
        "KPNG Office, 7th Floor, 285 Madison Avenue, New York, NY 10017, United States",
    },
    {
      id: 2,
      state: "Toronto, Canada",
      address:
        "KPNG Office, Suite 500, 123 Front Street West, Toronto, ON M5J 2M2, Canada",
    },
    {
      id: 3,
      state: "Los Angeles, United States",
      address:
        "KPNG Office, Suite 400, 1000 Wilshire Blvd, Los Angeles, CA 90017, United States",
    },
  ];

  const africa = [
    {
      id: 1,
      state: "Johannesburg, South Africa",
      address:
        "KPNG Office, 5th Floor, The Campus, 57 Sloane Street, Bryanston, Johannesburg, 2191, South Africa",
    },
  ];

  const southAmerica = [
    {
      id: 1,
      state: "São Paulo, Brazil",
      address:
        "KPNG Office, Avenida Paulista, 1234, 5th Floor, Bela Vista, São Paulo, SP, 01310-100, Brazil",
    },
    {
      id: 2,
      state: "Buenos Aires, Argentina",
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
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg mx-auto px-4 text-lg md:text-xl font-semibold text-gray-700 mb-8 md:mb-12">
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
        <div className="max-w-2xl mx-auto px-4">
          {data.map((item) => (
            <div key={item.id} className="mb-4">
              <h2 id={`accordion-heading-${item.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  aria-expanded={openItem === item.id}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900">
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
                <div className="p-4 md:p-6 bg-gray-100 rounded-b-lg">
                  <p className="text-gray-600 max-w-sm text-base md:text-lg">
                    {item.address}
                  </p>
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

export default Location;
