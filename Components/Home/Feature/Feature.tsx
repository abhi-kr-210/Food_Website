import React from 'react'
import FeatureCard from './FeatureCard'

import { items } from './FeatureItems'
function Feature() {
  return (
    <div className='pt-16 pb-16'>
       <div>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-center font-extrabold text-black
             text-shadow-sm  w-[80%] mx-auto sm:w-[100%]
            dark:text-white '>
              Experience Excellence <span className='text-amber-500'>Through Our Features</span> 
            </h1>
       </div>
       <div className='w-[80%] mx-auto grid grid-cols-1  sm:grid-cols-2
        lg:grid-cols-3 gap-10 pt-16'>
           {
               items.map((ele,i)=>(
                
                  <FeatureCard key={i}
                   image={ele.image} 
                   title={ele.title} 
                   description={ele.description}
                   index={i}/>
               ))
           }
       </div>
    </div>
  )
}

export default Feature