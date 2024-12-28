import React from 'react'
import { ImMail } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa"
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container' min-h-screen py-12  style={{ backgroundColor: '#0a0e27' }}>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
                <div className='flex gap-3 items-center'>
                <ImMail  size={30}/><Link href="contact@c2tec.com" className="hover:text-white">muhammadmubashis6457@gmail.com</Link>
                </div>
                <div className='flex gap-3 items-center'>
                <FaFacebook  size={30}/><Link href="https://www.facebook.com/profile.php?id=61567329344717" className="hover:text-white">Facebook</Link>
                </div>
                <div className='flex gap-3 items-center'>
                <AiFillInstagram  size={30}/><Link href="https://www.instagram.com/muhammadmubashis6457/profilecard/?igsh=anZtM3J6M21teWU4" className="hover:text-white">Instagram</Link>
                </div>
                <div className='flex gap-3 items-center'>
                <FaLinkedin  size={30}/><Link href="https://www.linkedin.com/in/muhammad-mubashir-17b737338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white">LinkedIn</Link>
                </div>
                <div className='flex gap-3 items-center'>
                <AiFillTikTok  size={30}/><Link href="https://www.tiktok.com/@muhammadmubashir692?_t=8sTZMV3ig5v&_r=1" className="hover:text-white">TikTok</Link>
                </div>
            </div>
            
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[30px] bg-transparent border border-accent'
                    id='name'
                    />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[30px] bg-transparent border border-accent'
                    id='email'
                    />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea  className='bg-transparent border border-accent'
                   rows={6}></textarea>
                   
                    
                </div>
                <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
