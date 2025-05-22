import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt=''/>
          <p>Savor the extraordinary at Zinger, where culinary artistry meets impeccable service. Experience a delightful fusion of flavors in a warm, inviting ambiance. Perfect for every occasion, every taste, every moment.</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />    
            <img src={assets.linkedin_icon} alt="" />    
             </div>

        </div>
        
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Privacy Policy</li>
             <li>Terms</li>
             <li>Delivery</li>
             <li>Security</li>

          </ul>

        </div>
        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-955-69-59930</li>
            <li>contact@zinger.com</li>
          </ul>

        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ Zinger.com-All rights reserved</p>

    </div>
  )
}

export default Footer
