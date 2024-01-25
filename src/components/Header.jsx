'use client'
import React, { useState } from 'react'
import hamburgerimg from '../../public/hamburger.svg'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
        const[hamburger,setHamburger]=useState(false);
  return (
    <div className='w-screen fixed z-10 '>
    <div className='bg-black backdrop-blur-[10px] bg-opacity-20 text-[1.25rem] text-white px-4 h-[4.5rem] flex items-center sm:justify-end justify-center relative'>
    <div className=' fixed left-[6.5rem] lg:left-[5rem] sm:text-[1.75rem] mob:left-[1rem] md:left-[2rem]'>       <Link href="#hero" >
Ricee
</Link></div>
    <div className='flex font-gsmt text-[1.0625rem] sm:hidden gap-[3rem]'>
        <Link href="#about" >
About
</Link>
        <Link href={'#location'}>
Location
</Link>
<Link href={'#products'}>
Products
</Link>
    </div>
<Image onClick={()=>setHamburger(!hamburger)} className='hidden sm:inline cursor-pointer' src={hamburgerimg}/>
    </div>
    {<div  className={`hidden sm:flex sm:${hamburger ? 'w-[10rem]' : 'w-[10rem] right-[-10rem]'} gap-2 bg-white text-[1.25rem] flex-col absolute right-0 transition-all duration-600 ease-in`}>
    <Link onClick={()=>setHamburger(!hamburger)} href="#about" className='py-[0.3rem] pl-[1rem]'>
About
</Link>
        <Link onClick={()=>setHamburger(!hamburger)} href={'#location'} className='py-[0.3rem] pl-[1rem]'>
Location
</Link>
<Link onClick={()=>setHamburger(!hamburger)} href={'#products'} className='py-[0.3rem] pl-[1rem]'>
Products
</Link>
    </div>}
    </div>
  )
}

export default Header