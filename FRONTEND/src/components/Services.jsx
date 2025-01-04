import React from 'react';
import databaseManagementAndMigration from '../assets/icons/databaseManagementAndMigration.avif';
import webDevAndEcom from '../assets/icons/webDevAndEcom.png';
import iotSolution from '../assets/icons/IOTServices.avif';
import cloudAndDeveops from '../assets/icons/cloudComputingAndDevops.avif';
import softwareSupportAndMaintainance from '../assets/icons/softwareSupportAndMaintainance.avif';
import networkAndCybersecurity from '../assets/icons/networkAndCybersecurity.avif';
import gisSoftwareDev from '../assets/icons/gisSoftwareDevelopment.avif';
import arrowIcon from '../assets/icons/right-arrow.png';
import '../CSS/services.css';


const serviceCards = [
  {
    icon: webDevAndEcom,
    title: "Web Development & E-commerce Solutions",
    description: "Custom websites built with modern technologies to meet your business goals.",
  },
  {
    icon: databaseManagementAndMigration,
    title: "Database Management & Migration",
    description: "Efficient database management and migration services for your data needs."
  },
  {
    icon: cloudAndDeveops,
    title: "Cloud Developement & DevOps",
    description: "Cloud computing and DevOps solutions to streamline your IT operations."
  },
  {
    icon: softwareSupportAndMaintainance,
    title: "Software Support And Maintainance",
    description: "Ensure your software runs seamlessly with our expert support and maintenance services."
  },
  {
    icon: networkAndCybersecurity,
    title: "Network and Cybersecurity Solutions",
    description: "Fortify Your Business with Expert Cybersecurity and Networking Solutions.",
  },
  {
    icon: iotSolution,
    title: "IoT Solutions",
    description: "Experience the Power of Connectivity with Our IoT Services.",
  },
  {
    icon: gisSoftwareDev,
    title: "GIS Software Development and Services",
    description: "Empower your decisions with cutting-edge Geographic Information System (GIS) software.",
  }
  
];

const Services = () => {
  return (
    <section className="services py-8 px-2 text-center bg-gray-100">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Our Services</h2>
      <div className="services-container flex flex-wrap  px-2 py-4 justify-center items-center gap-y-8 gap-x-4">

      {serviceCards.map((card, index) => (
      <div
        key={index}
        className="service-card cursor-pointer bg-white  border-t-2 border-b-2 border-blue-600 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 group flex-shrink-0 w-48 h-60 mb-4 relative overflow-hidden"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

        {/* Icon */}
        <img
          src={card.icon}
          alt={card.title}
          className=" z-10 relative w-full h-36 x-auto transition-transform duration-300 group-hover:scale-110"
        />

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 pb-2 z-10 relative text-center group-hover:text-white transition-colors duration-300">
          {card.title}
        </h3>

        {/* Description */}
        <p className="service-description text-gray-700 text-xl font-medium text-center px-2 absolute bottom-4 left-2 right-2 opacity-0 z-10 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-white">
          {card.description}
        </p>

        {/* Arrow Icon */}
        <img
          src={arrowIcon}
          alt="arrow"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-8 w-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    ))}
      </div>
    </section>
  );
};

export default Services;
