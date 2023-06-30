import React from 'react'
import moon from "../images/moonimg.png";
import {Link} from 'react-router-dom';
import { Slide } from "react-awesome-reveal";


const Moon = ({setDestination}) => {

    const select =(e)=>{         
        setDestination(e.target.dataset.id); 
      }  

  return (
    <div>
        <div className='md:container px-2 pt-5 md:text-left text-center '>
            <Slide>
                <h1 className='text-white text-6xl '><span className="font-bold text-[#ffffff70] mr-2">01</span>PICK YOUR DESTINATION </h1> 
            </Slide>
        </div>
        <div className='md:flex items-center md:justify-between pt-6 bg-blue'>
            <img src={moon}  alt="" className="md:w-[36%] w-[52%] md:py-0 py-4  mx-auto hover:animate-pulse  "/>
            
            <div className='md:w-1/2'>
                <ul className='text-white md:text-4xl text-3xl pb-4'>
                    <Link to ="/">
                        <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2  md:ml-2'>MOON</li>
                    </Link>
                    <Link to ="/europa">
                        <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>EUROPA</li>
                    </Link>
                    <Link to ="/mars">       
                        <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>MARS</li>
                    </Link>
                    <Link to ="/titan">
                        <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>TITAN</li>
                    </Link>
                </ul>
                <h1 className='text-white w-full font-Bellefair pb-2 text-7xl text-center md:text-left md:pt-3 '>MOON</h1>
                <p className='text-white font-extralight md:text-xl md:text-left text-center md:w-2/3 md:pl-1 pb-10 md:leading-loose tracking-wider border-b-[0.5px] border-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet distinctio consectetur, maiores corrupti commodi dolore nulla atque ipsa molestiae magnam fugit sed sequi omnis est fuga mollitia error. Neque, unde.</p>
                <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10 ">
                    <div>
                        <span className="text-[#d2d8f9] text-3xl">Avg. distance(Km)</span>
                        <h1 className="text-2xl text-white"> 384,400</h1> 
                    </div>
                    <div>
                        <span className="text-[#d2d8f9] text-3xl">Est. travel time</span>
                        <h1 className="text-2xl text-white"> 3 DAYS</h1> 
                    </div>

                </div>

            </div>
            
        </div>
    </div>
     

  )
}

export default Moon