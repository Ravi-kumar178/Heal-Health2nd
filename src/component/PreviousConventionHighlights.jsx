import React from 'react'

import image5 from "../assets/dreamstime_xxl_148214336_web.jpg"
import image7 from "../assets/Image1 (1).png"
import image9 from "../assets/user[795].png";
import { BiCalendarCheck } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdAccessibility } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";


function PreviousConventionHighlights() {
  return (
    <div>
        <section className='highlightStyle min-h-full' >
           <div className="relative higlightFirstFlex flex flex-col justify-center  items-center space-y-[8%] pb-50">
            
              <div className="flex highlight mt-20 flex-row justify-center items-center space-x-4 text-[#07061d] ">
                 <div className="bg-[#07061d] highlightDiv font-bold w-[75px] mt-2 h-1"></div>
                 <h1 className='highlightHeading font-bold text-3xl'>Highlights of Previous Conventions</h1>
                 <div className="bg-[#07061d] highlightDiv font-bold w-[75px] mt-2 h-1"></div>
              </div>
             <div className=" space-x-20 flex-wrap flex justify-center items-center -pl-8 ">
                <div className="flex flex-col justify-center items-center space-y-1 pl-20 text-[#07061d] font-bold text-2xl">
                    <BiCalendarCheck size={60}/>
                    <p className="pt-2">7+</p>
                    <p>Conventions</p>
                 </div>

                 <div className="flex flex-col justify-center items-center space-y-1 text-[#07061d] font-bold text-2xl">
                    <BsPersonWorkspace size={60}/>
                    <p className="pt-2">200+</p>
                    <p>Workshops</p>
                 </div>

                 <div className="flex flex-col justify-center items-center space-y-1 text-[#07061d] font-bold text-2xl">
                    <MdAccessibility size={60}/>
                    <p className="pt-2">1000+</p>
                    <p>Nurtured</p>
                 </div>


                 <div className="flex flex-col justify-center items-center space-y-1 text-[#07061d] font-bold text-2xl">
                    <FaPeopleGroup size={60}/>
                    <p className="pt-2">1000+</p>
                    <p>Participants</p>
                 </div>

               </div>

            </div>
          </section>
    </div>
  )
}

export default PreviousConventionHighlights