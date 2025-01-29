import Navbar from "./Navbar";
import { useEffect } from "react";

const CustomHeader = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="font-roboto-condensed"
      style={{
        backgroundImage: "url(" + props.bgImg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="max-w-screen-xl min-h-[30vh] md:min-h-[45vh] bg-gradient-to-r from-gray-950 flex items-center justify-center px-5">
        <h1 className="text-5xl md:text-7xl text-white font-extralight uppercase tracking-wider">
          <span className="font-normal">{props.boldLine}</span>
          <br></br>
          {props.normalLine}
        </h1>
      </div>
    </div>
  );
};

export default CustomHeader;
