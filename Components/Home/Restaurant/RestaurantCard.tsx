import Image from 'next/image';
import React from 'react'
import {FaHeart  } from 'react-icons/fa';
interface RestaurantCardProps {
  image: string;
  name: string;
  description: string;
  rating:number;
  renderRatingIcons: (rating: number) => React.ReactNode; 
  index:number;
}

function RestaurantCard({ image, name, description,rating,renderRatingIcons,index }: RestaurantCardProps) {
      
  return (
    <div  
      data-aos='fade-up'
      data-aos-anchor-placement="top-center"
      data-asos-delay={index*100}
    className="  rounded-lg shadow-lg p-4 bg-gradient-to-tl from-[#f7f7f5] to-[#c9d0cf]">
       <div className="relative group cursor-pointer" >

        <Image src={image} alt={name}   width={400} 
        height={300}
        className="rounded-lg w-full h-48 sm:h-80 lg:h-40 object-cover cursor-pointer
        group-hover:scale-107 transition-transform duration-500 ease-in-out 
        " />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
        group-hover:scale-107 transition-transform duration-500 rounded-lg ease-in-out 
        hover:rounded-lg"></div>
      </div>

      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600 mt-1 text-xs">{description}</p>

      <div className='flex justify-between items-center mt-2'>

      <div className='flex text-[#f7be27] items-center'>
         {renderRatingIcons(rating)}
      </div>

        <div className='flex items-center mr-2'>
        <FaHeart className="hover:text-red-500 text-[20px]  text-gray-500 cursor-pointer
            hover:scale-110 transition-transform duration-300" />
        </div>

      </div>
    </div>
  );
}

export default RestaurantCard;
