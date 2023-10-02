import React from 'react'

import imgeee1 from "../assets/images3/Durgesh Nandan Jha.jpg"
import imgeee2 from "../assets/images3/Vishwanath Pilla.jpg"
import imgeee3 from "../assets/images3/Afsha Yasmeen.jpg"


import { BsArrowRight } from "react-icons/bs";
import { useNavigate , Link} from 'react-router-dom';

function PreviousattendeeHome() {
    
  const navigate = useNavigate();

  function onClickHandler1(){
    window.location.href = '/previousattendee';
  }
  
  

  return (
  <div>

    <div>
         <section id="" className="relative w-full h-[300px] pt-[20px]">
           
             <h1 className=" text-center text-[#888f90] font-extrabold text-[150px] opacity-40">Attendee</h1>
             <p className="absolute  top-[100px] left-[285px] text-[#07061d] font-bold text-[70px]">Previous Key Attendee</p>

         </section>

          <section>
             <div className="flex flex-row  mx-auto  ">
                   <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imgeee1} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                     <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[30px] mt-2 z-5">Mr. Durgesh Nandan Jha</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Senior Assistant Editor,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[100px] text-center z-15 ">Times of India</p>              
                   </div>
              </div>

                   <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imgeee2} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                     <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[75px] mt-2 z-5">Vishwanath Pilla</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[110px] text-center z-15 ">Assistant Editor,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[96px] text-center z-15 ">The Economics Time</p>

                     </div>
                      
                   </div>

                   <div className="w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                     <img src={imgeee3} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                      <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[65px] mt-2 z-5">Afshan Yasmeen</h1>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[100px] text-center z-15 ">Deputy Editor,</p>
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[110px] text-center z-15 ">The Hindu</p>
                    </div>

                   </div>


                   
                      <div className='w-[20%] h-[450px] flex justify-center items-center'>

                     
                       <button onClick={onClickHandler1} className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                            <p>Express Interest</p>
                            <BsArrowRight className='mt-[2px]'/>
                        </button>
                      

                      {/* <Link to={"/previousattendee"}>
                         <button className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-2  flex flex-row items-center space-x-2 ">
                           <p>Express Interest</p>
                           <BsArrowRight className='mt-[2px]'/>
                          </button>
                       </Link>
                      */}
                      </div>
                   
                  
                </div>
            </section>

    </div>

    </div>
  );
}

export default PreviousattendeeHome