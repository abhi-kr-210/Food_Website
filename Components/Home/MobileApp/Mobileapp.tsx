import Image from 'next/image'
import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
function Mobileapp() {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-tr from-gray-100 via-white to-gray-100
       dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>

        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/*image section*/}
            <div 
                data-aos='zoom-in'
               data-aos-anchor-placement="top-center"

            className='flex items-center justify-center'>
                <Image src={'/images/MobileAppimg.png'} alt='mobile' width={700} height={700}
                className='objcect-cover'/>
            </div>
            {/*text section*/}
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-2xl sm:text-3xl  font-extrabold text-gray-800
                w-[80%] mx-auto sm:w-[100%] dark:text-gray-300'>Seamless Food Ordering, Anytime, Anywhere</h1>
                <p className='text-gray-400 text-sm sm:text-base font-medium mt-4 
                w-[80%] mx-auto sm:w-[100%] dark:text-gray-400'
                >Download our mobile app on iOS and Android to explore restaurants, customize your meals, and track deliveries in real-time. With just a few taps, 
                    enjoy your favorite food delivered fresh and fast — straight from the
                     kitchen to your doorstep</p>

                      {/*app store button*/}
            <div  className='flex space-x-4  mt-6 w-[80%] mx-auto sm:w-[100%]'>
                <a href="#_"
                className='flex items-center justify-center group border border-gray-400 px-4 py-3
                rounded-md hover:bg-slate-800 transition-all duration-500
                dark:bg-[#284251] bg-[#252525]'
                >
                <FaApple className='text-xl sm:text-2xl mr-2 text-white group-hover:text-white transition-all duration-500'/>
                <div> 
                <p className='text-[9px] sm:text-xs text-white group-hover:text-white transition-all duration-500'
                >Download on the</p>
                <p className='text-[10px] sm:text-sm text-white font-semibold group-hover:text-white transition-all duration-500'
                >App Store</p>

                </div>

                </a>

                <a href="#_"
                className='flex items-center justify-center group border border-gray-400 px-4 py-3
                rounded-md hover:bg-slate-800 transition-all duration-500
                dark:bg-[#284251] bg-[#252525]'
                >
                <FaGooglePlay className='text-xl sm:text-2xl mr-2 text-white group-hover:text-white transition-all duration-500'/>
                <div> 
                <p className='text-[9px] sm:text-xs text-white group-hover:text-white transition-all duration-500'
                >Download on the</p>
                <p className='text-[10px] sm:text-sm font-semibold text-white  group-hover:text-white transition-all duration-500'
                >Google Play</p>

                </div>

                </a>

            </div>
       
            </div>
        </div>


    </div>
  )
}

export default Mobileapp