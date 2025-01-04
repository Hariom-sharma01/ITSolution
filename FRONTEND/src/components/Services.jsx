import React from 'react';
import webDevelopmentIcon from '../assets/icons/web.png'; // Example path
import appdevelopmentIcon from '../assets/icons/app.png'; // Example path
import itConsultingIcon from '../assets/icons/Itsol.png'; // Example path
import seoMarketingIcon from '../assets/icons/dbcreation.png';
import iotIcon from '../assets/icons/IOT.png'; // Example path
import cybersecurityIcon from '../assets/icons/Cybersecurity.png';
import dbMigrationIcon from '../assets/icons/dbmigration.png';
import databaseIcon from '../assets/icons/database.png';
import arrowIcon from '../assets/icons/right-arrow.png';
import '../CSS/services.css';
const serviceCards = [
  {
    icon: webDevelopmentIcon,
    title: "Web Development",
    description: "Custom websites built with modern technologies to meet your business goals.",
  },
  {
    icon: appdevelopmentIcon,
    title: "App Development",
    description: "Explore Tailored App Development for Your Business.",
  },
  {
    icon: itConsultingIcon,
    title: "IT Consulting",
    description: "Professional advice and solutions to optimize your IT infrastructure and processes.",
  },
  {
    icon: seoMarketingIcon,
    title: "SEO & Marketing",
    description: "Boost your online presence and drive more traffic with our SEO and digital marketing services.",
  },
  {
    icon: cybersecurityIcon,
    title: "Cybersecurity Solutions",
    description: "Fortify Your Business with Expert Cybersecurity Solutions.",
  },
  {
    icon: iotIcon,
    title: "IoT Solutions",
    description: "Experience the Power of Connectivity with Our IoT Services.",
  },
  {
    icon: dbMigrationIcon,
    title: "Database Migration",
    description: "Migrate, Optimize, and Scale with Expert Data Migration Services.",
  },
  {
    icon: databaseIcon,
    title: "Database Creation",
    description: "Empowering Your Data with Scalable Database Solutions.",
  },
];

const Services = () => {
  return (
    <section className="services py-8 px-2 text-center bg-gray-100">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Our Services</h2>
      <div className="services-container flex flex-wrap  px-2 py-4 justify-center items-center gap-y-8 gap-x-4">

      {serviceCards.map((card, index) => (
      <div
        key={index}
        className="service-card cursor-pointer bg-white p-3 border-t-2 border-b-2 border-blue-600 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 group flex-shrink-0 w-48 h-60 mb-4 relative overflow-hidden"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

        {/* Icon */}
        <img
          src={card.icon}
          alt={card.title}
          className="mb-3 z-10 relative w-32 h-32 mx-auto transition-transform duration-300 group-hover:scale-110"
        />

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 z-10 relative text-center group-hover:text-white transition-colors duration-300">
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
