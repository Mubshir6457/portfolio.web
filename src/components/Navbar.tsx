import React from 'react'
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center fix'>
            
            <ul className='gap-10 lg:gap-16 hidden md:flex fixed top-10  max-w-2xl   mx-auto z-50'>
              <li className='menuLink text-xl circle-link' ><a href='#home'>Home</a></li>
              <li className='menuLink text-xl circle-link'><a href='#about'>About</a></li>
              <li className='menuLink text-xl circle-link'><a href='#projects'>Projects</a></li>
              <li className='menuLink text-xl circle-link'><a href='#skills'>Skills</a></li>
              <li className='menuLink text-xl circle-link'><a href='#contact'>Contact</a></li>
            </ul>
            <TiThMenu className='md:hidden' size={30} />
        </div>
    </div>
  )
}

export default Navbar
