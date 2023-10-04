import React from 'react'
import img from "../assets/aboutupdate.jpg"
import Testimonial from './Testimonial'

function About() {
  return (
    <div>
        
        
        <img src={img} alt=''></img>
        <div className='flex flex-col justify-between items-center w-[60%] py-5 space-y-5 mx-auto px-10'>
            <h1 className='font-bold text-center text-3xl text-[#07061d]'>About NHWIC</h1>
            <p className='font-medium text-[18px] text-center text-[#07061d] opacity-90'>The National Health Writers & Influencers Convention-2023 is a premier gathering of healthcare Writers, Influencers, and Thought Leaders. This two day event aims to equip attendees with the latest insights and tools to navigate the ever-evolving landscape of healthcare writing. Explore cutting edge topics, engage with industry experts, and honor the champions of rural healthcare.</p>
        </div>

         <Testimonial/> 

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.256055834734!2d77.29405150959123!3d28.592094275585374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce485bddcff7b%3A0x654cd4801e3f29e!2sStar%20City%20Mall%2C%20Mayur%20Place%2C%20Mayur%20Vihar%2C%20Delhi%2C%20110091!5e0!3m2!1sen!2sin!4v1696405845527!5m2!1sen!2sin" className='w-full h-[450px]' title=''  allowfullscreen="" loading="lazy"  referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default About