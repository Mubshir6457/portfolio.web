
import React from 'react'
import Image from 'next/image';

interface prostype {
    title: string;
    descr: string;
    image: string;
   

}

const Card: React.FC<prostype> = ({title, descr, image}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in-up" style={{ backgroundColor: '#0a0e27' }}>
        <div>
            <Image  className='w-[300px] sm:w-[350px] h-auto'
            src={image}
            width={350}
            height={350}
            alt={title}   
            />
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{descr}</div>
           
        </div>
      
    </div>
  )
}

export default Card
