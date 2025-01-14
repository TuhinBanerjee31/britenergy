import image1 from "../assets/EffectAreaImages/image1.jpg";
import image2 from "../assets/EffectAreaImages/image2.jpg";

const EffectArea = () => {
  return (
    <div className="font-roboto-condensed min-h-screen">
      <div
        className="h-[100vh] w-full sticky top-0 z-10"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex justify-center items-center p-5">
          <h1 className="[text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-8xl md:text-9xl text-center text-white uppercase">If you can dream it</h1>
        </div>
      </div>

      <div
        className="h-[100vh] w-full sticky top-0 z-10"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex justify-center items-center p-5">
          <h1 className="[text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-8xl md:text-9xl text-center text-white uppercase">We can build it</h1>
        </div>
      </div>

      <div className="h-[100vh] w-full sticky top-0 z-10 bg-[#FFFFFF] flex flex-col justify-center items-center px-5">
        <h1 className="font-light text-5xl md:text-7xl text-center"><span className="font-normal">We’ve Done One Thing</span> For Nearly</h1>
        <h3 className="font-light text-5xl md:text-7xl text-center">160 Years: <span className="font-normal">Build</span></h3>
        <p className="font-light text-xl md:text-2xl max-w-screen-sm tracking-wider text-center py-5">We assemble high-performing teams ready to solve any challenge and achieve your goals.</p>
      </div>
    </div>
  );
};

export default EffectArea;
