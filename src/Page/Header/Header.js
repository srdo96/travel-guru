import React from "react";
import { Link } from "react-router-dom";
import logo from "../../photos/logo.png";

const Header = () => {
  return (
    <nav className="  px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap "></span>
        </a>
        <div className="flex">
          <div className="relative mr-3 md:mr-0 md:block">
            <input
              type="text"
              id="email-adress-icon"
              className="block p-2 pl-10 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/news"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
