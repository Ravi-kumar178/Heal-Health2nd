import React from 'react'
import image10 from "../assets/AI Image for Logos4[881].jpg";


import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img15 from "../assets/images/15.png";
import img16 from "../assets/images/16.png";
import img18 from "../assets/images/18.png";
import img10 from "../assets/images/10.png"

import img1 from "../assets/images/ministry of family and health welfare logo[958].jpg"
import img2 from "../assets/images/nin[959].png"


import { FaWallet } from "react-icons/fa";

function PresentPatner() {
  return (
  
    <div className='overflow-x-hidden'>

<section id="partners" className="previous-industry-associates bg-slate-100 min-h-fit py-[50px] ">
               <div className="relative flex flex-col justify-center items-center space-y-10 ">
      
                <div className="flex  flex-row justify-center items-center space-x-4 text-[#1c1e56] text-3xl font-semibold ">
                 <div className="bg-[#1c1e56] w-[75px] mt-2 h-[2px]"></div>
                 <h1 className="font-bold">OUR INDUSTRY ASSOCIATES</h1>
                 <div className="bg-[#1c1e56] w-[75px] mt-2 h-[2px]"></div>
                </div>
                  
                  <div className="relative flex flex-col items-center justify-between p-4 space-y-8">
                     <div className=" flex flex-row md:flex-wrap justify-center space-x-[80px] items-center mx-auto">
                       <img src={img1} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img2} className="w-[150px] imagee1 rounded-md h-[90px] bg-white px-4 py-0"></img>
                       <div className="flex justify-center items-center ml-14">
                        <img src={img5} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4 "></img>
                       </div>
                     
                       <img src={img18} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-4"></img>
                       <img src={img10} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-4"></img>
                     </div>

                     <div className=" flex flex-row flex-wrap  justify-center space-x-[80px] items-center mx-auto">
                       <img src={img16} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img6} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-5"></img>
                       <img src={img15} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                     
                     </div>

                  </div>

                  <a href='https://www.healhealth.co.in/'>
                     <button className="flex flex-row justify-center  space-x-2 text-white font-semibold rounded-md items-center mx-auto bg-[#f19c41] py-2 px-6 hover:bg-[#ead6a0] hover:text-[#433ddd] transition-all duration-200">
                       <p className="z-10">Become a Partner</p>
                       <FaWallet/>
                     </button>
                     </a>
                 
               </div>
           </section>

    </div>

  )
}

export default PresentPatner