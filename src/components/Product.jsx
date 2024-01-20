import React from 'react'
function Product({background,weight,text1,text2}) {
  return (
    <div className='bg-cover flex flex-col items-center text-white font-gd relative rounded-[1.25rem] w-[31.5rem] h-[31.5rem]' style={{backgroundImage: `url(${background.src})`}}>
<span className='absolute top-[3.6rem] right-[2.5rem] text-[2.4rem]'>{weight}Kg</span>
<div className='text-[2.4rem]'>
{text1}
</div>
<div className='text-[1.2rem]'>
    {text2}
</div>
    </div>
  )
}

export default Product