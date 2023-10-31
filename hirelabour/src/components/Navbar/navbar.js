import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                {/* Mobile menu button icons */}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="px-3 py-2 rounded-md text-lg font-medium text-white bg-gray-900 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="/market"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
                  >
                    Marketplace
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 ml-auto"> {/* Add ml-auto to move to the right */}
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-2xl font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/registermain"
                  className="px-3 py-2 rounded-md text-2xl font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus-bg-gray-700 focus-text-white"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
            >
              About
            </a>
            <a
              href="/market"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
            >
              Marketplace
            </a>
            <a
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
            >
              Login
            </a>
            <a
              href="/registermain"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover-bg-gray-700 focus:outline-none focus-text-white focus-bg-gray-700"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
