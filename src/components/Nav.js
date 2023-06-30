import React, { useState } from 'react';
import icon from "../images/moon.png";
import menu from "../images/mainmenu.png";
import close from "../images/close.png";
 



const Nav = () => {

  let [navopen , setNavopen]=useState(false);

  const Links=[
    {name:"HOME"},
    {name:"DESTINATION"},
    {name:"CREW"},
    {name:"TECHNOLOGY"}, 
  ]
  return (
    <nav className="flex items-center justify-between pt-5">
        <img src={icon}  alt="moon logo" className='w-12 ml-7 animate-spin'/>
        <img src={!navopen ? menu: close}  alt="" className='z-20 right-5 fixed cursor-pointer top-5 md:hidden w-10'onClick={()=>setNavopen(!navopen)}/>
        <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 duration-300 ease-linear md:h-auto h-screen ${!navopen ? 'right-[-100%]': 'right-0' }`} >
          {
            Links.map((link,index)=>(
            <li key={index} className=" md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6 ">

                <a href="https://accounts.google.com/v3/signin/confirmidentifier?dsh=S-1542722583%3A1687960964705476&authuser=0&continue=https%3A%2F%2Fmeet.google.com%2Fhbo-ruqv-iaa&followup=https%3A%2F%2Fmeet.google.com%2Fhbo-ruqv-iaa&ifkv=Af_xneG1n5_L_NeKyOn7MGB5ns5mDo4A7gdq81_9MofLYiBI1w2h_ZKvgavw7oh6z6vMvl6kmDanWg&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="text-white text-4xl font-bold hover:drop-shadow-lg  hover:font-extrabold md:py-5 py-3 inline-block font-normal"><span className="font-bold mr-1.5">0{index}</span>{link.name}</a>
                
                
            </li> 

            ))
          }
         
        </ul>
  
    </nav>
  )
}

export default Nav