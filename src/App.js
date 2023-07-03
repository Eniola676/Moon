import React, { useState } from "react";
import Nav from "./components/Nav";
import Moon from "./components/Moon";
import Europa from "./components/Europa";
import Mars from "./components/Mars";
import Titan from "./components/Titan";
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Destination from "./components/Destination"


const App =()=>{
  const[destination,setDestination]= useState("");
  
  return (
    <div className="App  ">
      <section className="bg-hero-bg bg-fixed  bg-center bg-cover bg-no-repeat min-h-[100vh] h-full font-Barlow">
        <Nav/>
      
        <Routes> 
          <Route path="/destination/*" element={<Destination />} />  
          {/* <Route path="/europa" element={<Europa setDestination={setDestination}/>} />
          <Route path="/mars" element={<Mars setDestination={setDestination}/>} />
          <Route path="/titan" element={<Titan setDestination={setDestination}/>} />
          <Route path="/login" element={<Login setDestination={setDestination}/>} />
          <Route path="/register" element={<Register setDestination={setDestination}/>} /> */}
        </Routes>
        {/* make the link to moon the link to the pick destination page and login home page  */}
            
      </section>
     
      
    </div>
  );
}


export default App;

