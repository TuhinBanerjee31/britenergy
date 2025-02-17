import image1 from "../assets/ourTeamImages/image1.jpg";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import TeamCards from "../components/TeamCards";
import image11 from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Omar Al-Rashid",
      title: "Chief Financial Officer (CFO)",
      imageUrl: "https://example.com/images/omar-al-rashid.jpg",
      responsibilities:
        "Oversees all financial operations, including budgeting, forecasting, and managing the investment strategy. Ensures financial stability and strategically invests in growth initiatives. Responsible for risk management and ensuring compliance with financial regulations across global operations.",
    },
    {
      id: 0,
      name: "Ahmed Raza Siddiqui",
      title: "Chief executive officer (CEO)",
      imageUrl: "https://example.com/images/omar-al-rashid.jpg",
      responsibilities:
        "CEO of KPNG, is a visionary leader in infrastructure and energy. With expertise in engineering and business, he drives strategic growth and innovation. Under his leadership, KPNG has expanded globally and strengthened industry partnerships. He is committed to excellence, efficiency, and future-ready solutions.",
    },
    {
      id: 2,
      name: "Yasser Al-Zahrani",
      title: "Chief Marketing Officer (CMO)",
      imageUrl: "https://example.com/images/yasser-al-zahrani.jpg",
      responsibilities:
        "Leads marketing and branding efforts, overseeing strategic marketing initiatives. Drives public relations strategies, digital marketing, and brand management. Enhances KPNG’s visibility and reputation in the power and infrastructure sector. Develops innovative campaigns to strengthen industry presence.",
    },
    {
      id: 3,
      name: "Rashid Al-Mansoori",
      title: "Chief Technology Officer (CTO)",
      imageUrl: "https://example.com/images/rashid-al-mansoori.jpg",
      responsibilities:
        "Manages technological innovations, strategy, and infrastructure development. Ensures integration of the latest technologies into projects to drive efficiency and sustainability. Keeps the company ahead of industry trends in infrastructure and energy sectors.",
    },
    {
      id: 4,
      name: "Claudia Rivera",
      title: "Vice President of Human Resources (VP, HR)",
      imageUrl: "https://example.com/images/claudia-rivera.jpg",
      responsibilities:
        "Manages employee relations, including recruitment, performance management, and talent development. Shapes company culture and fosters a positive work environment. Ensures attraction and retention of top talent to meet business objectives.",
    },
    {
      id: 5,
      name: "George White",
      title: "Vice President of Project Management",
      imageUrl: "https://example.com/images/george-white.jpg",
      responsibilities:
        "Leads project management division, ensuring execution and delivery of major projects. Ensures projects are completed on time, within budget, and to the highest quality standards. Collaborates with cross-functional teams to manage risks and ensure client satisfaction.",
    },
    {
      id: 6,
      name: "Olivia Brown",
      title: "Vice President of Legal Affairs",
      imageUrl: "https://example.com/images/olivia-brown.jpg",
      responsibilities:
        "Provides legal counsel and ensures compliance with international laws and regulations. Manages contracts, intellectual property, and dispute resolutions. Minimizes legal risks and supports expansion into new markets.",
    },
    {
      id: 7,
      name: "Michael Stevens",
      title: "Director of Energy Solutions",
      imageUrl: "https://example.com/images/michael-stevens.jpg",
      responsibilities:
        "Leads renewable energy projects, sustainable infrastructure, and power systems. Oversees development and implementation of green energy initiatives. Ensures KPNG contributes to sustainability while delivering innovative solutions.",
    },
    {
      id: 8,
      name: "Sarah Wilson",
      title: "Director of International Operations",
      imageUrl: "https://example.com/images/sarah-wilson.jpg",
      responsibilities:
        "Manages operations in different countries to ensure smooth global expansion. Works with local teams to optimize operations and navigate cultural differences. Ensures projects meet global standards and local requirements.",
    },
  ];

  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"Every Positive Impact"}
        normalLine={"Comes with Great People."}
      />
      <div className="min-h-screen bg-[#EBEBEB] font-roboto-condensed py-10">
        <div className="min-h-screen w-full flex flex-col justify-center items-center px-5">
          <h1 className="font-light text-5xl md:text-7xl text-center uppercase">
            <span className="font-normal">Our People</span>
          </h1>
          <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
            Our Biggest Advantage
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            Our employees are owners committed to the success of every
            stakeholder throughout the project life cycle. Each of us is
            empowered, and expected, to drive success for our clients and each
            other.
          </p>
        </div>

        <div className="min-h-screen w-full flex flex-col justify-center items-center px-5">
          <h1 className="font-light text-5xl md:text-7xl text-center uppercase">
            <span className="font-normal">Great Leaders</span>
          </h1>
          <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
            Are Teammates First
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            Our leaders are responsible for growing and maintaining
            relationships and building the industry’s best teams.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {teamMembers.map((item) => (
              <div key={item.id}>
                <TeamCards data={item} />
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

export default OurTeam;
