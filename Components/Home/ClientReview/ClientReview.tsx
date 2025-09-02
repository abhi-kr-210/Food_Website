'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import { items  } from './Reviewitems';
import ReviewCard from './ReviewCard';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
function ClientReview() {
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
    <div className=' pt-10 pb-16 h-[500px] sm:h-[600px] w-full mb-16  bg-no-repeat
     bg-cover bg-center bg-fixed relative'
    style={{backgroundImage:`url('/Images/Review_img2.jpg')`}}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='mb-7'>
            <h1 className='relative text-xl sm:text-3xl text-center font-extrabold
             text-white dark:text-white '>People’s Experience With <span className='text-amber-500'>Us</span></h1>
        </div>
          <div className=''>

            <Carousel
                // swipeable={false}
                // draggable={false}
                // showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                 >
                 {
                    items.map((ele)=>(
                       <ReviewCard
                       key={ele.id}
                       image={ele.image}
                       name={ele.name}
                       review={ele.review}
                       rating={ele.rating}
                       renderRatingIcons={renderRatingIcons}
                       />
                    ))
                 }
            </Carousel>;

            
          </div>
          


    </div>
  )
}

export default ClientReview