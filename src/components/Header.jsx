'use client'
import React, { useState } from 'react'
import hamburgerimg from '../../public/hamburger.svg'
import Image from 'next/image'
import { Link } from 'react-scroll'
import logo from '../../public/logo.png'
import logo1 from '../../public/logo1.jpg'
function Header() {
        const[hamburger,setHamburger]=useState(false);
  return (
    <div className='w-screen fixed z-20'>
    <div className='bg-black backdrop-blur-[10px] bg-opacity-20 text-[1.25rem] text-white px-4 h-[4.5rem] flex items-center sm:justify-end justify-center relative'>
    <div className=' fixed left-[6.5rem] lg:left-[5rem] sm:text-[1.5rem] mob:left-[1rem] md:left-[2rem]'>       <Link to="hero" spy={true} smooth={true} offset={0} duration={200} className='cursor-pointer'>
       <div className='flex items-center gap-2 leading-none'><Image src={logo} className='h-[3.2rem] w-[3.2rem]'/> P&B  Agro  Foods
       </div></Link></div>
    <div className='flex font-gsmt text-[1.0625rem] sm:hidden gap-[3rem]'>
    <Link className='cursor-pointer' to="about" spy={true} smooth={true} offset={0} duration={200}>
About
</Link>
<Link className='cursor-pointer' to="products" spy={true} smooth={true} offset={0} duration={200}>
Products
</Link>
<Link className='cursor-pointer' to="location" spy={true} smooth={true} offset={0} duration={200}>

Location
</Link>
    </div>
<Image onClick={()=>setHamburger(!hamburger)} className='hidden sm:inline cursor-pointer' src={hamburgerimg}/>
    </div>
    {<div  className={`hidden sm:flex sm:${hamburger ? 'w-[10rem]' : 'w-[10rem] right-[-10rem]'} gap-2 bg-white text-[1.25rem] flex-col absolute right-0 transition-all duration-300 ease-in`}>
    <Link to="about" spy={true} smooth={true} offset={0} duration={200} onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem]'>
About
</Link>
<Link to="products" spy={true} smooth={true} offset={0} duration={200} onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem]'>
Products
</Link>
<Link to="location" spy={true} smooth={true} offset={0} duration={200} onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem]'>
Location
</Link>
    </div>}
    </div>
  )
}

export default Header