import React, { useState } from "react";
import Nav from "./components/Nav";
import Moon from "./components/Moon";
import Europa from "./components/Europa";
import Mars from "./components/Mars";
import Titan from "./components/Titan";
import {Routes, Route} from "react-router-dom";


const App =()=>{
  const[destination,setDestination]= useState("");
  
  return (
    <div className="App  ">
      <section className="bg-hero-bg  bg-center bg-cover bg-no-repeat md:h-screen h-full font-Barlow">
        <Nav/>
        <Routes>
          <Route path="/" element={<Moon setDestination={setDestination}/>} />
          <Route path="/europa" element={<Europa setDestination={setDestination}/>} />
          <Route path="/mars" element={<Mars setDestination={setDestination}/>} />
          <Route path="/titan" element={<Titan setDestination={setDestination}/>} />
        </Routes>
            
      </section>
     
      
    </div>
  );
}


export default App;

