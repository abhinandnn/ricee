'use client'
import React, { useState } from 'react'
import hamburgerimg from '../../public/hamburger.svg'
import Image from 'next/image'
function Header() {
        const[hamburger,setHamburger]=useState(false);
  return (
    <div className='w-screen absolute z-10 '>
    <div className='bg-black backdrop-blur-[10px] bg-opacity-20 text-[1.25rem] text-white px-4 h-[4.5rem] flex items-center sm:justify-end justify-center relative'>
    <div className=' fixed left-[6.5rem] lg:left-[5rem] sm:text-[1.75rem] mob:left-[1rem] md:left-[2rem]'>Ricee</div>
    <div className='flex font-gsmt text-[1.0625rem] sm:hidden gap-[3rem]'>
        <div> 
About
        </div>
        <div>
Location
        </div>
        <div>
Products
        </div>
    </div>
<Image onClick={()=>setHamburger(!hamburger)} className='hidden sm:inline cursor-pointer' src={hamburgerimg}/>
    </div>
    <div className={`hidden sm:${hamburger ? 'flex' : 'hidden'} w-[10rem] gap-2 bg-white text-[1.25rem] flex-col absolute right-0`}>
    <div className='py-[0.3rem] pl-[1rem]'> 
About
        </div>
        <div className='py-[0.3rem] pl-[1rem]'>
Location
        </div>
        <div className='py-[0.3rem] pl-[1rem]'>
Products
        </div>
    </div>
    </div>
  )
}

export default Header