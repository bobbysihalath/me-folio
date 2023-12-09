import React from 'react'
import './work-card.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='work-logo' /> 
        <div className='work-info'>
            <label className='work-info'>
                {item.company}
            </label>
            <div className='work-dates'>
                <label>
                        {item.dateJoining}
                </label>
                <label>
                        {item.dateEnd}
                </label>
            </div>
            <div className='work-desc'>
                <pa>
                    {item.work}
                </pa>
            </div>

        </div>
    </div>
  )
}

export default WorkCard