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
import image11 from "../assets/SliderAreaImages/image1.jpg"

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
              <img src={item.imgUrl} className="max-w-sm transition-all hover:scale-105 cursor-pointer" />
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
                <button className="button-48 py-10">
                  <span className="text">CONTACT US</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
