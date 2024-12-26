import React, { useState, useEffect } from 'react';
import img1 from '../assets/imgs/it1.jpg';
import img2 from '../assets/imgs/it2.jpg';
import img3 from '../assets/imgs/it3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const slides = [
    { image: img1, title: 'Empower Your Digital Presence', description: 'Professional web development and IT solutions for businesses of all sizes.' },
    { image: img2, title: 'Innovative IT Solutions', description: 'Cutting-edge technology to streamline your business processes.' },
    { image: img3, title: 'Your Trusted Technology Partner', description: 'Reliable, secure, and scalable IT services tailored to your needs.' }
  ];

  // Function to change the slide
  const updateSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval); // Clean up the interval on unmount
  }, []);

  return (
    <section className="relative flex items-center justify-between bg-gray-100 overflow-hidden" style={{ height: '550px' }}>
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-white text-lg md:text-xl mb-8">{slide.description}</p>
              <a
                href="#services"
                className="bg-teal-500 text-white px-6 py-3 rounded-md font-bold hover:bg-teal-600 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-gray-400 rounded-full cursor-pointer transition-all ${
              currentSlide === index ? 'bg-teal-500' : 'hover:bg-teal-500'
            }`}
            onClick={() => updateSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
