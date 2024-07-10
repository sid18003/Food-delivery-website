import React, { useState } from 'react'
import './Home.css'
import Header from '../../header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Food_display from '../../components/FoodDisplay/Food_display'
import AppDownload from '../../components/app-Download/AppDownload'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const [category,setCategory] = useState("All");
  const[]=useState();
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food_display category={category}/>
      <AppDownload/>
    
    </div>
  )
}

export default Home
