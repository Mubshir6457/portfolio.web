import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32' style={{ backgroundColor: 'black' }}>
        <div className='grid md:grid-cols-2 gap-20 items-center' >
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technology I work </h2>
                    <p className='text-gray-500 pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ipsam architecto rem provident dolores sit quidem qui voluptatem suscipit, temporibus iusto, dolorem commodi nostrum consectetur, fuga quaerat magni natus. Expedita!</p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text-3xl sm:4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Web Developer</h2>
                  <h2 data-aos="zoom-in-up">Skiptracer</h2>
                  <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Web Developer</h2>
                  <h2 data-aos="zoom-in-up">Skiptracer</h2>
                  <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
