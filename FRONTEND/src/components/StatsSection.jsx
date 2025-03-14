import React from "react";

const StatsSection = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 pt-10 mx-auto">
        {/* Centered 'Explore Services' Button */}
        <div className="flex justify-center mb-2">
          <a
            href="#services"
            className="bg-teal-500 text-white px-6 py-3 rounded-md font-bold hover:bg-teal-600 transition-all hover:text-black"
          >
            Explore Services
          </a>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap -m-4 text-center">
          {[
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
              ),
              count: "5K+",
              label: "Projects Delivered",
            },
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
              ),
              count: "2K+",
              label: "Happy Clients",
            },
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
              ),
              count: "500+",
              label: "Websites Built",
            },
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              ),
              count: "100+",
              label: "IT Solutions Delivered",
            },
          ].map((stat, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full mt-5">
              <div className="border-gray-200 px-4 py-6 rounded-lg">
                {stat.icon}
                <h2 className="title-font font-medium text-3xl text-white">
                  {stat.count}
                </h2>
                <p className="leading-relaxed">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
