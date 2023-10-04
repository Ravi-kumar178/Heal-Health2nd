import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    function onClickHandler(){
        window.location.href="/termsandconditions";
    } 

    function onClickHandler1(){
      window.location.href="/about"
    }
    

  return (
    <div className='flex mx-auto flex-row justify-between items-center pl-10 py-5 footStyle'>

        <h1 className='font-medium'>Developed by <span className='text-[#1c1e56] font-bold'>HEAL HEALTH</span></h1>

        <div className='flex mx-auto flex-row justify-between items-center space-x-5 '>
          <h1 onClick={onClickHandler1} className='footerSecondHeading pr-12 hover:text-[#1c1e56] transition-all duration-200 font-medium'>ABOUT HWIC</h1>
          <h1 onClick={onClickHandler} className='footerSecondHeading pr-12 hover:text-[#1c1e56] transition-all duration-200 font-medium'>TERMS & CONDITIONS</h1>
          <h1 onClick={onClickHandler} className='footerSecondHeading pr-12 hover:text-[#1c1e56] transition-all duration-200 font-medium'>PRIVACY POLICY</h1>
        </div>
       

    </div>
  )
}

export default Footer