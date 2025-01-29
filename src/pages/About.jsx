import CustomHeader from "../components/CustomHeader";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import image1 from "../assets/aboutImages/image1.jpg";
import image2 from "../assets/aboutImages/image2.jpg";
import image3 from "../assets/aboutImages/image3.jpg";
import image4 from "../assets/aboutImages/image4.jpg";
import image5 from "../assets/aboutImages/image5.jpg";
import image6 from "../assets/aboutImages/image6.jpg";
import image7 from "../assets/aboutImages/image7.jpg";
import image8 from "../assets/aboutImages/image8.jpg";
import image11 from "../assets/SliderAreaImages/image1.jpg";

const About = () => {
  return (
    <>
      <CustomHeader
        bgImg={
          "https://images.unsplash.com/photo-1651195297119-afc97f14a40d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        boldLine={"The way we build"}
        normalLine={"Makes sure to leave a positive impact."}
      />

      <div className="min-h-screen bg-[#EBEBEB] font-roboto-condensed py-10">
        <div className="min-h-screen w-full flex flex-col justify-center items-center px-5">
          <h1 className="font-light text-5xl md:text-7xl text-center">
            <span className="font-normal">GREAT EXPERIENCES</span> FOR EVERYONE
            THROUGHOUT
          </h1>
          <h3 className="font-light text-5xl md:text-7xl text-center">
            THE PROJECT LIFE CYCLE
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            It’s the best way to the best outcomes — and we do it every day for
            clients, trade partners, craft professionals and our employee
            owners. With integrity, teamwork and commitment as the foundation,
            we can achieve anything together.
          </p>
        </div>

        <div
          className="h-[90vh] w-full flex flex-col justify-center items-center px-5 text-white"
          style={{
            backgroundImage: "url(" + image1 + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
            Our History
          </h3>
          <p className="font-light text-xl max-w-screen-lg tracking-wider text-center py-8">
            KPNG (Kgnaz Power and Network-Infrastructure Group), founded in
            2011, is a privately held global leader in power and infrastructure
            development. With operations spanning over 20 countries and a team
            of more than 5,000 professionals, we specialize in delivering
            innovative and sustainable solutions that drive progress and empower
            communities worldwide. From groundbreaking renewable energy plants
            in Africa to futuristic smart city infrastructure in Asia, KPNG has
            consistently demonstrated its commitment to excellence and
            innovation. Recognized for its role in transformative projects such
            as Saudi Arabia’s Vision 2030 initiatives, our expertise spans
            infrastructure development, energy solutions, and advanced network
            systems. Guided by values of integrity, sustainability, and
            collaboration, KPNG remains dedicated to redefining global
            infrastructure standards. By harnessing cutting-edge technology and
            fostering partnerships, we continue to shape the future of power and
            infrastructure with exceptional quality and a focus on sustainable
            growth.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-5 pt-24">
          <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
            What We Offer
          </h3>
          <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
            At KPNG, we specialize in delivering innovative, sustainable, and
            customized solutions that redefine excellence in the power,
            infrastructure, and technology sectors. With over a decade of
            experience and a proven track record of success, we provide a
            comprehensive range of services designed to meet the unique needs of
            our clients worldwide.
          </p>
        </div>

        <div className="py-10">
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
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Infrastructure Development
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    We design and construct world-class infrastructure tailored
                    to support industrial, commercial, and urban growth. From
                    transportation systems to state-of-the-art commercial
                    complexes, our projects stand as a testament to durability,
                    functionality, and aesthetic brilliance.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>Road and highway construction</li>
                    <li>Urban development projects</li>
                    <li>High-rise and industrial building construction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Power and Energy Solutions
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    Our expertise lies in creating reliable energy solutions to
                    power communities and businesses. We integrate renewable
                    energy technologies and innovative power systems that
                    prioritize sustainability and efficiency.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>
                      Renewable energy installations (solar, wind, and hydro)
                    </li>
                    <li>Power plant construction and maintenance</li>
                    <li>Energy optimization and management systems</li>
                  </ul>
                </div>
              </div>

              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image6}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image7}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>

              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Technology Integration
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    We bring cutting-edge technology to the forefront of our
                    services, ensuring seamless integration into all projects.
                    Our tech-driven approach enhances project efficiency,
                    safety, and environmental sustainability.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>Smart city solutions</li>
                    <li>IoT-based infrastructure management</li>
                    <li>Advanced project monitoring and automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Project Management Excellence
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    At KPNG, we excel in managing complex projects from
                    conception to completion. Our experienced teams ensure that
                    every project is delivered on time, within budget, and to
                    the highest standards of quality.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>Comprehensive project planning and execution</li>
                    <li>Risk management and mitigation</li>
                    <li>Stakeholder coordination and reporting</li>
                  </ul>
                </div>
              </div>

              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image8}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image4}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>

              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Environmental and Sustainable Solutions
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    We are committed to minimizing the environmental footprint
                    of our projects. Our sustainable practices and green
                    construction methods ensure that every initiative
                    contributes to a healthier planet.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>Sustainable building certifications (LEED, BREEAM)</li>
                    <li>Waste reduction and recycling programs</li>
                    <li>Carbon footprint analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-black p-8 md:rounded-lg flex flex-col justify-center">
                  <h3 className="font-light text-3xl md:text-5xl text-center uppercase">
                    Global Expertise, Local Impact
                  </h3>
                  <p className="font-light text-lg max-w-screen-lg tracking-wider text-center py-8">
                    Operating across multiple countries, KPNG combines global
                    expertise with a deep understanding of local markets and
                    regulations. This ensures that our solutions are practical,
                    culturally appropriate, and impactful at the community
                    level.
                  </p>

                  <ul className="flex justify-center gap-10 text-center flex-wrap list-disc">
                    <li>Regional development initiatives </li>
                    <li>Compliance with local and international standards</li>
                    <li>Tailored solutions for diverse geographical regions</li>
                  </ul>
                </div>
              </div>

              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image3}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-gray-900">
          <div className="flex items-center relative">
            <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="p-5 md:p-20">
                <img
                  src={image5}
                  alt="Collaborative Partner"
                  className="w-full h-full object-cover shadow"
                />
              </div>

              {/* Text Section */}
              <div className="max-w-screen-md h-full">
                <div className="h-full text-white p-8 md:rounded-lg flex flex-col items-center justify-center">
                  <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
                    Our Community
                  </h3>
                  <p className="font-light text-xl max-w-screen-sm tracking-wider text-center py-8">
                    We are deeply committed to the communities we serve,
                    recognizing that our work goes beyond construction—it’s
                    about building connections, fostering growth, and creating
                    lasting positive impacts. Every project we undertake is
                    driven by the belief that strong communities are the
                    foundation of a thriving society. We actively engage with
                    local stakeholders, invest in sustainable practices, and
                    support initiatives that enhance the well-being of the
                    people around us. From creating job opportunities to
                    supporting community programs, our goal is to leave a legacy
                    of progress and prosperity. Together, we strive to build not
                    just structures, but resilient, inclusive, and vibrant
                    communities for generations to come.
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
                <Link to={'/contact'} className="button-48 py-10">
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

export default About;
