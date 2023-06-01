import React from 'react';
import logolinkedin from "../utils/Linkedin.png";
import logofb from "../utils/Vectorfb.png";
import logoinsta from "../utils/Vectorinsta.png";
import weblogo from "../utils/Vector.png";

const Poster = () => {
  return (
    <div className='image-container'>
        <div className='logo-img'></div>
        <div className='poster-text'><h1>100% Uptime😎</h1>
            <h3>Zero Infrastructure Management</h3>
        </div>
        <div className='carousel-dots'>
            <div className='rectangle-carousel'></div>
            <div className='circle-carousel'></div>
            <div className='circle-carousel'></div>
        </div>
        <div className='poster-footer'>
          <div className='website-name'>
            <img src={weblogo} alt='weblogo'/>
            <h3>aesthisia.com</h3>
          </div>
          <div className='socialmedia-handles'>
            <img className='linkedin' src={logolinkedin} alt='linkedin logo'/>
            <img className='facebook' src={logofb} alt='facebook logo'/>
            <img className='insta' src={logoinsta}alt='instagram logo'/>
          </div>
        </div>
      </div>
  )
}

export default Poster;