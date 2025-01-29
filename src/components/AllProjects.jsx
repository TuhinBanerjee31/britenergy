import "./buttonStyle.css";
import image1 from "../assets/allProjectImages/image1.jpg";
import image2 from "../assets/allProjectImages/image2.jpg";
import image3 from "../assets/allProjectImages/image3.jpg";
import image4 from "../assets/allProjectImages/image4.jpg";
import image5 from "../assets/allProjectImages/image5.jpg";
import image6 from "../assets/allProjectImages/image6.jpg";
import image7 from "../assets/allProjectImages/image7.jpg";
import image9 from "../assets/allProjectImages/image9.jpg";
import image10 from "../assets/allProjectImages/image10.jpg";
import image11 from "../assets/allProjectImages/image11.jpg";
import image12 from "../assets/allProjectImages/image12.jpg";
import image13 from "../assets/allProjectImages/image13.jpg";
import image14 from "../assets/allProjectImages/image14.jpg";
import image15 from "../assets/allProjectImages/image15.jpg";
import image16 from "../assets/allProjectImages/image16.jpg";
import image17 from "../assets/allProjectImages/image17.jpg";
import image18 from "../assets/allProjectImages/image18.jpg";
import image19 from "../assets/allProjectImages/image19.jpg";
import image20 from "../assets/allProjectImages/image20.jpg";
import image21 from "../assets/allProjectImages/image21.jpg";
import image22 from "../assets/allProjectImages/image22.jpg";
import image23 from "../assets/allProjectImages/image23.jpg";
import image24 from "../assets/allProjectImages/image24.jpg";
import image25 from "../assets/allProjectImages/image25.jpg";
import image26 from "../assets/allProjectImages/image26.jpg";
import image27 from "../assets/allProjectImages/image27.jpg";
import image28 from "../assets/allProjectImages/image28.jpg";
import image29 from "../assets/allProjectImages/image29.jpg";
import image30 from "../assets/allProjectImages/image30.jpg";
import imageDown from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const projectsData = [
    {
      id: 1,
      imgUrl: image1,
      sector: "Building",
      venue: "Skyscraper Development, New York",
      headline: "Reaching New Heights: Skyscraper Development in NYC",
    },
    {
      id: 2,
      imgUrl: image2,
      sector: "Energy",
      venue: "Solar Power Plant, California",
      headline: "Harnessing the Sun: California's Solar Power Revolution",
    },
    {
      id: 3,
      imgUrl: image3,
      sector: "Construction",
      venue: "Bridge Construction, Sydney",
      headline: "Connecting Horizons: Iconic Bridge Project in Sydney",
    },
    {
      id: 4,
      imgUrl: image4,
      sector: "Energy",
      venue: "Hydroelectric Dam, Colorado",
      headline: "Powering the Future: Hydroelectric Energy in Colorado",
    },
    {
      id: 5,
      imgUrl: image5,
      sector: "Building",
      venue: "Smart City Initiative, Singapore",
      headline: "Living the Future: Singapore's Smart City Transformation",
    },
    {
      id: 6,
      imgUrl: image6,
      sector: "Construction",
      venue: "Tunnel Excavation Project, Switzerland",
      headline: "Breaking Barriers: Switzerland's Underground Innovation",
    },
    {
      id: 7,
      imgUrl: image7,
      sector: "Energy",
      venue: "Offshore Wind Farm, Denmark",
      headline: "Winds of Change: Denmark's Offshore Energy Pioneer",
    },
    {
      id: 9,
      imgUrl: image9,
      sector: "Construction",
      venue: "Highway Expansion, Mumbai",
      headline: "Expanding Horizons: Mumbai's Highway Development",
    },
    {
      id: 10,
      imgUrl: image10,
      sector: "Energy",
      venue: "Biogas Plant, Germany",
      headline: "Green Energy Revolution: Germany's Biogas Breakthrough",
    },
    {
      id: 11,
      imgUrl: image11,
      sector: "Transportation",
      venue: "Riyadh Metro, Saudi Arabia",
      headline: "Transforming Connectivity: Riyadh Metro Development",
    },
    {
      id: 12,
      imgUrl: image12,
      sector: "Transportation",
      venue: "Haramain High-Speed Railway, Saudi Arabia",
      headline: "Speeding Through History: Haramain High-Speed Railway",
    },
    {
      id: 13,
      imgUrl: image13,
      sector: "Aviation",
      venue: "King Abdulaziz International Airport, Saudi Arabia",
      headline: "Soaring High: King Abdulaziz International Airport Expansion",
    },
    {
      id: 14,
      imgUrl: image14,
      sector: "Building",
      venue: "Kingdom Tower, Saudi Arabia",
      headline: "Reaching the Sky: Advanced Systems for Kingdom Tower",
    },
    {
      id: 15,
      imgUrl: image15,
      sector: "Urban Development",
      venue: "Jeddah Economic City, Saudi Arabia",
      headline: "Building the Future: Jeddah Economic City Development",
    },
    {
      id: 16,
      imgUrl: image16,
      sector: "Urban Development",
      venue: "Lumina Smart City, Singapore",
      headline: "Living the Future: Sustainable Solutions in Lumina Smart City",
    },
    {
      id: 17,
      imgUrl: image17,
      sector: "Logistics",
      venue: "Bharat Mumbai Container Terminals, India",
      headline: "Smooth Sailing: Advanced Systems for BMCT",
    },
    {
      id: 18,
      imgUrl: image18,
      sector: "Logistics",
      venue: "Mundra Port Expansion, India",
      headline: "Expanding Trade: Infrastructure Upgrades at Mundra Port",
    },
    {
      id: 19,
      imgUrl: image19,
      sector: "Manufacturing",
      venue: "Tata Steel Plant, India",
      headline: "Forging Ahead: Modernizing Tata Steel Plant",
    },
    {
      id: 20,
      imgUrl: image20,
      sector: "Transportation",
      venue: "Kolkata East-West Metro Corridor, India",
      headline: "Connecting Communities: Kolkata's Metro Expansion",
    },
    {
      id: 21,
      imgUrl: image21,
      sector: "Exposition",
      venue: "Dubai Expo 2020, UAE",
      headline: "Sustainable Showcase: Infrastructure at Dubai Expo 2020",
    },
    {
      id: 22,
      imgUrl: image22,
      sector: "Energy",
      venue: "Singareni Collieries Power Plant, India",
      headline: "Powering Progress: Renewable Energy Solutions in Singareni",
    },
    {
      id: 23,
      imgUrl: image23,
      sector: "Transportation",
      venue: "Rio de Janeiro Light Rail, Brazil",
      headline: "Rails of Change: Sustainable Light Rail in Rio",
    },
    {
      id: 24,
      imgUrl: image24,
      sector: "Transportation",
      venue: "Melbourne Metro Tunnel, Australia",
      headline: "Tunnel Vision: Melbourne's Metro Infrastructure",
    },
    {
      id: 25,
      imgUrl: image25,
      sector: "Transportation",
      venue: "Gautrain Expansion, South Africa",
      headline: "Driving Innovation: Gautrain's Advanced Expansion",
    },
    {
      id: 26,
      imgUrl: image26,
      sector: "Transportation",
      venue: "Hong Kong-Zhuhai-Macau Bridge, China",
      headline: "Bridging Cities: Monumental Infrastructure Achievement",
    },
    {
      id: 27,
      imgUrl: image27,
      sector: "Aviation",
      venue: "New Istanbul Airport, Turkey",
      headline: "Flying High: Powering New Istanbul Airport",
    },
    {
      id: 28,
      imgUrl: image28,
      sector: "Transportation",
      venue: "Lagos Light Rail, Nigeria",
      headline: "Urban Mobility: Advancing Lagos Light Rail",
    },
    {
      id: 29,
      imgUrl: image29,
      sector: "Logistics",
      venue: "Panama Canal Expansion, Panama",
      headline: "Gateway to the World: Panama Canal Expansion",
    },
    {
      id: 30,
      imgUrl: image30,
      sector: "Transportation",
      venue: "London Crossrail, UK",
      headline: "Revolutionizing Transit: London Crossrail Project",
    },
  ];

  return (
    <div className="font-roboto-condensed min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-20">
        <h2 className="text-3xl uppercase tracking-wide py-3 text-center">
          All Projects
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-10">
          {projectsData.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <img
                src={item.imgUrl}
                className="max-w-sm transition-all hover:scale-105 cursor-pointer"
              />
              <h5 className="text-red-600 font-semibold tracking-wider">
                {item.sector}
              </h5>
              <p className="">{item.headline}</p>
              <h5 className="text-gray-400 font-semibold tracking-wider">
                {item.venue}
              </h5>
            </div>
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
  );
};

export default AllProjects;
