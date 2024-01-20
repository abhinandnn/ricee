import React from 'react'
import Header from './Header'
import background from '../../public/topBanner.png'
function TopBanner() {
  return (
    <div className="relative h-[41.5rem] bg-cover" style={{backgroundImage: `url(${background.src})`  }}>
      <div className='text-[3.5rem] text-white min-w-[49rem] w-[54rem] px-[6.5rem] pt-[9.4rem]'>Grains of Goodness: Elevate Your Plate with Our Premium Rice Selection!</div>
      <button className={`w-[13.875rem] h-[4rem] bg-mar rounded-[0.75rem] text-[1rem] text-white mx-[6.5rem] mt-[6rem]`}>Order now</button>
    </div>
  )
}

export default TopBanner