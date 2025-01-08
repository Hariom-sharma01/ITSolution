import React, { useState } from "react";
import logo from "../assets/imgs/transparent-background,-shadow-designify.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

  const handleServiceNavigation = () => {
    if (location.pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleHomeNav = () => {
    navigate("/");
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <>
    <header className="bg-gray-200 shadow-md py-2 px-4 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <a onClick={handleHomeNav}>
        <img
          src={logo}
          alt="Logo"
          className="h-14 object-contain cursor-pointer"
        />
      </a>

      {/* Hamburger Menu */}
      <button
        className="text-gray-800 lg:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-6 lg:items-center text-gray-800 font-bold text-lg`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
          <li>
            <a
              onClick={handleHomeNav}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={handleServiceNavigation}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/Technologies")}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/Benefits")}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/About")}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={toggleModal}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* Floating Icon */}
          <button
            className="z-30 fixed bottom-5 right-5 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-all"
            onClick={toggleModal}
          >
            <FaEnvelope size={24} />
          </button>
    
          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-2xl w-[90%] max-w-lg p-8 relative z-60">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-semibold text-xl"
                  onClick={toggleModal}
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
                  Contact Us
                </h2>
                <form className="space-y-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-600 font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-600 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
          </>
  );
};

export default Navbar;
