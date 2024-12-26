import React from 'react';
import webDevelopmentIcon from '../assets/icons/web.png'; // Example path
import ecommerceIcon from '../assets/icons/app.png'; // Example path
import itConsultingIcon from '../assets/icons/Itsol.png'; // Example path
import seoMarketingIcon from '../assets/icons/dbcreation.png'; // Example path

const Services = () => {
  return (
    <section className="services py-16 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">Our Services</h2>
      <div className="services-container flex flex-wrap space-x-8 px-4 py-4 justify-center items-center">
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] hover:text-white flex-shrink-0 w-64 mb-4">
          <img src={webDevelopmentIcon} alt="Web Development" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Web Development</h3>
          <p className="text-gray-600 text-sm">Custom websites built with modern technologies to meet your business goals.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] hover:text-white flex-shrink-0 w-64 mb-4">
          <img src={ecommerceIcon} alt="E-Commerce Solutions" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">E-Commerce Solutions</h3>
          <p className="text-gray-600 text-sm">Scalable e-commerce platforms to help you sell your products online seamlessly.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] hover:text-white flex-shrink-0 w-64 mb-4">
          <img src={itConsultingIcon} alt="IT Consulting" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">IT Consulting</h3>
          <p className="text-gray-600 text-sm">Professional advice and solutions to optimize your IT infrastructure and processes.</p>
        </div>
        <div className="service-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:bg-blue-400 hover:translate-y-[-10px] hover:text-white flex-shrink-0 w-64 mb-4">
          <img src={seoMarketingIcon} alt="SEO & Marketing" className="mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-gray-800">SEO & Marketing</h3>
          <p className="text-gray-600 text-sm">Boost your online presence and drive more traffic with our SEO and digital marketing services.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
