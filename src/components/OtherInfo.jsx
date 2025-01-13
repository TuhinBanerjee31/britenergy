import image1 from "../assets/OtherInfoImages/image1.jpg";

const OtherInfo = () => {
  return (
    <div className="min-h-[80vh] font-roboto-condensed bg-[#EBEBEB]">
      <div className="flex items-center relative pt-20">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="md:absolute max-w-[500px] mx-auto md:left-[10%] md:top-[100%] z-20">
            <img
              src={image1}
              alt="Collaborative Partner"
              className="w-full h-full object-cover shadow"
            />
          </div>

          {/* Text Section */}
          <div className="bg-gray-900 md:absolute md:w-[60%] md:right-0 flex justify-end">
            <div className="max-w-2xl text-white p-8 md:rounded-l-lg flex flex-col justify-end items-end text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                National Builders
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Deeply Committed To Our Communities
              </h3>
              <p className="text-lg sm:text-xl mb-6">
                We leverage national resources and talent to build across the
                country and positively impact each community we touch.
              </p>
              <div>
                <button className="button-48 py-10">
                  <span className="text uppercase">OUR Commitment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
