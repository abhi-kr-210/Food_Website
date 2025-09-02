import Image from 'next/image';
import React from 'react'

type props={
    image:string;
    title:string;
    description:string;
    index:number;
}
function FeatureCard({image,title,description,index}:props) {
  return (
    <div 
    data-aos='fade-up'
    data-aos-anchor-placement="top-center"
    data-asos-delay={index*100}
    >
      <div className='flex justify-center text-center'>
        <Image src={image} alt="icon" width={100} height={100} 
        className='object-cover mx-auto'/>
      </div>

      <h1 className='text-[16px] font-extrabold text-gray-700 dark:text-gray-300 
      text-center mt-2'>{title}</h1> 
      <p className='text-[14px] text-gray-500 dark:text-gray-400 
       mt-2 leading-4 text-center
      
      '>{description}</p>

    </div>
  )
}

export default FeatureCard