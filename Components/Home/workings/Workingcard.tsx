import Image from 'next/image';
import React from 'react'

type Props={
    image:string;
    title:string;
    description:string;
    index:number;
}
function Workingcard({image,title,description,index}:Props) {
  return (
    <div
      data-aos='fade-right'
      data-aos-anchor-placement="top-center"
      data-asos-delay={index*100}>
    <div  className='flex justify-center items-center'>
          <div>
             <Image src={image} alt='image'
              width={250} height={250} className=' object-cover '/>
            
          </div>  
          <h1 className='text-[16px] font-extrabold text-gray-700 dark:text-gray-300'>{title}</h1> 
    </div>
    <p className='text-[14px] text-gray-500 dark:text-gray-400 sm:w-[75%]  mt-6 leading-4
    w-[90%] 
    '>{description}</p>
    <p className='mt-4 font-bold text-indigo-900 dark:text-indigo-400 cursor-pointer
    hover:text-indigo-600 transition-all duration-300 text-center 
    '>Start Earning &rarr;</p>
    </div>
  )
}

export default Workingcard