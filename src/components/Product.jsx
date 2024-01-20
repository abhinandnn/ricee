import React from 'react'
function Product({background,weight,text1,text2}) {
  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className='bg-cover flex flex-col items-center text-white font-gd relative rounded-[1.25rem] w-[31.5rem] h-[31.5rem]' style={{backgroundImage: `url(${background.src})`}}>
<span className='absolute top-[3.6rem] right-[2.5rem] text-[2.4rem]'>{weight}Kg</span>
<div className='flex flex-col absolute bottom-0 gap-2 items-center bg-gradient-to-t w-[31.5rem] rounded-[1.25rem] p-[1.5rem] from-black via-transparent to-transparent'>
<div className='text-[2.4rem] '>
{text1}
</div>
<div className='text-[1.2rem]'>
    {text2}
</div>
    </div>
    </div>
    <button className={`w-[10.75rem] h-[3.6875rem] bg-mar rounded-[0.75rem] text-[1rem] text-white`}>Buy now</button>

    </div>
  )
}

export default Product