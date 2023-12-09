import React from 'react'
import './contact.css'
import Sparator from '../../common/sparator'
import SocialContact from '../../common/social-contact'

function Contact() {
  return (
    <div className='contact'>
      <Sparator></Sparator>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>
            Want to get in touch ? Cantact me on any of the plaform
          </p>
          <SocialContact></SocialContact>
        </div>
        <div className='download'>
          <a download href={require('../../../assets/Pair programming-amico.png')}>
            <i class="fi-rr-cloud-download download-icon"></i>
            Download Resume
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact