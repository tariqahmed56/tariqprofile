import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { useData } from '../context'

const Projects = () => {
  let {projectData} = useData();
  return (
    <div className='pt-[30px]'>
      <h1 className='text-[40px] text-center p-6 font-bold '>Crafted Collection</h1>
      <div className="projects flex flex-wrap gap-8 justify-center">
        {projectData.map((item)=>(
            <ProjectCard title={item.title} category={item.category} image={item.img} url={item.url} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Projects
