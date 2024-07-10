import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {Routes,Route} from "react-router-dom"
 import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <h1>this is add</h1>
      <div className="app-content">
        <Sidebar/>
        <Routes> 
          <Route path="/" element={<Add/>}/>
          <Route path="/add"  element={<Add/>} />
            <Route path="/list" element={<List/>}/>
            <Route path="/orders" element={<Orders/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
