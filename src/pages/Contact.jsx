import image1 from "../assets/contactImages/image1.jpg";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"Let's Have Some Words"}
        normalLine={"HOW CAN WE HELP?"}
      />
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 font-roboto-condensed py-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10 p-6 lg:p-12">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mt-6 tracking-wider text-center">
              Head Office
            </h3>
            <p className="text-gray-700 mt-2">
              Kingdom Centre Tower, 26th Floor
              <br />
              King Fahd Road, Olaya District, Riyadh 12214
              <br />
              Saudi Arabia
              <br />
              <strong>Phone:</strong> +966 11 123 4567
              <br />
              <strong>Email:</strong> info@kpng.org
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 tracking-wider text-center">
              Regional Offices
            </h3>
            <div className="flex flex-wrap gap-10 items-center py-6">
              <div>
                <p className="text-gray-700">
                  <strong className="text-lg">India</strong>
                  <br />
                  1st Floor, HMDA Complex, Dwaraka Nagar, Main Road
                  <br />
                  Visakhapatnam, Andhra Pradesh, 530016, India
                  <br />
                  <strong>Phone:</strong> +91 40 1234 5678
                  <br />
                  <strong>Email:</strong> india.info@kpng.in
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong className="text-lg">South Africa</strong>
                  <br />
                  Nelson Mandela Square, Sandton
                  <br />
                  Gauteng 2196, Johannesburg, South Africa
                  <br />
                  <strong>Phone:</strong> +27 11 123 4567
                  <br />
                  <strong>Email:</strong> info@kpng.org
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong className="text-lg">USA</strong>
                  <br />
                  One World Trade Center, 47th Floor
                  <br />
                  New York, NY 10007, United States
                  <br />
                  <strong>Phone:</strong> +1 212 123 4567
                  <br />
                  <strong>Email:</strong> info@kpng.org
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-600">*</span>
                </label>
                <select
                  id="state"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  required
                >
                  <option value="">- Select -</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  required
                ></textarea>
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="send-copy"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="send-copy"
                  className="ml-2 text-sm text-gray-700"
                >
                  Send a copy to myself
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#cacaca] text-white py-3 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-2xl font-bold text-gray-800 mt-8">
            General Inquiries
          </h3>
          <p className="text-gray-700 mt-2">
            For general information about our services or partnerships:
            <br />
            <strong>Call us:</strong> +91 611 123 4567
            <br />
            <strong>Email us:</strong> contact@kpnglobal.com
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
