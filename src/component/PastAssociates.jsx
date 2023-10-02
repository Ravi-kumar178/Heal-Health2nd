import React from 'react'
import image10 from "../assets/AI Image for Logos4[881].jpg";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.png";
import img15 from "../assets/images/15.png";
import img16 from "../assets/images/16.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpeg";

import { FaWallet } from "react-icons/fa";

function PastAssociates() {
  return (
    <div>
        
        <section id="partners" className="previous-industry-associates bg-slate-100 min-h-fit py-[50px] mt-[100px]">
               <div className="relative flex flex-col justify-center items-center space-y-10 ">
      
                <div className="flex  flex-row justify-center items-center space-x-4 text-[#1c1e56] text-3xl font-semibold ">
                 <div className="bg-[#1c1e56] w-[75px] mt-2 h-[2px]"></div>
                 <h1 className="font-bold">INDUSTRY ASSOCIATES OVER THE YEARS</h1>
                 <div className="bg-[#1c1e56] w-[75px] mt-2 h-[2px]"></div>
                </div>
                  
                  <div className="relative flex flex-col items-center justify-between space-y-4">
                     <div className=" flex flex-row md:flex-wrap justify-center space-x-[80px] items-center mx-auto">
                       <img src={img1} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img2} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-5"></img>
                       <div className="flex justify-center items-center ml-14">
                        <img src={img3} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-2"></img>
                       </div>
                     
                       <img src={img4} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-2"></img>
                       <img src={img5} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-[2px]"></img>
                     </div>

                     <div className=" flex flex-row flex-wrap  justify-center space-x-[80px] items-center mx-auto">
                       <img src={img6} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img7} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-5"></img>
                       <img src={img8} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img9} className="w-[150px] h-[90px] imagee1 rounded-md bg-white p-4"></img>
                       <img src={img10} className="w-[150px] h-[90px] imagee1 rounded-md bg-white p-4"></img>
                     </div>

                     <div className=" flex flex-row flex-wrap justify-center space-x-[80px] items-center mx-auto">
                       <img src={img11} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-2"></img>
                       <img src={img12} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img13} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-2"></img>
                       <img src={img14} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-4"></img>
                       <img src={img15} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-4"></img>
                     </div>

                     <div className=" flex flex-row flex-wrap  justify-center space-x-[80px] items-center mx-auto">
                       <img src={img16} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img17} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-5"></img>
                       <img src={img18} className="w-[150px] imagee1 rounded-md h-[90px] bg-white p-4"></img>
                       <img src={img19} className="w-[150px]  imagee1 h-[90px] rounded-md bg-white p-4"></img>
                       <img src={img20} className="w-[150px] imagee1 h-[90px] rounded-md bg-white p-4"></img>
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

export default PastAssociates