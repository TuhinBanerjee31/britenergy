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
    // {
    //   id: 1,
    //   imgUrl: image1,
    //   sector: "Building",
    //   venue: "Skyscraper Development, New York",
    //   headline: "Reaching New Heights: Skyscraper Development in NYC",
    // },
    // {
    //   id: 2,
    //   imgUrl: image2,
    //   sector: "Energy",
    //   venue: "Solar Power Plant, California",
    //   headline: "Harnessing the Sun: California's Solar Power Revolution",
    // },
    // {
    //   id: 3,
    //   imgUrl: image3,
    //   sector: "Construction",
    //   venue: "Bridge Construction, Sydney",
    //   headline: "Connecting Horizons: Iconic Bridge Project in Sydney",
    // },
    // {
    //   id: 4,
    //   imgUrl: image4,
    //   sector: "Energy",
    //   venue: "Hydroelectric Dam, Colorado",
    //   headline: "Powering the Future: Hydroelectric Energy in Colorado",
    // },
    // {
    //   id: 5,
    //   imgUrl: image5,
    //   sector: "Building",
    //   venue: "Smart City Initiative, Singapore",
    //   headline: "Living the Future: Singapore's Smart City Transformation",
    // },
    // {
    //   id: 6,
    //   imgUrl: image6,
    //   sector: "Construction",
    //   venue: "Tunnel Excavation Project, Switzerland",
    //   headline: "Breaking Barriers: Switzerland's Underground Innovation",
    // },
    // {
    //   id: 7,
    //   imgUrl: image7,
    //   sector: "Energy",
    //   venue: "Offshore Wind Farm, Denmark",
    //   headline: "Winds of Change: Denmark's Offshore Energy Pioneer",
    // },
    // {
    //   id: 9,
    //   imgUrl: image9,
    //   sector: "Construction",
    //   venue: "Highway Expansion, Mumbai",
    //   headline: "Expanding Horizons: Mumbai's Highway Development",
    // },
    // {
    //   id: 10,
    //   imgUrl: image10,
    //   sector: "Energy",
    //   venue: "Biogas Plant, Germany",
    //   headline: "Green Energy Revolution: Germany's Biogas Breakthrough",
    // },
    {
      id: 11,
      imgUrl: image11,
      sector: "Transportation",
      venue: "Riyadh Metro, Saudi Arabia",
      headline: "Transforming Connectivity: Riyadh Metro Development",
      redirect: "/our-impact/riyadh-metro",
      desc: "KPNG contributed to the successful completion of the Riyadh Metro project, which includes the development of a world-class metro system in the capital. The project has significantly improved public transportation and connectivity across the city, with advanced network infrastructure and energy systems built by KPNG.",
    },
    {
      id: 12,
      imgUrl: image12,
      sector: "Transportation",
      venue: "Haramain High-Speed Railway, Saudi Arabia",
      headline: "Speeding Through History: Haramain High-Speed Railway",
      redirect: "/our-impact/haramain-railway",
      desc: "KPNG played a key role in the Haramain High-Speed Railway, connecting the holy cities of Mecca and Medina. The project involved high-tech signaling systems, energy-efficient infrastructure, and cutting-edge rail systems, with KPNG delivering the necessary power and network infrastructure."
    },
    {
      id: 13,
      imgUrl: image13,
      sector: "Aviation",
      venue: "King Abdulaziz International Airport, Saudi Arabia",
      headline: "Soaring High: King Abdulaziz International Airport Expansion",
      redirect: "/our-impact/king-abdulaziz-airport",
      desc: "KPNG was involved in the expansion of King Abdulaziz International Airport in Jeddah, one of the largest airports in the region. The project included the construction of new terminals, power systems, and network infrastructure to accommodate the increasing number of passengers and flights."
    },
    {
      id: 14,
      imgUrl: image14,
      sector: "Building",
      venue: "Kingdom Tower, Saudi Arabia",
      headline: "Reaching the Sky: Advanced Systems for Kingdom Tower",
      redirect: "/our-impact/kingdom-tower",
      desc: "KPNG provided advanced infrastructure and power systems for the Kingdom Tower in Riyadh. This landmark skyscraper, which includes office spaces, hotels, and retail centers, benefited from KPNG’s expertise in high-rise construction and sustainable energy solutions."
    },
    {
      id: 15,
      imgUrl: image15,
      sector: "Urban Development",
      venue: "Jeddah Economic City, Saudi Arabia",
      headline: "Building the Future: Jeddah Economic City Development",
      redirect: "/our-impact/jeddah-economic-city",
      desc: "KPNG was a key contributor to the Jeddah Economic City project, which aimed to create a modern urban hub in the region. The development included residential, commercial, and retail spaces, as well as the infrastructure for power systems, water management, and network solutions to support the city’s growth."
    },
    {
      id: 16,
      imgUrl: image16,
      sector: "Urban Development",
      venue: "Lumina Smart City, Singapore",
      headline: "Living the Future: Sustainable Solutions in Lumina Smart City",
      redirect: "/our-impact/lumina-smart-city",
      desc: "KPNG was responsible for the energy systems and smart infrastructure solutions in this fully solar powered city, setting a global benchmark for sustainable urban development. "
    },
    {
      id: 17,
      imgUrl: image17,
      sector: "Logistics",
      venue: "Bharat Mumbai Container Terminals, India",
      headline: "Smooth Sailing: Advanced Systems for BMCT",
      redirect: "/our-impact/mumbai-container-terminals",
      desc: "KPNG contributed to the development of BMCT, India’s largest container terminal, providing network infrastructure and advanced power systems to facilitate seamless logistics."
    },
    {
      id: 18,
      imgUrl: image18,
      sector: "Logistics",
      venue: "Mundra Port Expansion, India",
      headline: "Expanding Trade: Infrastructure Upgrades at Mundra Port",
      redirect: "/our-impact/mundra-port-expansion",
      desc: "KPNG played a key role in the expansion of India’s largest commercial port, providing power systems and network infrastructure to accommodate increased cargo capacity."
    },
    {
      id: 19,
      imgUrl: image19,
      sector: "Manufacturing",
      venue: "Tata Steel Plant, India",
      headline: "Forging Ahead: Modernizing Tata Steel Plant",
      redirect: "/our-impact/tata-steel-plant",
      desc: "KPNG was involved in modernizing the Tata Steel Plant, upgrading power systems and integrating smart technologies for a more efficient and eco-friendly production process."
    },
    {
      id: 20,
      imgUrl: image20,
      sector: "Transportation",
      venue: "Kolkata East-West Metro Corridor, India",
      headline: "Connecting Communities: Kolkata's Metro Expansion",
      redirect: "/our-impact/east-west-metro-corridor",
      desc: "KPNG supported the power infrastructure and network systems of the East-West Metro Corridor, improving public transportation and urban connectivity in Kolkata. "
    },
    {
      id: 21,
      imgUrl: image21,
      sector: "Exposition",
      venue: "Dubai Expo 2020, UAE",
      headline: "Sustainable Showcase: Infrastructure at Dubai Expo 2020",
      redirect: "/our-impact/dubai-expo",
      desc: "KPNG played a significant role in the development of sustainable infrastructure and power systems at Expo 2020, contributing to the world’s first carbon-neutral Expo."
    },
    {
      id: 22,
      imgUrl: image22,
      sector: "Energy",
      venue: "Singareni Collieries Power Plant, India",
      headline: "Powering Progress: Renewable Energy Solutions in Singareni",
      redirect: "/our-impact/singareni-collieries-power-plant",
      desc: "KPNG provided renewable energy solutions and integrated grid systems for the Singareni Collieries Power Plant, one of India’s major coal-based power generation facilities. "
    },
    {
      id: 23,
      imgUrl: image23,
      sector: "Transportation",
      venue: "Rio de Janeiro Light Rail, Brazil",
      headline: "Rails of Change: Sustainable Light Rail in Rio",
      redirect: "/our-impact/rio-de-janeiro-light-rail",
      desc: "KPNG was responsible for integrating advanced network systems and power infrastructure for the light rail system in Rio de Janeiro, contributing to the city's sustainable public transportation network."
    },
    {
      id: 24,
      imgUrl: image24,
      sector: "Transportation",
      venue: "Melbourne Metro Tunnel, Australia",
      headline: "Tunnel Vision: Melbourne's Metro Infrastructure",
      redirect: "/our-impact/melbourne-metro-tunnel",
      desc: "KPNG contributed to the power and network infrastructure of the Melbourne Metro Tunnel, one of the largest and most complex transport projects in Australia."
    },
    {
      id: 25,
      imgUrl: image25,
      sector: "Transportation",
      venue: "Gautrain Expansion, South Africa",
      headline: "Driving Innovation: Gautrain's Advanced Expansion",
      redirect: "/our-impact/gautrain-expansion",
      desc: "KPNG was part of the team enhancing the Gautrain system, providing smart power solutions and advanced network integration for improved public transportation in the greater Johannesburg area."
    },
    {
      id: 26,
      imgUrl: image26,
      sector: "Transportation",
      venue: "Hong Kong Zhuhai-Macau Bridge, China",
      headline: "Bridging Cities: Monumental Infrastructure Achievement",
      redirect: "/our-impact/zhuhai-macau-bridge",
      desc: "KPNG supported the construction of this monumental bridge, focusing on the power systems and network integration that enabled seamless transportation across three major cities."
    },
    {
      id: 27,
      imgUrl: image27,
      sector: "Aviation",
      venue: "New Istanbul Airport, Turkey",
      headline: "Flying High: Powering New Istanbul Airport",
      redirect: "/our-impact/new-istanbul-airport",
      desc: "KPNG played a critical role in the development of power systems and network infrastructure for the New Istanbul Airport, one of the world’s largest and busiest airports. "
    },
    {
      id: 28,
      imgUrl: image28,
      sector: "Transportation",
      venue: "Lagos Light Rail, Nigeria",
      headline: "Urban Mobility: Advancing Lagos Light Rail",
      redirect: "/our-impact/lagos-light-rail",
      desc: "KPNG provided power infrastructure and network systems for the Lagos Light Rail project, enhancing the city's transportation capacity and reducing traffic congestion. "
    },
    {
      id: 29,
      imgUrl: image29,
      sector: "Logistics",
      venue: "Panama Canal Expansion, Panama",
      headline: "Gateway to the World: Panama Canal Expansion",
      redirect: "/our-impact/panama-canal-expansion",
      desc: "KPNG contributed to the power and network infrastructure for the Panama Canal expansion, enabling it to accommodate larger vessels and improving global shipping operations."
    },
    {
      id: 30,
      imgUrl: image30,
      sector: "Transportation",
      venue: "London Crossrail, UK",
      headline: "Revolutionizing Transit: London Crossrail Project",
      redirect: "/our-impact/london-crossrail",
      desc: "KPNG provided essential power and network infrastructure for the London Crossrail, Europe’s largest infrastructure project, which improved transportation across the city."
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
            <Link to={item.redirect} state={item} key={item.id} className="flex flex-col gap-1">
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
