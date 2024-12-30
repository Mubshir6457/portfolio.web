import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="container py-12 px-6 mb-16 " data-aos="zoom-in-up"
      style={{
        background: 'linear-gradient(to right, #f79c42, #f8b627)',
        borderRadius: '15px',  
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold text-center">
        About Me
      </h2>
      <p className="text-white pt-4 text-lg md:text-xl text-justify leading-relaxed">
        Hi I am Mubashir!
        <br />
        
        I am an AI student passionate about exploring the potential of artificial intelligence to create innovative solutions. As a skilled web developer, I craft responsive and visually appealing websites that meet modern digital needs.
        <br />
        In addition, I specialize as a skip tracer, utilizing research and analytical expertise to uncover and deliver precise information.
        <br />
        This portfolio is a reflection of my journey, showcasing my skills, projects, and passion for technology.
      </p>
    </div>
  );
};

export default About;
