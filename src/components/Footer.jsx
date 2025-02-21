import logo from "../assets/kpngLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-roboto-condensed shadow bg-[#102a41]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-10">
            <Link
              to={"/"}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="w-32" alt="kpng Logo" />
            </Link>

            <h5 className="text-gray-500 max-w-lg">
              KPNG, founded in 2011, is a global leader in power and
              infrastructure, operating in 20+ countries with expertise in
              renewable energy and smart city solutions. Committed to innovation
              and sustainability.
            </h5>

            <div className="flex gap-4 mb-5 md:mb-0">
              <a
                href="#"
                className="text-gray-500 text-2xl hover:text-white cursor-pointer dark:hover:text-white"
              >
                <ion-icon
                  name="logo-facebook"
                  className="text-white "
                ></ion-icon>
              </a>
              <a
                href="#"
                className="text-gray-500 text-2xl hover:text-white cursor-pointer dark:hover:text-white"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="text-white "
                ></ion-icon>
              </a>
              <a
                href="#"
                className="text-gray-500 text-2xl hover:text-white cursor-pointer dark:hover:text-white"
              >
                <ion-icon
                  name="logo-youtube"
                  className="text-white text-2xl"
                ></ion-icon>
              </a>
              <a
                href="#"
                className="text-gray-500 text-2xl hover:text-white cursor-pointer dark:hover:text-white"
              >
                <ion-icon
                  name="logo-instagram"
                  className="text-white text-2xl"
                ></ion-icon>
              </a>
            </div>
          </div>
          <ul className="flex flex-wrap items-end lg:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/contact"} className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/faq"} className="hover:underline me-4 md:me-6">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to={"/location"} className="hover:underline me-4 md:me-6">
                Location
              </Link>
            </li>
            <li>
              <Link to={"/newsroom"} className="hover:underline me-4 md:me-6">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#174e75] lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2025 Knagz Power and Network-Infrastructure Group. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
