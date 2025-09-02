import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='pt-16 pb-16  relative  '>
        <div className="absolute inset-0 bg-black/10  "></div>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/*image section*/}
            <div 
            data-aos='fade-right'
            data-aos-anchor-placement="top-center"

            className="block dark:hidden">
                <Image src="/images/heroimage.png" alt='imagelight'
                width={900} height={900} /> 
            </div>
            <div 
            data-aos='fade-right'
            data-aos-anchor-placement="top-center"
            className="hidden dark:block">
                <Image src="/images/heroimage1.png" alt='imagedark'
                width={900} height={900}/> 
            </div>
            {/*text section*/}
            <div>
              <h1 className='text-3xl sm:text-4xl font-extrabold text-cyan-950 text-shadow-2xs
              dark:text-gray-300
              '>Our Mission</h1>
              <p className='text-xs sm:text-base text-gray-500 leading-4 mt-4 dark:text-gray-200
              '>To revolutionize dining by combining convenience, speed, and smart technology — making
                 food experiences effortless, whether at home or in a restaurant.</p>

                 <div className='space-x-4 mt-6 flex flex-col'>
                    <div className='space-x-4 flex '>
                     <h1 className='text-3xl   font-extrabold text-gray-950 opacity-30 dark:text-indigo-200'>&rarr;</h1>
                     <h1 className='text-xl  font-extrabold text-gray-900 leading-5 
                     dark:text-indigo-300'>Dine-In & Food Delivery</h1>
                    </div >
                    <div className='mt-2'>
                        <ul className='list-disc ml-20'>
                            <li className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300
                            '>Order your favorite meals for quick doorstep delivery.</li>
                            <li  className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300 '>Or choose dine-in reservations at top restaurants.</li>
                            <li  className='text-xs sm:text-sm text-gray-500 leading-4  dark:text-gray-300'>Enjoy exclusive online coupons and offers.</li>
                        </ul>
                    </div>
                 </div>

                  <div className='space-x-4 mt-6 flex flex-col'>
                    <div className='space-x-4 flex '>
                     <h1 className='text-3xl  font-extrabold text-gray-950 opacity-30 dark:text-indigo-200'>&rarr;</h1>
                     <h1 className='text-xl  font-extrabold text-gray-900 leading-5 dark:text-indigo-300'>Smart Table Booking & Pre-Orders</h1>
                    </div >
                    <div className='mt-2'>
                        <ul className='list-disc ml-20'>
                            <li className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300
                            '>Book your table in advance with a chosen time slot.</li>
                            <li  className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300'>
                                Add your order online before arriving.</li>
                            <li  className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300'>
                                Skip waiting — your food is ready when you are.</li>
                            <li  className='text-xs sm:text-sm text-gray-500 leading-4 dark:text-gray-300 '>
                               Enjoy a seamless experience: Arrive → Dine → Leave.</li>
                        </ul>
                    </div>
                 </div>

            </div>
        </div>


    </div>
  )
}

export default About