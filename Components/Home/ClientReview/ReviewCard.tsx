import Image from 'next/image';
import React from 'react'

type props={
    image:string;
    name:string,
    review:string,
    rating:number,
    renderRatingIcons: (rating: number) => React.ReactNode
}
function ReviewCard({image,name,review,rating,renderRatingIcons}:props) {
  return (
    <div className='flex flex-col items-center justify-center'>
         <div className='flex items-center justify-center '>
             <Image src={image} alt={name} 
             width={150} height={300} 
             className='rounded-full sm:w-[220px] sm:h-[220px] border-2 border-white
             w-[150px] h-[150px] '/>
         </div>
         <p className='text-[15px] sm:text-xl xl:text-2xl text-white text-center font-semibold
         mt-3 mb-3 w-[80%] mx-auto'>{"\""}{review}{"\""}</p>
         
         <div className='flex items-center justify-center text-[#ffdd7e] mt-6'>
            {renderRatingIcons(rating)}
         </div>
         <p className='text-[14px] sm:text-xl xl:text-2xl text-white text-center font-semibold mt-4'>
            By {name}</p>
    </div>
  )
}

export default ReviewCard