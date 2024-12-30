import React, { useState } from 'react';
import { ImMail } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Status:', status);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    setTimeout(() => {
      setStatus('');
    }, 5000); 

    emailjs.send(
      'service_4x3ws1r',  
      'template_2z966wc', 
      templateParams,
      'r0NsozX-Um1umMpt5'
    )
    .then((response) => {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      setStatus('Failed to send message. Please try again later.');
      console.error(err);
    });
  };

  return (
    <div
      id="contact"
      className="container min-h-screen py-12 mb-8 px-10"
      style={{
        background: 'linear-gradient(to right, #1f4037, #99f2c8)', 
        borderRadius: '10px',  
      }}
    >
      <div className="grid md:grid-cols-2 gap-12">
       
        <div className="space-y-8">
          <h2 className="text-5xl text-white font-semibold" data-aos="zoom-in-up">Get in touch</h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <ImMail size={30} />
              <Link href="mailto:muhammadmubashis6457@gmail.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">muhammadmubashis6457@gmail.com</Link>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook size={30} />
              <Link href="https://www.facebook.com/profile.php?id=61567329344717" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Facebook</Link>
            </div>
            <div className="flex items-center gap-3">
              <AiFillInstagram size={30} />
              <Link href="https://www.instagram.com/muhammadmubashis6457/profilecard/?igsh=anZtM3J6M21teWU4" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Instagram</Link>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin size={30} />
              <Link href="https://www.linkedin.com/in/muhammad-mubashir-17b737338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </div>
            <div className="flex items-center gap-3">
              <AiFillTikTok size={30} />
              <Link href="https://www.tiktok.com/@muhammadmubashir692?_t=8sTZMV3ig5v&_r=1" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">TikTok</Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="zoom-in-up onSubmit={handleSubmit} onReset={() => { setName(''); setEmail(''); setMessage(''); }}">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px] bg-transparent border border-white text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[40px] bg-transparent border border-white text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                className="bg-transparent border border-white text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-accent text-white p-2 px-6 rounded-lg shadow-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent">
              Send
            </button>
           

          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
