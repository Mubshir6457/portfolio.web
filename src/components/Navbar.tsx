import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-8">
      <div className=" text-white fixed w-full z-50">
        {/* Menu for larger screens */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink text-xl circle-link text-white hover:text-accent">
            <a href="#home">Home</a>
          </li>
          <li className="menuLink text-xl circle-link text-white hover:text-accent">
            <a href="#about">About</a>
          </li>
          <li className="menuLink text-xl circle-link text-white hover:text-accent">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuLink text-xl circle-link text-white hover:text-accent">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink text-xl circle-link text-white hover:text-accent">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger menu for smaller screens */}
        <TiThMenu
          className="md:hidden cursor-pointer z-50 text-white"
          size={30}
          onClick={toggleMenu}
        />

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center z-40"
            onClick={toggleMenu}
          >
            <ul className="gap-6 flex flex-col text-center">
              <li className="menuLink text-2xl text-white hover:text-accent">
                <a href="#home">Home</a>
              </li>
              <li className="menuLink text-2xl text-white hover:text-accent">
                <a href="#about">About</a>
              </li>
              <li className="menuLink text-2xl text-white hover:text-accent">
                <a href="#projects">Projects</a>
              </li>
              <li className="menuLink text-2xl text-white hover:text-accent">
                <a href="#skills">Skills</a>
              </li>
              <li className="menuLink text-2xl text-white hover:text-accent">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
