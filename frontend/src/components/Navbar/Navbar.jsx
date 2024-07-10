import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Home from '../../pages/home/Home';
import { Link } from 'react-router-dom';
import Cart from '../../pages/cart/Cart'; 
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setshowlogin}) => {
    const [menu,setmenu]=useState("home");
    const {gettotalcartamount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      
      <img className='logo' src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={  menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className= {  menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("app")} className={menu==="app"?"active":""}>mobile app</a>
        <a href='#footer' onClick={()=>setmenu("contact")} className={  menu==="contact"?"active":""}>Contact us</a>

      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={gettotalcartamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>Sign in </button>
      </div>
    </div>
  )
}

export default Navbar
