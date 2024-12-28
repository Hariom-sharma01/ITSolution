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

const Services = () => {
  return (
    <section className="services py-16 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Our Services</h2>
      <div className="services-container flex flex-wrap space-x-4 px-4 py-8 justify-center items-center gap-y-8 gap-x-4">
        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={webDevelopmentIcon} alt="Web Development" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Web Development</h3>
          <p className="service-description text-gray-800 text-lg text-center absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
            Custom websites built with modern technologies to meet your business goals.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />

        </div>


        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={appdevelopmentIcon} alt="App-Development Solutions" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">App Development</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
          Explore Tailored App Development for Your Business.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div>

        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={itConsultingIcon} alt="IT Consulting" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">IT Consulting</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
            Professional advice and solutions to optimize your IT infrastructure and processes.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div>

        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={seoMarketingIcon} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">SEO & Marketing</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
            Boost your online presence and drive more traffic with our SEO and digital marketing services.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div>
        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={cybersecurityIcon} alt="Cybersecurity" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Cybersecurity Solutions</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
          Fortify Your Business with Expert Cybersecurity Solutions.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div>
        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={iotIcon} alt="IOT Icon" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">IOT Solutions</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
          Experience the Power of Connectivity with Our IoT Services.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div>
        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={dbMigrationIcon} alt="DB Migration" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Database Migration</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
          Migrate, Optimize, and Scale with Expert Data Migration Services.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div> 
        <div className="service-card cursor-pointer bg-white p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all hover:translate-y-[-10px] group flex-shrink-0 w-48 mb-4 relative overflow-hidden">
          <img src={databaseIcon} alt="DB Migration" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Database Creation</h3>
          <p className="service-description text-gray-600 text-lg absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:visible">
          Empowering Your Data with Scalable Database Solutions.
          </p>
          <img src={arrowIcon} alt="arrow" className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 h-12 w-12 opacity-0 group-hover:opacity-100"  />
        </div> 
      </div>
    </section>
  );
};

export default Services;
