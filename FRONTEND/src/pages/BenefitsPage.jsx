import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Contact from '../components/ContactModal';

const benefitsData = [
    {
      title: "Customized IT Solutions",
      description:
        "We tailor our IT solutions to meet the specific needs of your business, ensuring maximum efficiency and growth.",
      icon: "💻",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is available around the clock to assist you with any technical issues or queries.",
      icon: "⏰",
    },
    {
      title: "Cost-Effective Services",
      description:
        "Get top-notch IT solutions without exceeding your budget. We ensure value for every penny spent.",
      icon: "💰",
    },
    {
      title: "Scalable Solutions",
      description:
        "Our solutions grow with your business, ensuring seamless operations as your needs evolve.",
      icon: "📈",
    },
    {
      title: "Enhanced Security",
      description:
        "Protect your data and infrastructure with our state-of-the-art security measures and protocols.",
      icon: "🔒",
    },
    {
      title: "Expert Team",
      description:
        "Work with a team of seasoned professionals committed to delivering top-notch IT services.",
      icon: "🧑‍💻",
    },
    {
      title: "Fast Deployment",
      description:
        "Our streamlined processes ensure quick deployment of solutions to get your business up and running.",
      icon: "⚡",
    },
    {
      title: "Innovative Solutions",
      description:
        "Stay ahead of the competition with our innovative and cutting-edge IT services.",
      icon: "🚀",
    },
  ];

const BenefitsPage = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          "Empowering Businesses, One Solution at a Time"
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore the exceptional benefits of partnering with Excel IT Solutions.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 shadow-xl border-t-4 border-b-4 border-blue-600 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg transform transition-all  hover:translate-y-[-10px] hover:text-blue-600 flex flex-col items-center justify-center h-64 w-80"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BenefitsPage;
