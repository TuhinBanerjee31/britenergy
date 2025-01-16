import React, { useState, useEffect } from "react";
import "./buttonStyle.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/kpngLogo.png"

const Navbar = () => {
  const [aboutStatus, setAboutStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={`font-roboto-condensed min-h-[40vh] md:min-h-[60vh] ${false ? "bg-[#FFFFFF] text-black" : "bg-transparent text-white"} transition ease-in-out delay-100 duration-500`}
      onMouseLeave={() => setAboutStatus(false)}
    >
      <div className="max-w-screen-2xl flex flex-col items-center mx-auto px-2 md:px-10 pt-3 pb-3">
        <h5 className="text-xs self-end px-2 py-2">RECOGNITION</h5>
        <div className="w-[100%] border-b border-[#EBEBEA]"></div>
        <div className="flex justify-between items-center w-full px-2 py-4">
          <NavLink to={'/'}>
          <img src={logo} className="w-16 md:w-32" />
            </NavLink>

          <div className="flex gap-4">
            <NavLink to={"/about"}
              className="cursor-pointer text-xs md:text-lg"
              onMouseEnter={() => setAboutStatus(true)}
            >
              About
            </NavLink>
            <NavLink to={"/our-work"} className="cursor-pointer text-xs md:text-lg">Our Work</NavLink>
            <NavLink to={"/our-team"} className="cursor-pointer text-xs md:text-lg">Our Team</NavLink>
            {/* <h3 className="cursor-pointer">Offices</h3>
            <h3 className="cursor-pointer">Insights</h3>
            <h3 className="cursor-pointer">Careers</h3> */}
          </div>

          <NavLink to={"/contact"} className="button-80">Contact</NavLink>
        </div>
      </div>

      {/* <div className={`relative min-h-[40vh] text-black border-t border-[#EBEBEA] transition ease-in-out delay-200 duration-500 ${
          aboutStatus ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="h-[100%] w-[40%] bg-[#EBEBEA] absolute">
          <div className="w-[70%] h-full mx-auto flex flex-col justify-center">
            <h2 className="text-2xl font-semibold">About</h2>
            <h5 className="text-xl mt-2">
              More than building a project, we create great experiences
              throughout the project life cycle. See the difference an
              employee-owned builder can make on your next project.
            </h5>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-[60%] h-[100%] absolute right-0">
          <div className="h-full flex justify-around items-center">
            <ul className="flex flex-col gap-3">
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Mission & Values
              </span>
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Our Community
              </span>
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Diversity, Equity & Inclusion
              </span>
            </ul>

            <ul className="flex flex-col gap-2">
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Employee Ownership
              </span>
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Sustainability
              </span>
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Our People
              </span>
              <span className="text-2xl cursor-pointer border-b-2 border-[#EBEBEA]">
                Our History
              </span>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
