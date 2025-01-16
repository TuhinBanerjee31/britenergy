import logo from "../assets/kpngLogo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-roboto-condensed shadow bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-10">
            <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img
                src={logo}
                className="w-32"
                alt="kpng Logo"
              />
            </Link>

            <div className="flex gap-4">
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Location
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Ethics Helpline
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2025 Knagz Power and Network-Infrastructure Group. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
