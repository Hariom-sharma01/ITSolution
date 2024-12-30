import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Technologies = () => {
  const technologies = [
    {
      title: 'Frontend Technologies',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1613667821723-35e4e3e04671?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['HTML5', 'CSS3 & TailwindCSS', 'JavaScript (ES6+)', 'React.js', 'Angular'],
    },
    {
      title: 'Backend Technologies',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['Node.js', 'Spring Boot', 'Django', 'Express.js', 'Ruby on Rails'],
    },
    {
      title: 'Databases',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1495232714953-ef7f41577786?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
    },
    {
      title: 'DevOps & Cloud',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1481414981591-5732874c7193?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Git & GitHub'],
    },
    {
      title: 'Mobile Development',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1516638489986-0c17c234db55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Java'],
    },
    {
      title: 'Emerging Technologies',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;)",
      items: ['Artificial Intelligence', 'Machine Learning', 'Blockchain', 'IoT', 'Augmented Reality (AR)'],
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 text-gray-800">
      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Technologies We Work With</h1>
          <p className="text-center text-gray-600 mb-12">
            We specialize in a wide range of technologies to deliver top-notch solutions tailored to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                style={{ backgroundImage: tech.backgroundImage }}
              >
                <h2 className="text-xl font-semibold mb-4">{tech.title}</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {tech.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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

export default Technologies;
