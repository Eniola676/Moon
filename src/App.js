import React from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {
  return (
    <div className="App  ">
      <section className="bg-hero-bg  bg-center bg-cover bg-no-repeat md:h-screen h-full font-Barlow">
        <Nav/>
        <Body/>       
      </section>
     
      
    </div>
  );
}

export default App;

