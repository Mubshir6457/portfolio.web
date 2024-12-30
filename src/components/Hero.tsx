import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
  id="home"
  className="min-h-screen bg-no-repeat bg-center bg-cover relative flex flex-col justify-center items-center"
  style={{
   
    backgroundSize: "cover",
  }}
>
  <Navbar />
  <div className="container flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-60px)] text-center lg:text-left px-6">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-8 border-white shadow-lg transform transition duration-500 hover:scale-105">
          <img src="/my-pic1.jpg" alt="Mubashir" className="w-full h-full object-cover" />
    </div>
    <div className="text-center lg:text-left lg:ml-10 mt-8 lg:mt-0" >
      <h1 className="text-5xl sm:text-6xl font-bold text-white">
        Hi, I am <span className="text-accent">Mubashir</span>
      </h1>
      <p className="text-lg sm:text-xl mt-4 text-white">
        AI Student | Web Developer | Skiptracer
      </p>
      <div className="mt-6">
        <a href="#projects" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition text-lg sm:text-xl">
          View My Work
        </a>
        <a href="#contact" className="ml-4 text-accent underline hover:text-accent-dark transition text-lg sm:text-xl">
          Get in Touch
        </a>
        
      </div>
    </div>
  </div>
</div>
  );
};

export default Hero;
