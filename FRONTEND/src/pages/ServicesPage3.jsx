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


const ServicesPage3 = () => {
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
            IOT Services
            </h2>
          </div>
        </div>
      </section>

      <div className="text-center px-6 py-8 bg-opacity-90 text-white">
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-700">
        The success of any Internet of Things (IoT) technology or Machine-to-Machine (M2M) device is dependent on the consistency of its connectivity – both to the cloud and other devices. IoT device connect to the Internet and communicate with each other to collect and exchange data and perform various functions. We provides specialized M2M/IoT development services including embedded software, cross-platform apps, and integrated databases.
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
            End-to-End IoT Software Development Services
            </h3>
            <div className="grid grid-cols-1 md:flex flex-row lg:grid-cols-3 gap-x-6 mt-4 mb-4">
              <ServiceCard
                imgSrc={apllicationicon}
                title="Embedded M2M and IoT Systems"
                description="Our skilled M2M development specialists program and integrate embedded software and firmware (microcontrollers, processors, gateways, sensors) into a host of IoT and M2M devices, including smart home equipment, industrial automation mechanisms (IIoT), consumer electronics, smart cars, and wearables. We work with software embedded in IoT/M2M devices with sensors, touch screens, and other input methods, capable of real-time data transfers."
              />
              <ServiceCard
                imgSrc={cms}
                title="IoT Application Development"
                description="We specialize in IoT app development, which comprises excellent IoT mobile apps, desktop, and browser-based applications used for controlling and drawing readings from IoT devices. We utilize IoT system integrators to engineer powerful custom IoT applications that are personalized and provide increased visibility and an enhanced user experience. Centralized control panels enable and disable devices, set sensor triggers, and control other settings for all integrated systems. We also integrate best-in-class Business Intelligence (BI) software for generating and sharing actionable insights."
              />
              <ServiceCard
                imgSrc={apllicationicon}
                title="Sensor Application Development"
                description="We develop various types of sensors for detecting motion, pressure, temperature and humidity, the presence and proximity of objects, and environmental factors (water quality, chemicals, and gasses). Merging AI and IoT technologies creates smart, connected systems. IoT devices such as sensors and actuators generate large amounts of big data that are analyzed by AI algorithms to extract insights for intelligent decision-making. Our developers specialize in Internet of Things app development processes to automate tasks like location tracking, industrial machine operations, and machine learning."
              />
              <ServiceCard
                imgSrc={cms}
                title="IoT Database Solution"
                description="Cloud platforms provide infrastructure and tools for IoT apps for data processing. Our Internet of Things developers program cloud-hosted and in-system NoSQL databases that are fault-tolerant, consistently available, and intelligently distributed for optimal scalability. We integrate with managed IoT databases like MongoDB and AWS's Kinesis and DynamoDB. Robust pathways ensure all captured data is uploaded and restructured for rapid analysis. Our solutions include security features to protect against cyber-attacks, such as encryption, authentication, and intrusion detection."
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

export default ServicesPage3;
