import React from 'react';
import img from "../assets/AI Image for Logos[877].jpg"
import img1 from "../assets/Shayona-Banner-Page-Banner-Contact-us.jpg";
import img2 from "../assets/contactus-banner.jpg"
import { FaHome } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

import img3 from "../assets/10.png"
import img4 from "../assets/11.png"
import img5 from "../assets/12.png"


const Contactus = () => {
  return (
 
  <div className='bg-gray-100'>

    <div className='relative'>
     <img src={img2} className=' min-w-full'></img>
     <div className='absolute top-20 left-8 text-white flex flex-col space-y-10 font-bold text-xl'>
       <h1 className='text-3xl'>Contact Us</h1>
        
       <div className='flex flex-row flex-wrap space-x-4'>

         <button className='flex flex-row flex-wrap justify-start space-x-2 hover:text-[#ff5a3c] transition-all duration-150'>
            <FaHome color='#ff5a3c' size={30} />
            <p className='mt-[5px] '>Home</p>
         </button>

         <BiChevronRight size={30} className='mt-[5px]'/>
         <h1 className='mt-[5px]'>Contact</h1>

       </div> 
      

     </div>
    </div>

    <div className='max-w-[1250px] mx-auto flex justify-between items-center flex-wrap my-[130px] flex-row'>
      
      <div className='flex flex-col justify-center items-center space-y-8 contactBox py-16 px-28'>
          <img src={img3}></img>

         <div className=' flex flex-col space-y-4 justify-center items-center'>
         <h1 className='font-bold text-2xl text-[#04050f]'>Email Address</h1>
          <div className='text-[16px]'>
           <p>xyz@gmail.com</p>
           <p>asdf@gmail.com</p>
         </div> 
         </div> 
          
         
      </div>

      <div className='flex flex-col justify-center items-center space-y-8 contactBox py-16 px-28'>
          <img src={img4}></img>
          <div className=' flex flex-col space-y-4 justify-center items-center'>
            <h1 className='font-bold text-2xl text-[#04050f]'>Phone Number</h1>
            <div className='text-[16px]'>
              <p>+91 1111111111</p>
              <p>+91 2222222222</p>
            </div>
          </div>
        </div>
      

       <div className='flex flex-col justify-center items-center space-y-8 contactBox py-16 px-28'>
          <img src={img5}></img>
          <div className=' flex flex-col space-y-4 justify-center items-center'>
           <h1 className='font-bold text-2xl text-[#04050f]'>Office Address</h1>
           <div className='text-[16px]'>
             <p>Star-City Mall,Mayur Vihar</p>
             <p>New Delhi</p>
           </div>
          </div>
       
       </div>

    </div> 
    

    <div className="min-h-screen flex justify-center items-center ">
      
      <div className="bg-white p-8 rounded shadow-lg w-full">
        <h2 className="text-2xl text-[#04050f] font-bold formHeading mb-6">Get a Quote</h2>
        <form>
          <div className='grid grid-cols-2 gap-5'>
          <div className="mb-4 relative">
            <label className="block text-gray-600 font-medium mb-2">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your First Name"
            />
            <img src={img} className='h-6 w-6 absolute top-10 right-2'></img>
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-600 font-medium mb-2">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your Last Name"
            />
            <img src={img} className='h-6 w-6 absolute top-10 right-2'></img>
          </div>

         
          </div>

          <div className='grid grid-cols-2 gap-5'>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-600 font-medium mb-2">Contact Number</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your number..."
            />
            <img src={img} className='h-6 w-6 absolute top-10 right-2'></img>
          </div>

         
          </div>
         
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
         
          <div className="mb-4 flex flex-row items-center space-x-4">
            <input type="checkbox" id="myCheckbox" class="custom-checkbox font-medium text-gray-600" />
            <label for="myCheckbox" className='custom-label className="block text-gray-600  font-medium mb-2"'>Save my name, email, and website in this browser for the next time I comment.</label>

          </div>

          <button
            type="submit"
            className="ml-6 mt-[20px] heroSectionButton px-6 font-normal rounded-md  text-xl py-1  flex flex-row items-center space-x-2 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    <div className='max-w-[1150px] w-12/13  mx-auto min-h-fit py-[60px] flex flex-wrap justify-center space-x-24  items-center '>
     
       <p className='text-4xl font-bold'>For any query: </p>

    
    <div className='relative'>
         <input type='email' name='email' placeholder='Email*' className='h-16 w-[300px] '/>
        <a href='mailto:bhardwajravi2025@gmail.com'>
         <div className='bg-[#ff5a3c] flex justify-center items-center h-16 w-[50px] absolute top-0 right-0'>
          <BsFillSendFill size={30} className='text-white'/>
         </div>
         </a> 
       </div>
   
       
       
    </div>

  </div>
   
  );
};

export default Contactus;
