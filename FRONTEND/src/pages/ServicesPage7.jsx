import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg from '../assets/service_icons/BackgroundIcon.png';
import apllicationicon from '../assets/service_icons/application.png'
import cms from '../assets/service_icons/cms.png'
import integ from '../assets/service_icons/integration_18122645.png';
import mobilepp from '../assets/service_icons/mobilepp.png';
import enterprice from '../assets/service_icons/enterprice.png';
import portal from '../assets/service_icons/portal.png';
import Animation from '../assets/service_icons/Animation.png';
import Ecommerce from '../assets/service_icons/Ecommerce.png';

import reactIcon from "../assets/service_icons/react.png";
import nodeIcon from "../assets/service_icons/node.png";
import pythonIcon from "../assets/service_icons/python.png";
import javaIcon from "../assets/service_icons/java.png";
import rubyIcon from "../assets/service_icons/ruby.png";
import mongoIcon from "../assets/service_icons/mongo.png";
import mysqlIcon from "../assets/service_icons/mysql.png";
import postgresIcon from "../assets/service_icons/postgres.jpeg";


const ServicesPage7= () => {
  const techIcons = [
    { name: "React", img: reactIcon },
    { name: "Node.js", img: nodeIcon },
    { name: "Python", img: pythonIcon },
    { name: "Java", img: javaIcon },
    { name: "Ruby", img: rubyIcon },
    { name: "MongoDB", img: mongoIcon },
    { name: "MySQL", img: mysqlIcon },
    { name: "PostgreSQL", img: postgresIcon },
  ];
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 text-gray-800">
      {/* Introduction Section */}
      <section className="relative py-28 bg-gray-100 overflow-hidden w-full h-full">
        {/* Background Image */}
        <div>
          <img
            src={bg}
            alt=""
            className="absolute inset-0 object-cover w-full h-full z-0"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-2 flex justify-end items-center relative z-10">
          <div className="text-right">
            <h2 className="text-4xl font-bold text-white mb-8">
              Transform Your Vision Into Reality
            </h2>
            <h2 className="text-4xl font-bold text-white mb-8">
              with Our Expertise in
            </h2>
            <h2 className="text-4xl font-bold text-white mb-8">
            GIS Software Development Services
            </h2>
          </div>
        </div>
      </section>

      <div className="text-center px-6 py-8 bg-opacity-90 text-white">
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-700">
        We offers experienced GIS back-end developers-for-hire who can help you capture geospatial information and develop interactive GIS mapping solutions for a range of applications, from climate research facilities to urban planning development. With AI-powered GIS software, the processing of massive amounts of spatial data is made possible, providing valuable insights into various phenomena such as urban growth and climate change. Additionally, Google location tracking apps, driven by AI technology, enable real-time analysis of user behavior and preferences, allowing businesses to deliver personalized experiences and targeted advertising. Our geolocation app can be integrated with a fleet management system, enabling transportation companies to track their vehicles in real-time, optimize routes, and improve delivery times, ultimately resulting in cost savings and improved customer satisfaction.
        </p>
      </div>

      {/* Services Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-500">
            Our Services
          </h2>

          {/* Subheading 1 */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center text-gray-700 mt-8">
            GIS Software Development Services
            </h3>
            <div className="grid grid-cols-1 md:flex flex-row lg:grid-cols-3 gap-x-6 mt-4 mb-4">
              <ServiceCard
                imgSrc={apllicationicon}
                title="GIS Software Development"
                description="We integrate GIS systems with advanced database features and third-party software configurations, enabling companies to generate GIS maps and meet their geospatial data needs."
              />
              <ServiceCard
                imgSrc={cms}
                title="GIS Application Development"
                description="We build custom GIS applications for tracking points or objects with precise projections and realistic scaling, pulling geographic data from various sources and displaying it on maps for insightful data analysis."
              />
              <ServiceCard
                imgSrc={apllicationicon}
                title="GIS Programming Services"
                description="Our team brings expertise in GIS back-end development, utilizing top application development tools and programming languages like C++, Visual Basic, Java, JSP, ASP, and more."
              />
              <ServiceCard
                imgSrc={cms}
                title="GIS Database Design"
                description="We design and configure cloud-hosted relational database systems (SQL Server, Oracle, PostgreSQL) to support GIS mapping and integrate web service APIs for drone interfaces."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white py-20 px-6 md:px-20" id="technologies">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 space-x-4 items-center mt-4">
          {techIcons.map((tech, index) => (
            <TechCard key={index} imgSrc={tech.img} name={tech.name} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-teal-500 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { count: "20000+", label: "APPS BUILT" },
              { count: "7000+", label: "HAPPY CUSTOMERS" },
              { count: "47%", label: "REPEAT AND REFERRAL BUSINESS" },
              { count: "2800+", label: "DEVELOPERS" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold">{stat.count}</div>
                <div className="text-lg mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </>
  );
};

const ServiceCard = ({ imgSrc, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border-t-2 border-l-2 border-blue-500 hover:scale-105 transition duration-500 ease-in-out">
    <div className="flex justify-center mb-4">
      <img src={imgSrc} alt="" className="h-32 w-32" />
    </div>
    <h4 className="text-lg font-medium mb-2 text-blue-500">{title}</h4>
    <p className="text-sm leading-relaxed text-gray-700">{description}</p>
  </div>
);

const TechCard = ({ imgSrc }) => (
  <div className="text-center cursor-pointer">
    <img src={imgSrc} alt="Technology" className="mx-auto mb-2 h-32 w-32" />
  </div>
);

export default ServicesPage7;
