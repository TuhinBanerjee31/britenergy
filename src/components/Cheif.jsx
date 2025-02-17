import {
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Mail,
} from "lucide-react";

const Cheif = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-roboto-condensed">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <span className="inline-block text-primary-600 font-medium tracking-wide text-sm">
                INNOVATION LEADERS
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                MAXIMIZING SUCCESS{" "}
                <span className="block text-primary-600">
                  THROUGH INNOVATION
                </span>
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Drawing on over 160 years of construction expertise and
              leadership, our approach is anchored in integrated project teams,
              self-perform capabilities, and expedited project delivery—all of
              which are built to provide reliable turnkey solutions. Our
              meticulous commitment to safety, quality, scheduling, and cost
              management ensures outstanding outcomes on complex industrial
              projects.
            </p>

          </div>

          {/* Right Profile Card */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl relative shadow-xl animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Aaron Lich"
              className="w-32 h-32 object-cover rounded-xl absolute -top-8 right-8 shadow-lg transition-transform hover:scale-105"
            />

            <div className="mt-20">
              <h2 className="text-2xl font-display font-bold mb-1">
                AARON LICH
              </h2>
              <p className="text-primary-400 font-medium mb-6">
                VICE PRESIDENT, INDUSTRIAL
              </p>

              <div className="space-y-2 mb-8">
                <p className="text-gray-300">12851 Manchester Road</p>
                <p className="text-gray-300">St. Louis, MO 62131</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="tel:"
                  className="bg-gray-800 p-3 rounded-full text-primary-400 hover:text-primary-300 hover:bg-gray-700 transition-all"
                  aria-label="Call"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:"
                  className="bg-gray-800 p-3 rounded-full text-primary-400 hover:text-primary-300 hover:bg-gray-700 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheif;
