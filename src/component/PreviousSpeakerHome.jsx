import React from 'react'
import imge1 from "../assets/images2/Dr. Harshvardhan[936].jpg"
import imge2 from "../assets/images2/murlimanhorjoshi-3.jpg"
import imge3 from "../assets/images2/mansukh-mandaviya.jpg"
import imge4 from "../assets/images2/Bharti Pravin Pawar[903].jpg"

import { Link, useNavigate } from 'react-router-dom'
import Previousspeaker from './Previousspeaker';

import { BsArrowRight } from "react-icons/bs";

function PreviousSpeakerHome() {

  const navigate = useNavigate();

  function onClickHandler(){
    window.location.href = '/previousspeaker';
  }

  return (
    <div>
        <section id="" className="relative w-full h-[300px] pt-[20px]">
           
             <h1 className=" text-center text-[#888f90] font-extrabold text-[150px] opacity-40">SPEAKERS</h1>
             <p className="absolute  top-[100px] left-[290px] text-[#07061d] font-bold text-[70px]">Previous Key Speakers</p>

        </section>

        <section>
            <div className="flex flex-row  mx-auto  ">
                   <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imge1} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr. Harshvardhan</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[60px]  text-center z-15 ">Minister of Earth Sciences,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[30px] left-[70px]  text-center z-15 ">Government of India</p>
                    </div>
                      
                   </div>

                   <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imge2} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Shree Murli Manohar Joshi</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[90px] text-center z-15 ">Former Minister,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Human Resource Development,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Science and Technology,</p>
                      
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[70px]  text-center z-15 ">Government of India</p>
                    </div>
                      
                   </div>

                   <div className="w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imge3} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Dr. Mansukh Mandaviya</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Hon'ble Union Minister for</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">Health and Family Welfare,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[70px] text-center left-[65px]  z-15 ">Chemicals and Fertilizers</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[50px] left-[80px]  text-center z-15 ">Government of India</p>
                    </div>

                   </div>


                   
                    <div className='w-[20%] h-[450px] flex justify-center items-center'>

                   <button onClick={onClickHandler} className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                     <p>Express Interest</p>
                     <BsArrowRight className='mt-[2px]'/>
                   </button>

                      </div>
                   
                  
                </div>
        </section>

    </div>
  )
}

export default PreviousSpeakerHome