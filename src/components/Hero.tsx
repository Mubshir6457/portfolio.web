
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
   
    <div id='hero' className=' min-h-screen bg-no-repeat bg-[url("/my-pic1.jpg")] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"25%"}}>
   
     
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p  data-aos="fade-down-left">Hello</p>
            <p  data-aos="fade-down-left">I am</p>
            <p  data-aos="fade-down-left">Mubashir</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
