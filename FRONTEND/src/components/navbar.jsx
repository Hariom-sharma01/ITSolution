import React from 'react';
import logo from '../assets/imgs/transparent-background,-shadow-designify.png';

const navbar = () => {
  return (
    <header className="bg-gray-200 shadow-md py-2 px-2 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <a href="#hero">
        <img
          src={logo}
          alt="Logo"
          className="h-14 object-contain pl-0"
        />
        </a>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-800 font-bold text-lg pr-3">
          <li>
            <a
              href="#hero"
              className="hover:text-blue-600 text-gray-900 tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 text-gray-900  tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Technologies"
              className="hover:text-blue-600 text-gray-900 tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#Benefits"
              className="hover:text-blue-600 text-gray-900 tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 text-gray-900 tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-blue-600 text-gray-900  tracking-widest relative inline-block  hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
              
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
