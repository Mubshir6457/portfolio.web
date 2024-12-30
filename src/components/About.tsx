import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="container py-6 px-4 mb-10 flex justify-center items-center relative z-10"
      data-aos="zoom-in-up"
      style={{
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        padding: '3rem 1rem', // Reduced padding for compact design
        maxWidth: '800px', // Limit width for left and right spacing
        margin: '0 auto', // Center the section
      }}
    >
      {/* Optional Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

      <div className="relative z-20 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl text-white font-semibold border-b-4 border-white inline-block pb-2 mb-8">
          About Me
        </h2>
        <p className="text-white pt-4 text-lg md:text-xl text-justify leading-relaxed">
          Hello, I am Mubashir! <br />
          <br />
          I am an AI student passionate about exploring the potential of artificial intelligence to create innovative solutions. As a skilled web developer, I craft responsive and visually appealing websites that meet modern digital needs.
          <br />
          In addition, I specialize as a skip tracer, utilizing research and analytical expertise to uncover and deliver precise information.
          <br />
          This portfolio is a reflection of my journey, showcasing my skills, projects, and passion for technology.
        </p>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="bg-accent text-white px-8 py-4 rounded-lg shadow-lg hover:bg-accent-dark transition duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
