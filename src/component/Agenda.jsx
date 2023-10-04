import React from 'react'

import image6 from "../assets/360_F_256595804_Z7E7oM7QNb9ntPfYpzaCh0fgVm5Gj4k9.jpg";
import Footer from './Footer';
import Navbar from './navbar';

function Agenda() {
  return (
    <div>

      
       
       <div id="Agenda" className="relative ">
              <img src={image6} alt="" className="w-full h-[350px] "></img>
              <div className="flex flex-row justify-center space-x-2 mt-8 items-center ">
                <div className="w-[50px] mt-1 h-[3px] bg-[#07061d]   font-bold"></div>
                <h1 className="text-[#07061d] font-bold   text-2xl">Agenda</h1>
                <div className="w-[50px] mt-1 h-[3px] bg-[#07061d]  font-bold"></div>
              </div>

              <div className=" -z-10  mx-auto">
                 <div className="feature1 footStyle h-[100px] w-[1080px] mx-auto flex justify-center items-center text-[#07061d] font-bold text-[32px]">Track 1</div>
                 
                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">08:30 - 09:30 Hrs</p>
                    <div className="flex items-center  text-[#387cf2]  font-bold text-2xl">Registration</div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf2Tcg7GPweYLIE89eR98cd1MuPhQvRNS1RpccgUqYL7nUzew/viewform?usp=sf_link'>
                      <button className=" register py-2 ml-32 px-8 text-white rounded-md  text-xl hover:bg-white hover:text-[#387cf2] transition-all duration-200">
                        <p className='font-medium'>Register Now</p>
                      </button>
                      </a>  
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">09:30 - 10:10 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">Tb Elimination - Where Are We?</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">10:15 - 10:55 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">AI in Healthcare - Navigating Ethical Issues</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">10:55 - 11:20 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">Medicine and Meditation: Bridging the Gap</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">11:25 - 12:05 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">Deciphering NMC Guidelines: Challenges and Solutions.</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">12:10 - 12:30 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">HealthTech: Revolutionizing Disease Management.</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">12:35 - 01:05 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">A Holistic Approach to Anti-aging.</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[220px] justify-center items-center font-bold text-2xl">01:10 - 01:50 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl pl-2">New-age Digital Therapeutics: Shaping the Future of Healthcare.</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">01:55 - 02:30 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">The A, B, C, and D of Cardiovascular Health</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[120px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">01:55 - 02:30 Hrs</p>
                    <div className="flex items-center  text-[#387cf2] font-bold text-2xl">Post-Covid Era Hygiene Practices: Unveiling the Essentials</div>
                 </div>

                 <div className="bg-white w-[1080px] mx-auto h-[160px] px-10 items-center flex flex-row border space-x-[150px]">
                    <p className="flex w-[200px] justify-center items-center font-bold text-2xl">01:55 - 02:30 Hrs</p>
                    <div className="flex flex-col mt-4 items-start  text-[#387cf2]  ">
                      <p className="text-2xl my-4 font-bold">Nutrition Myths Debunked:</p>
                      <p className="text-xl text-[#606061] font-semibold">- Artificial Sweeteners: The Truth Revealed</p>
                      <p className="text-xl text-[#606061] font-semibold">- Intermittent Fasting: Fact or Fad?</p>
                      <p className="text-xl pb-4 text-[#606061] font-semibold">- Diabetes Remission: A Comprehensive Guide</p>
                    </div>
                 </div>

              </div>
              
                
           </div>
      
         
        
    </div>
  )
}

export default Agenda
