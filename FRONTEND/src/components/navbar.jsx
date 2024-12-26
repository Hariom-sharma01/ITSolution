import React from 'react';
import logo from '../assets/imgs/transparent-background,-shadow-designify.png';

const navbar = () => {
  return (
    <header className="bg-gray-200 shadow-md py-2 px-2 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-14 object-contain pl-0"
        />

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-800 font-bold text-lg pr-3">
          <li>
            <a
              href="#hero"
              className="hover:text-blue-600 transition duration-300 text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition duration-300 text-gray-900"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Technologies"
              className="hover:text-blue-600 transition duration-300 text-gray-900"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#Benefits"
              className="hover:text-blue-600 transition duration-300 text-gray-900"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-300 text-gray-900"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-blue-600 transition duration-300 text-gray-900 pr-2"
              
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
