import React from 'react'
import Heading from './Heading';
import Card from './Card';




const data = [
  {
    "id":0,
    "title":"Generative aftificial intelligence",
"descr": "Use generative AI to create dynamics.",
"image":"/next.png",

},
{
  "id":1,
  "title":"Generative aftificial intelligence",
"descr": "Use generative AI to create dynamics.",
"image":"/ts.pic.png"
},
{
  "id":2,
  "title":"Generative aftificial intelligence",
"descr": "Use generative AI to create dynamics.",
"image":"/html.pic.jpg"
},

];


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        descr={el.descr}
        image={el.image}
        
       
        
        />))}
      </div>
      
    </div>
  )
}

export default Projects
