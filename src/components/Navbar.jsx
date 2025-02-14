import { useState } from "react";
import "./buttonStyle.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/kpngLogo.png";

const Navbar = () => {
  const [aboutStatus, setAboutStatus] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div
      className={`font-roboto-condensed min-h-[40vh] md:min-h-[60vh] ${
        aboutStatus ? "bg-[#FFFFFF] text-black" : "bg-transparent text-white"
      } transition ease-in-out delay-100 duration-500`}
      onMouseLeave={() => setAboutStatus(false)}
    >
      <div className="max-w-screen-2xl flex flex-col items-center mx-auto px-2 md:px-10 pt-3 pb-3">
        <NavLink to={"/recognition"} className="text-xs self-end px-2 py-2">
          RECOGNITION
        </NavLink>
        <div className="w-[100%] border-b border-[#EBEBEA]"></div>
        <div className="flex justify-between items-center w-full px-2 py-4">
          <NavLink to={"/"}>
            <img src={logo} className="w-16 md:w-32" />
          </NavLink>

          <div className="flex gap-4">
            <NavLink
              to={"/about-us"}
              className="cursor-pointer text-xs md:text-lg"
            >
              About Us
            </NavLink>
            <span
              className="cursor-pointer text-xs md:text-lg"
              onMouseEnter={() => setAboutStatus(true)}
            >
              Our Work
            </span>
            <NavLink
              to={"/our-impact"}
              className="cursor-pointer text-xs md:text-lg"
            >
              Our Impact
            </NavLink>
            <NavLink
              to={"/our-team"}
              className="cursor-pointer text-xs md:text-lg"
            >
              Our Team
            </NavLink>
            {/* <h3 className="cursor-pointer">Offices</h3>
            <h3 className="cursor-pointer">Insights</h3>
            <h3 className="cursor-pointer">Careers</h3> */}
          </div>

          <NavLink to={"/contact"} className="button-80">
            Contact
          </NavLink>
        </div>
      </div>

      <div
        className={`relative min-h-[40vh] text-black border-t border-[#EBEBEA] transition ease-in-out delay-200 duration-500 ${
          aboutStatus ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[100%] w-[40%] bg-[#EBEBEA] absolute">
          <div className="w-[70%] h-full mx-auto flex flex-col justify-center">
            <h2 className="text-base md:text-2xl font-semibold">Work</h2>
            <h5 className="text-xs md:text-xl mt-2">
              More than building a project, we create great experiences
              throughout the project life cycle. See the difference an
              employee-owned builder can make on your next project.
            </h5>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-[60%] h-[100%] absolute right-0">
          <div className="h-full flex flex-col md:flex-row justify-center md:justify-around items-center gap-3 md:gap-0">
            <ul className="flex flex-col gap-3">
              <span className="text-lg md:text-2xl cursor-pointer border-b-2 px-1 border-[#EBEBEA]">
                Infrastructure
              </span>
              <span className="text-lg md:text-2xl cursor-pointer border-b-2 px-1 border-[#EBEBEA]">
                Energy
              </span>
              <span className="text-lg md:text-2xl cursor-pointer border-b-2 px-1 border-[#EBEBEA]">
                Manufacturing
              </span>
            </ul>

            <ul className="flex flex-col gap-2">
              <span className="text-lg md:text-2xl cursor-pointer border-b-2 px-1 border-[#EBEBEA]">
                Oil and Gas
              </span>
              <span className="text-lg md:text-2xl cursor-pointer border-b-2 px-1 border-[#EBEBEA]">
                Maritime
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
