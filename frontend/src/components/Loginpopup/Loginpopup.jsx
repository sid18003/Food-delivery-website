import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowlogin}) => {

   const [currstate,setcurrstate]=useState("sign up")

  return (
    <div className="login-popup">
        <form  className="login-popup-container">
            <div className="login-popup-title">
             <h2>
                {currstate}
             </h2>
             <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-pop-up-inputs">
                {currstate==="sign up"?<><input type="text" placeholder='Your Name' required /></>:<></>}
             
             <input type="email" placeholder='Your Email' required />
             <input type="password" placeholder='Enter Your Password' required />
             
            </div>
            {currstate==="sign up"?<div className="login-popup-conditions">
             
              <p> <input type="checkbox"  required /> By continuing i agree to terms and conditions of tomato</p>
            </div>:<></>}
            <button>
                {currstate==="sign up"?"Create Account":"Login"}
            </button>
            
            {currstate==="Login"? <p>Create a new account account ? <span onClick={()=>setcurrstate("sign up")}>Click here</span></p>:<p>Already have an account ? <span onClick={()=>setcurrstate("Login")}>Click here</span></p>}
           
            
        </form>
    </div>
  )
}

export default Loginpopup
