import React from 'react'
import './project-card.css'
function ProjectCard({project}) {
  return (
    <div  className='project-card'>
        <div className='project-card-info'>
            <label className='project-title'>{project.title}</label>
            <div className='project-links'>
               {project.demo&& (
               <a className='project-link' href={project.demo}> 
                <div className='link-botton'>
                    <i class="fi-rr-globe"></i> Demo
                </div>
               </a>
               )}

            {project.github&& (
               <a className='project-link' href={project.github}> 
                <div className='link-botton'>
            <i class="devicon-github-original colored"></i>Gihub
                </div>
               </a>
               )}
            </div>

            <p>
              {project.about}
            </p>
            <div className='project-tags'>
              {project.tags.map((tag) =>{
                return <label className='tag'>{tag}</label>
              })}
            </div>
        </div>
        <img src={project.img} className='project-photo'/>
    </div>
  )
}

export default ProjectCard