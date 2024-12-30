import React from 'react';
import Heading from './Heading';
import Cards from './Cards';

const data = [
  {
    id: 0,
    title: "Next.js",
    desc: "Learn Next.js, a React framework for building web applications.",
    link: "https://next-web-f1xy.vercel.app/",
    image: "/nx.png",
  },
  {
    id: 1,
    title: "HTML+CSS",
    desc: "Craft responsive and visually engaging web designs with HTML and CSS.",
    link: "https://html45.vercel.app/",
    image: "/css.jpeg",
  },
  {
    id: 2,
    title: "HTML",
    desc: "HTML is the standard markup language used to create and design web pages, providing the structure for content like text, images, and links.",
    link: "https://html-rho-gules.vercel.app/",
    image: "/ht.png",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="container pt-20 pb-10 px-6"
      style={{
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     
      <Heading title="My Projects" />
      
     
      <p className="text-white text-lg text-center max-w-4xl mx-auto mb-12">
        Below are some of the projects I have worked on. Each project highlights my skills in web development, from crafting responsive websites with HTML, CSS, and Next.js, to creating fully functional, SEO-friendly applications.
      </p>

      <div className="grid gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <div
            key={el.id}
            className="bg- shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90"
          >
            <Cards
              title={el.title}
              desc={el.desc}
              image={el.image}
              link={el.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
