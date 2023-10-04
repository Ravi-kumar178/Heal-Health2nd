import React from 'react'

import imge1 from "../assets/images4/Ranveer Allahabdia.jpg"
import imge2 from "../assets/images4/dr manoj Das.jpg"
import imge3 from "../assets/images4/Shikha Singh.jpeg"
import imge4 from "../assets/images4/Dr Manoj yogacharya.jpg"
import imge5 from "../assets/images4/Ashdin Doctor.jpg"
import imge6 from "../assets/images4/Dr. Vikram Venkataswaran.jpg"
import imge7 from "../assets/images4/Urmi Chanda1.jpg"
import imge8 from "../assets/images4/Dr. Mandeep Dahiya.jpg"
import imge25 from "../assets/images4/RUjuta Diwaker.jpg"
import imge26 from "../assets/images4/Dr. Deepankar.jpg"

import Navbar from './navbar'
import Footer from './Footer'

function Attendee() {
  return (
    <div className='overflow-x-hidden'>

      

          <section id="" className="relative w-full h-[300px] pt-[20px]">
             
             <h1 className=" text-center text-[#888f90] font-extrabold  text-[150px] opacity-40">ATTENDEES</h1>
             <p className="absolute  top-[80px] left-[170px] text-[40px]  md:text-[70px] sm:text-[50px]   text-[#13174d] font-bold ">New Age Media Attendees</p>

           
              
          </section>

      
          <section id="speakers" className="my-10 w-[1300px]">
               <div className="flex flex-row flex-wrap  mx-auto  ">
                  <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge1} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[40px] mt-2 z-5">Dr. Ranveer Allahabadi</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[60px] text-center z-15 ">Health & Fitness,Youtuber-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Beer & Biceps</p>
     
                   </div>
                     
                  </div>

                  <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge2} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[80px] mt-2 z-5">Dr. Manoj Das</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Skin/Health & Beauty Youtuber-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. ManojDasJaipur</p>
                   </div>
                     
                  </div>

                  <div className="w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge3} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[65px] mt-2 z-5">Dr. Shikha Singh</h1>                  
                      <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Clinical Nutritionist/Youtuber-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[90px] text-center z-15 ">Dr. Shikha Singh</p>

                   </div>
                     
                  </div>

                  <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge4} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Manoj Yogacharya</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[70px] text-center z-15 ">Yoga Specialist & Youtuber-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[85px] text-center z-15 ">Dr. Manoj Yogacharya</p>
                   </div>
                     
                  </div>
               </div>
               <div className="flex flex-row flex-wrap-reverse -translate-x-4 mt-8 mx-auto space-x-4 ">
               <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge5} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Dr.Asthin Doctor</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[50px] text-center z-15 ">Health & Lifestyle Influencer-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[80px] text-center z-15 ">The Habit Coach</p>
                   </div>
                     
                  </div>

                  <div className="w-[23%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge6} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[20px] mt-2 z-5">Dr. Vikram Venkatashwaran</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[45px] text-center z-15 ">Healthcare Influencer & Podcaster-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[100px] text-center z-15 ">Healthcare India</p>

                   </div>
                     
                  </div>

                  <div className="w-[22%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge7} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[60px] mt-2 z-5">Ms. Urmi Chanda</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[40px] text-center z-15 ">Clinical Psychologist & Podcaster-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[60px] text-center z-15 ">The Doctor Happy Podcast</p>
               
                   </div>
                     
                  </div>

                  <div className="w-[23%] h-[450px] translate-x-1 imagee2 rounded-md mx-auto relative group">
                    <img src={imge8} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                   <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[50px] mt-2 z-5">Dr. Mandeep Dahiya</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[62px] text-center z-15 ">Wellness & Health Youtuber</p>
                   </div>
                     
                  </div>
               </div>

               <div className="grid w-[650px] grid-cols-2 mx-auto mt-8">

                 <div className="w-[90%] h-[450px]  imagee2 rounded-md mx-auto relative group">
                    <img src={imge25} className="w-[76%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[55px] mt-2 z-5">Ms. Rujuta Diwaker</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[80px] text-center z-15 ">Nutrionist & Youtuber</p>

                    </div>
                 </div>

                 <div className="w-[90%] h-[450px]  imagee2 rounded-md mx-auto relative group ">
                    <img src={imge26} className="w-[80%] mx-auto mt-2  group-hover:opacity-80 h-[230px] imgee" ></img>
                    <div className="flex flex-col  left-2  ml-[50px] space-y-3">
                     <h1 className="absolute text-[#1c1e56]  font-bold text-center text-xl bottom-[145px] left-[70px] mt-2 z-5">Dr. Deewankar</h1>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[110px] left-[77px] text-center z-15 ">Wellness Podcaster-</p>
                     <p className="absolute text-[#4b4b52] font-normal text-[14px] bottom-[90px] left-[85px] text-center z-15 ">The Habit Coach</p>
                    </div>
                     
                  </div>

                  
               </div>
          </section>

         
    </div>
  )
}

export default Attendee
