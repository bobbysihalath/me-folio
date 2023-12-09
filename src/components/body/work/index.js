import React from 'react'
import './work.css'
import Sparator from '../../common/sparator'
import { WorkData } from '../../data/work'
import WorkCard from './work-card';

function Work() {
  const data = WorkData;

  return (
    <div className='work'>
      <Sparator></Sparator>
      <label className='section-title'>
        Work
      </label>
      <div className='work-list'>
        {data.map((item) =>{
          return (
            <WorkCard item={item}></WorkCard>
          )
        })}
      </div>
    </div>
  )
}

export default Work