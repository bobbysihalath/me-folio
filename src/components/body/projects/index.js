import React from 'react'
import './project.css'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import Sparator from '../../common/sparator';

function Projects() {
  const data = ProjectData;
   
  return (
    <div className='projects'>
      <Sparator> </Sparator>
        <label className='section-title'>
          Projects
        </label>
        <div>
          {data.map((project) => {
            return <ProjectCard project={project} />
          })}

        </div>
    </div>
  )
}

export default Projects