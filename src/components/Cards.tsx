import React from 'react';
import Image from 'next/image'; 

interface CardProps {
  title: string;
  desc: string;
  image: string;
  link: string;
}

const Cards: React.FC<CardProps> = ({ title, desc, image, link }) => {
  return (
    <div className="card shadow-lg rounded-lg p-4 text-center" data-aos="zoom-in-up">
      {/* Make the image clickable */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-md"
        />
      </a>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-#0a0e27 mt-2">{desc}</p>
      <a
        href={link} target="_blank" rel="noopener noreferrer"
         className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
       View My Project
      </a>
    </div>
  );
};

export default Cards;
