import React from 'react'
function Product({background,weight,text1,text2}) {
  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className='bg-cover mob:rounded-[0.4rem] lg:rounded-[0.6rem] xl:w-[28rem] lg:w-[25rem] mob:w-[20.5rem] mini:w-[17rem] mini:h-[17rem] mob:h-[20.5rem] xl:h-[28rem] lg:h-[25rem] flex flex-col items-center text-white font-gd relative rounded-[1.25rem] w-[31.5rem] h-[31.5rem]' style={{backgroundImage: `url(${background.src})`}}>
<span className='absolute top-[3.6rem] xl:top-[3rem] lg:text-[2rem] xl:right-[2rem] right-[2.5rem] text-[2.4rem] mob:text-[1.63rem] mob:top-[2.4rem] mob:right-[1.6rem] mini:text-[1.4rem] mini:right-5 mini:top-8'>{weight}Kg</span>
<div className='flex flex-col absolute bottom-0 gap-2 items-center bg-gradient-to-t xl:w-[28rem]  mob:rounded-[0.4rem] lg:rounded-[0.6rem] mob:w-[20.5rem] w-[31.5rem] lg:w-[25rem] rounded-[1.25rem] p-[1.5rem] mini:w-[17rem] from-black via-transparent to-transparent'>
<div className='text-[2.4rem] lg:text-[2rem] mob:text-[1.63rem] mini:text-[1.4rem]'>
{text1}
</div>
<div className='text-[1.2rem] lg:text-[1rem] mob:text-[0.82rem]'>
    {text2}
</div>
    </div>
    </div>
    <button className={`w-[10.75rem] h-[3.6875rem] mob:w-[7rem] mob:h-[2.8rem] mob:text-[0.8rem] bg-mar rounded-[0.75rem] text-[1rem] text-white`}>Buy now</button>

    </div>
  )
}

export default Product