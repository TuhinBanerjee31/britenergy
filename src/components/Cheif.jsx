import { CircleUser } from "lucide-react";

const Cheif = (props) => {
  return (
    <div className="min-h-[85vh] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-roboto-condensed">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <span className="inline-block text-primary-600 font-medium tracking-wide text-sm">
                {props.data && props.data.span1}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102a41] leading-tight">
                {props.data && props.data.span2}{" "}
                <span className="block text-primary-600">
                  {props.data && props.data.span3}
                </span>
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {props.data && props.data.content}
            </p>
          </div>

          {/* Right Profile Card */}
          <div className="bg-[#102a41] text-white p-8 rounded-2xl relative shadow-xl animate-fade-in">
            <CircleUser className="w-20 h-20 object-cover rounded-xl absolute top-8 right-8 transition-transform hover:scale-105" />

            <div className="mt-20">
              <h2 className="text-2xl font-display font-bold mb-1">
                {props.data && props.data.name}
              </h2>
              <p className="text-primary-400 font-medium mb-6">
                {props.data && props.data.post}
              </p>

              <div className="space-y-2 mb-8">
                {props.data &&
                  props.data.address.map((item) => (
                    <p className="text-gray-300" key={item}>
                      {item}
                    </p>
                  ))}
              </div>

              {/* <div className="flex gap-4">
                <a
                  href="tel:"
                  className="bg-[#184262] p-3 rounded-full text-primary-400 hover:text-primary-300 hover:bg-[#174e75] transition-all"
                  aria-label="Call"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:"
                  className="bg-[#184262] p-3 rounded-full text-primary-400 hover:text-primary-300 hover:bg-[#174e75] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheif;
