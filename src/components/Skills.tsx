import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSearch } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <div
      id="skills"
      className="container pt-12 pb-8 mb-16" 
      style={{
        background: 'linear-gradient(135deg, #1a202c, #2d3748)', 
        color: 'white',
      }}
    >
      <h2 className="text-5xl text-center mb-8" data-aos="zoom-in-up">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl mb-4">Technology I Work With</h2>
          <p className="pt-2 text-white">
            I am a versatile professional specializing in web development and skip tracing. With expertise in HTML, CSS, and Next.js, I craft dynamic, responsive, and user-friendly websites tailored to client needs. My skip tracing skills involve advanced research techniques to locate individuals and assets effectively. I stay updated with modern web technologies to deliver high-performing and SEO-friendly applications. My goal is to merge creativity and technical expertise to provide innovative solutions.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6 text-center">
            
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <FaHtml5 className="text-6xl text-orange-500" />
              </div>
              <h2 className="text-xl">HTML</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <FaCss3Alt className="text-6xl text-blue-500" />
              </div>
              <h2 className="text-xl">CSS</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <FaJs className="text-6xl text-yellow-500" />
              </div>
              <h2 className="text-xl">JavaScript</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <FaReact className="text-6xl text-cyan-500" />
              </div>
              <h2 className="text-xl">React</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <SiNextdotjs className="text-6xl text-white" />
              </div>
              <h2 className="text-xl">Next.js</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <FaSearch className="text-6xl text-green-500" />
              </div>
              <h2 className="text-xl">Skip Tracing</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
