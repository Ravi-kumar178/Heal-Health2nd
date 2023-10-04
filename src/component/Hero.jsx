import React from 'react'
import img1 from "../assets/Health-750x500.png"
import img2 from "../assets/healthcare-g.jpg"
import { useState } from 'react';
import { useEffect } from 'react';

import { BsArrowRight } from "react-icons/bs";


const images = [
       img1,
       img2,
  ];

function Hero() {

    const [value, setValue] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setValue((v) => {
           return v === 1 ? 0 : v + 1;
         });
       }, 2500);
       return () => clearInterval(interval);
      }, []);
  

  return (
    <div className="app overflow-x-hidden  " >

   <div className='relative '>

   <img src={images[value]} alt="img" className='w-full heroImage h-[400px]'/>
    <div className="relative">
      {
        value === 1 ? 
        (
        <div className='absolute w-[600px]  heroFirst right-0 top-[-380px] '>
            <h1 className='font-bold  text-3xl ml-5  '>Overview NHWIC 2023:</h1>
            <h1 className='font-bold text-3xl  ml-5 '>Unlocking the Future</h1>
            <p className='font-normal rightPara text-slate-500 ml-6 text-[16px] mt-[20px]'>
                The 8th National Health Writers and Editors Convention 2023 is a premier gathering of more than 100 healthcare writers, influencers, and thought leaders. This two-day event aims to equip attendees with the latest insights and tools to navigate the ever-evolving landscape of healthcare writing. Explore cutting-edge topics, engage with industry experts, and honor the champions of rural healthcare.
            </p>
            
            <div className='flex flex-wrap flex-row '>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSf2Tcg7GPweYLIE89eR98cd1MuPhQvRNS1RpccgUqYL7nUzew/viewform?usp=sf_link'>
            <button className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                <p>Express Interest</p>
                <BsArrowRight className='mt-[2px]'/>
            </button>
            </a>

            <a href='https://healfoundation.in/'>
            <button className="ml-6 mt-[20px] heroSectionSecondButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                <p>Learn More</p>
                <BsArrowRight className='mt-[2px]'/>
            </button>
            </a>

            </div>

          
        </div>
        )
        : 
        (
        <div className='absolute left-[0px] w-[600px] top-[-380px]'>
            <h1 className='font-bold text-3xl ml-5  '>Overview NHWIC 2023:</h1>
            <h1 className='font-bold text-3xl ml-5 '>Unlocking the Future</h1>
            <p className='font-normal rightPara text-slate-800 ml-6 text-[16px] mt-[20px]'>
                The 8th National Health Writers and Editors Convention 2023 is a premier gathering of more than 100 healthcare writers, influencers, and thought leaders. This two-day event aims to equip attendees with the latest insights and tools to navigate the ever-evolving landscape of healthcare writing. Explore cutting-edge topics, engage with industry experts, and honor the champions of rural healthcare.
            </p>

            <div className='flex flex-row'>

              <a href='https://docs.google.com/forms/d/e/1FAIpQLSf2Tcg7GPweYLIE89eR98cd1MuPhQvRNS1RpccgUqYL7nUzew/viewform?usp=sf_link'>
               <button className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
               <p>Express Interest</p>
               <BsArrowRight className='mt-[2px]'/>
               </button>
              </a>

             <a href='https://healfoundation.in/'>
         <button className="ml-6 mt-[20px] heroSectionSecondButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                 <p>Learn More</p>
                 <BsArrowRight className='mt-[2px]'/>
         </button>
             </a>

</div>

        </div>
        )
      }
    </div>
    
   </div> 
   
  </div>
  );
}

export default Hero
