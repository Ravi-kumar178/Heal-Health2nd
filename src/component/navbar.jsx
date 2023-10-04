import React from 'react'
import { Link } from 'react-router-dom'

import img from "../assets/Final Logo of 8th National Health Writers & Influencers Convention-2023[787].png"

function Navbar() {
  return (
    <nav className=' bg-[#eeecc4] sticky top-0 z-10 max-h-fit min-w-max sm:w-full py-3 overflow-x-hidden '>

    <div className='flex w-11/12 navContainer mx-auto max-w-[1080px] flex-row justify-between items-center'>

      <img src={img} className='imgNav h-[60px] hidden lg:flex '></img>

      <div className='flex navLinks flex-row flex-wrap space-x-4 items-center font-medium text-[18px]'>
        <Link to="/" className=' pl-4'>Home</Link>
        
        <Link to="/about">About</Link>

        <a href='https://healfoundation.in/heal-national-health-writers-and-editors-network'>Previous Conventions</a> 
     
        <Link to="/agenda">Agenda</Link>

        <Link to="/speaker">Speakers</Link>

        <Link to="/attendee">Attendee</Link>
     
        <Link to="/partner">Partner</Link>

        <Link to="/contact">Contactus</Link>
     
     
      </div>

    </div>
          
     
    </nav>
  )
}

export default Navbar
