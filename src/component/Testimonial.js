import React from 'react'
import img1 from "../assets/Dr-Swadeep-Srivastava-1.png"
import img2 from "../assets/R-Shankar-1.png"
import img3 from "../assets/Divya-mam.jpg"
import img4 from "../assets/CS-Pandav-1.png"
import img5 from "../assets/KG-Suresh.png"
import img7 from "../assets/Manjari-Chandra.png"
import img6 from "../assets/Sony-sangwan.png"
import img8 from "../assets/Dhananjay-JI.png"

function Testimonial() {
  return (
    <div>

           <div className="flex highlight mt-20 flex-row justify-center items-center space-x-4 text-[#07061d] ">
                 <div className="bg-[#07061d] highlightDiv font-bold w-[75px] mt-2 h-1"></div>
                 <h1 className='highlightHeading font-bold text-4xl'>MEET OUR TEAM</h1>
                 <div className="bg-[#07061d] highlightDiv font-bold w-[75px] mt-2 h-1"></div>
              </div> 

        <div className='w-10/12 pt-8 max-w-[1080px] grid grid-cols-3 mx-auto gap-4'>
          <div className='w-full py-4 imagee2 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md '>
             <img src={img1} className='w-[80%] rounded-full'></img>
             <div className=''>
             <h1 className='text-center font-semibold'>Dr. Swadeep Srivastava</h1>
             <p className='text-center'>Founder Chairman</p>
             </div>
          </div>

           <div className='w-full py-4 imagee2 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md '>
             <img src={img2} className='w-[80%] rounded-full'></img>
            <div>
             <h1 className='text-center font-semibold'>Mr. R Shankar</h1>
             <p className='text-center'>President</p>
             </div>
           </div>

            <div className='w-full py-4 imagee2 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md '>
              <img src={img3} className='w-[80%] rounded-full'></img>
             <div>
               <h1  className='text-center font-semibold'>Mrs. Divya Srivastava</h1>
               <p className='text-center'>Secretary</p>
             </div>
            </div>

            <div className='w-full py-4 imagee2 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md'>
              <img src={img4} className='w-[80%] rounded-full'></img>
              <h1 className='text-center font-semibold'>Dr. Chandrakant S Pandav</h1>
              <p className='text-center'>Chairman - Advisory Board</p>
            </div>

            <div className='w-full imagee2 py-4 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md'>
              <img src={img5} className='w-[80%] rounded-full'></img>
              <h1 className='text-center font-semibold'>Prof. K G Suresh</h1>
              <p className='text-center'>Advisor - Communication Cell</p>
            </div>

            <div className='w-full imagee2 py-4 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md'>
              <img src={img6} className='w-[80%] rounded-full'></img>
              <h1 className='text-center font-semibold'>Ms. Soni Sangwan</h1>
              <p className='text-center'>Member-Women Cell</p>
            </div>

            <div className='w-full imagee2 py-4 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md'>
              <img src={img7} className='w-[80%] rounded-full'></img>
              <h1 className='text-center font-semibold'>Dr. Manjari Chandra</h1>
              <p>Member-Nutrition Cell</p>
            </div>

            <div className='w-full imagee2 py-4 flex flex-col space-y-4 shadow-2xl justify-center items-center rounded-md'>
              <img src={img8} className='w-[80%] rounded-full'></img>
              <h1 className='text-center font-semibold'>Mr. Dhananjay Kumar</h1>
              <p className='text-center'>Member-Nutrition Cell</p>
            </div>

        </div>
    </div>
  )
}

export default Testimonial