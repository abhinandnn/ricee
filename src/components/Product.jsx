'use client'
import React, { useState } from 'react'
function Product({background,weight,text1,price}) {
  const [nutri,setNutri]=useState(false)
  return (
    <div className='flex flex-col gap-6 items-center'>
    <div className='bg-cover group mob:rounded-[0.4rem] lg:rounded-[0.6rem] xl:w-[28rem] lg:w-[25rem] mob:w-[20.5rem] mini:w-[17rem] mini:h-[17rem] mob:h-[20.5rem] xl:h-[28rem] lg:h-[25rem] flex flex-col items-center text-white font-gd relative rounded-[1.25rem] w-[31.5rem] h-[31.5rem]' style={{backgroundImage: `url(${background.src})`}}>
<span className={`absolute top-[3.8rem] xl:top-[3.5rem] lg:text-[1.5rem] lg:left-[2.8rem] xl:right-[2rem] xl:left-[3.2rem] left-[3.5rem] xl:text-[1.6rem] lg:top-[3rem] text-[1.75rem] mob:text-[1.2rem] mob:top-[2.4rem] mob:left-[2.2rem] mini:text-[0.9rem] mini:left-8 mini:top-8 ${nutri?'opacity-60':''}`}>Rs. {price}</span>
<div className='flex flex-col absolute bottom-0 gap-2 bg-gradient-to-t xl:w-[28rem]  mob:rounded-[0.4rem] lg:rounded-[0.6rem] mob:w-[20.5rem] w-[31.5rem] lg:w-[25rem] rounded-[1.25rem] p-[1.9rem] mini:p-4 lg:p-[1.5rem] mini:w-[17rem] from-black via-black/50 to-transparent'>
<div className='text-[2.4rem] lg:text-[2rem] mob:text-[1.63rem] mini:text-[1.4rem]'>
{text1}
</div>
<div className='text-[1.2rem] lg:text-[1rem] flex flex-col  mob:text-[0.82rem]'>
    <span >Price : Rs. {price}<span className='tracking-widest'>+</span>delivery charges</span>
    {weight===2&&<span>Minimum order : 2kg</span>}
    <div className={` flex flex-col transition-all transform duration-300 ${nutri?'opacity-100 h-auto visible pt-6 md:pt-4 mob:pt-3 translate-y-[0%]':'invisible opacity-0 h-0 translate-y-[100%]'}`}>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Nutritional Facts (100gm)</span>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Energy: 391 kcals</span>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Protein: 9.60 gm</span>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Carbs: 92.90 gm</span>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Iron: 38.20 mg</span>
<span className={!nutri?'invisible opacity-0':'opacity-100 visible'}>Zinc: 3.70 mg</span>


    </div>
</div>
    </div>git 
<button onClick={()=>setNutri(!nutri)} className='absolute bottom-3 text-[1rem] mob:text-[0.82rem] mob:right-4 right-6 border-b border-b-white'>{nutri?'Show less':'Nutritional Facts'}</button>
    </div>
    <button className={`transition-hover duration-300 hover:bg-white hover:text-mar border border-mar w-[10.75rem] h-[3.6875rem] mob:w-[7rem] mob:h-[2.8rem] mob:text-[0.76rem] bg-mar rounded-[0.75rem] text-[1rem] text-white`}>Buy now</button>

    </div>
  )
}

export default Product