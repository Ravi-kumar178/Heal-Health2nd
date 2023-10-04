import React from 'react'
import logoImg from "../assets/Final Logo of 8th National Health Writers & Influencers Convention-2023[787].png"

function FirstFooter() {
  return (
    <div>
        <section className='w-11/12 max-w-[1080px] grid grid-cols-4 mx-auto'>
            <div className='flex flex-col space-y-2 '>
               <img src={logoImg} className='h-[30px] w-[60px]'></img>
               <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
               <button>Buy Now</button>
            </div>
        </section>
    </div>
  )
}

export default FirstFooter