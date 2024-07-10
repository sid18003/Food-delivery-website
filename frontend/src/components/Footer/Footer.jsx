import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati harum beatae eum consequatur debitis. Est ad eligendi ea aperiam culpa ipsa facere consequatur accusamus nemo a. Porro cupiditate corrupti reiciendis.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>

            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy Policy</li>
            </div>

            <div className="footer-content-right">
                  <h2>Get in touch</h2>
                  <ul>
                    <li>+91 8805888098</li>

                    <li>siddhrajm90@gmail.com</li>
                  </ul>
            </div>

        </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 C sidd2003m.com all rights reserved
      </p>
    </div>
  )
}


export default Footer
