import React from 'react'
import { GrMapLocation } from 'react-icons/gr'
import { FaApple, FaGooglePlay, FaLocationArrow, FaPaperPlane } from 'react-icons/fa'
import Image from 'next/image'
import FloatingFries from './FloatingFries'
function Hero() {
  return (
    <div className="relative w-full  flex flex-col justify-center
       bg-gradient-to-tr from-gray-800 via-black to-gray-900 bg-fixed">
          {/* Floating Food Items start*/}
         <FloatingFries/>
      {/* Floating Food Items end */}

        <div className='w-[80%] mx-auto sm:w-[80%] items-center grid grid-cols-1 xl:grid-cols-2
        gap-10 pt-40 pb-20 ' >
         {/*text content*/}
         <div data-aos='fade-up'>
           <h1 className='text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 font-extrabold 
           leading-[2.5rem] md:leading-[4rem] text-[#b6c0d1]
           text-shadow-md dark:text-[#b6c0d1] '
           >Bringing Your Favorite ,{" "}<span className='text-amber-600 dark:text-amber-400'>Meals</span> to Your Doorstep
             {/* <span className="inline-block align-middle ml-2">
            <MdOutlineDeliveryDining className='w-8 h-8 text-gray-800 dark:text-red-500'/>
            </span> */}
           </h1> 

           {/*subheading*/}
           <p className='text-gray-500 text-sm md:text-base front-medium dark:text-gray-400 mb-6 '>
               Food, drinks, groceries, and more. All delivered to your door.
           </p>

           {/*address input */}
        
           <div className='w-full max-w-md mt-8 mb-8 dark:border border-gray-400'>
   
            <div className='flex items-center h-14 overflow-hidden rounded-sm dark:rounded-none bg-gray-300 shadow-md
        '>
              <div className='px-4'><GrMapLocation className='w-5 h-5  text-gray-800'/></div>
               <input type='text' placeholder='Enter your address' className='flex-1 px-2
                text-sm text-black bg-transparent outline-none h-full'/>
                <button className='flex flex-center items-center bg-slate-900 h-full
                text-white px-4 hover:bg-slate-800 cursor-pointer
                transition ease-in-out duration-200'>
                    <FaLocationArrow className='w-5 h-5'/>
                    {/* <FaPaperPlane className='w-5 h-5'/> */}
                </button>
            </div> 
           </div>
            {/*download text*/}
            <p className='text-gray-600 text-sm  front-medium dark:text-gray-400 mb-6
            '>Apps Available to download on</p>
            
            {/*app store button*/}
            <div  className='flex space-x-4'>
                <a href="#_"
                className='flex items-center justify-center group border border-gray-400 px-4 py-3
                rounded-md hover:bg-slate-800 transition-all duration-500
                dark:bg-[#284251] bg-[#a6b5c3]'
                >
                  <FaApple className='text-xl sm:text-2xl mr-2 group-hover:text-white transition-all duration-500'/>
                  <div> 
                  <p className='text-[9px] sm:text-xs group-hover:text-white transition-all duration-500'
                  >Download on the</p>
                  <p className='text-[10px] sm:text-sm font-semibold group-hover:text-white transition-all duration-500'
                  >App Store</p>

                  </div>

                </a>

                <a href="#_"
                className='flex items-center justify-center group border border-gray-400 px-4 py-3
                rounded-md hover:bg-slate-800 transition-all duration-500
                dark:bg-[#284251] bg-[#a6b5c3]'
                >
                  <FaGooglePlay className='text-xl sm:text-2xl mr-2 group-hover:text-white transition-all duration-500'/>
                  <div> 
                  <p className='text-[9px] sm:text-xs group-hover:text-white transition-all duration-500'
                  >Download on the</p>
                  <p className='text-[10px] sm:text-sm font-semibold group-hover:text-white transition-all duration-500'
                  >Google Play</p>

                  </div>

                </a>

            </div>
         </div>
          
        {/*image content*/}  
        <div 
        data-aos='fade-left' 
        data-aos-delay='150' 
        className='mx-auto   hidden sm:block  justify-center items-center'>
             <Image src="/images/heroimgnew.png" alt="hero" width={800} height={700}
             className=' object-cover'
             />
        </div> 

        </div>
    </div>
  )
}

export default Hero