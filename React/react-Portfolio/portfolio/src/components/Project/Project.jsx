import React from 'react'
import ProjectCard from './ProjectCard'

const Project = ({projects}) => {
  return (
   <section id="project" className="flex flex-col justify-center  items-center px-10 mt-28">
    <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="purple text-2xl font-semibold mb-2">PORTFOLIO</h2>
        <h1 className="text-4xl font-semibold text-white">LATEST PROJECTS</h1>
    </div>
    <div className="flex text-white">
        {projects.map((project)=>(<ProjectCard key={project.title} {...project}/>))}
    </div>
</section>
  )
}

export default Project