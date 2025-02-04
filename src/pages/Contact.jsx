import image1 from "../assets/contactImages/image1.jpg";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";

const Contact = () => {

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"  
  ];
  

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
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 tracking-wider text-center">
              Head Office
            </h3>
            <p className="text-gray-700 mb-6 text-center">
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

            <h3 className="text-3xl font-bold text-gray-800 mt-8 mb-6 tracking-wider text-center">
              Regional Offices
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Contact Us
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  State <span className="text-red-600">*</span>
                </label>
                <select id="state" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3" required>
                  <option value="">- Select -</option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
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
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-around flex-wrap px-8 py-10">
        <div className="flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Business Related Inquiries
          </h3>
          <p className="text-gray-700">
            We are always here to help you with your project needs:
            <br />
            <strong>Call us:</strong> +91 611 123 4567
            <br />
            <strong>Email us:</strong> partnership@kpng.org
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            General Inquiries
          </h3>
          <p className="text-gray-700">
            For general information about our services or partnerships:
            <br />
            <strong>Call us:</strong> +91 611 123 4567
            <br />
            <strong>Email us:</strong> help@kpng.org
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            HR Related Inquiries
          </h3>
          <p className="text-gray-700">
            If you are one of our employees or have a career related enquire:
            <br />
            <strong>Call us:</strong> +91 611 123 4567
            <br />
            <strong>Email us:</strong> careers@kpng.org
          </p>
        </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;