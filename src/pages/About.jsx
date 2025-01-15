import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/aboutImages/image1.jpg";
import image2 from "../assets/aboutImages/image2.jpg";
import image3 from "../assets/aboutImages/image3.jpg";
import image4 from "../assets/aboutImages/image4.jpg";
import image5 from "../assets/aboutImages/image5.jpg";
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
            Our People
          </h3>
          <p className="font-light text-xl max-w-screen-lg tracking-wider text-center py-8">
            At the heart of our success lies our people – a diverse team of
            dedicated professionals who bring unparalleled expertise,
            innovation, and passion to every project we undertake. From
            architects and engineers to project managers and skilled workers,
            each individual contributes to creating structures that stand as
            benchmarks of quality and excellence. We believe in fostering a
            culture of collaboration, safety, and continuous growth, empowering
            our team with advanced training and state-of-the-art tools. Their
            unwavering commitment not only drives our accomplishments but also
            strengthens our reputation as an industry leader. Together, we build
            more than just structures; we build trust, relationships, and a
            brighter future.
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
                  <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
                    Mission & Values
                  </h3>
                  <p className="font-light text-xl max-w-screen-lg tracking-wider text-center py-8">
                    Our goal is to be the best builder in Global market. Our
                    core values of Genuine — We, Not I — and All In guide the
                    way.
                  </p>
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
                  <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
                    Employee Ownership
                  </h3>
                  <p className="font-light text-xl max-w-screen-lg tracking-wider text-center py-8">
                    As a 100 percent employee-owned company, we are personally
                    vested in the success of our clients, trade partners, and
                    each other.
                  </p>
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
                  <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
                    DIVERSITY, EQUITY & INCLUSION
                  </h3>
                  <p className="font-light text-xl max-w-screen-lg tracking-wider text-center py-8">
                    The best outcomes require teams where every voice is heard
                    and everyone can succeed without barriers. Learn More
                  </p>
                </div>
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
                  <button className="button-48 py-10">
                    <span className="text">CONTACT US</span>
                  </button>
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
