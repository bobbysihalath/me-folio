import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hi There 👋 , I am <br/> <span className='info-name'>Mr. Souksakhone SIHALATH.</span><br/>
                     I love development with web
                </div>
                <div className='about-photo'>
                    <img  src={require('../../../assets/Pair programming-amico.png')} 
                    className='picture' alt=''/>
                </div>
            </div>
           
           <SocialContact />
        </div>
    )
}

export default About