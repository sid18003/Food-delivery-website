import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart' 
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
function App() {

  const [showlogin,setshowlogin]=useState(false);
 
  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      
     </div>
     <Footer/>
     </>
  )
}

export default App
