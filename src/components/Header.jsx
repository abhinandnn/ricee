import React from 'react'

function Header() {
  return (
    <div className='w-screen absolute backdrop-blur-[10px] z-10'>
    <div className='bg-black bg-opacity-20 text-[1.25rem] text-white h-[4.5rem] flex items-center justify-center relative'>
    <div className=' fixed left-[6.5rem]'>Ricee</div>
    <div className='flex font-gsmt text-[1.0625rem] gap-[3rem]'>
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
    </div>
    </div>
  )
}

export default Header