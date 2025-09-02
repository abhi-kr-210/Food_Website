import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurants } from './Items'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
function Restaurant() {

    const renderRatingIcons = (rating: number): React.ReactNode => {
        const icons = [];
        for (let i = 1; i <= 5; i++) {
        if (rating > 0.5) {
            icons.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (rating > 0) {
            icons.push(<FaStarHalfAlt key={`half-${i}`} className="text-yellow-500" />);
        } else {
            icons.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
        }
        rating--;
        }
        return icons;
    };

  return (
    <div className='pt-20 pb-16 '>
        {/*sectio heading*/}
        <div data-aos= 'fade-up' className='text-2xl sm:text-4xl text-center font-extrabold'>
            <h1 className='text-shadow-sm'>Dine-In &  <span className='text-amber-600'>Delivery Near You</span></h1>
        </div>
     
       <div className='w-[90%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-20'>
     
        {
            restaurants.map((items,i)=>(
                <RestaurantCard key={i}
                image={items.image}
                name={items.name}
                description={items.description}
                rating={items.rating}
                renderRatingIcons={renderRatingIcons}
                index={i}
                
                  />
            ))
        }
  
       </div>
            <div data-aos='fade-up' className='text-center mt-16'>
            <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 rounded-full font-bold
            text-base sm:text-lg bg-gray-900 text-white dark:text-black hover:bg-gray-800
            transition-all duration-500 dark:bg-cyan-200 dark:hover:bg-cyan-500 cursor-pointer'
            >Discover More &rarr;</button>
         </div>

    </div>
  )
}

export default Restaurant