'use client'
import React, { useEffect, useState } from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeToggler from '../Helper/ThemeToggler'
import Image from 'next/image'

type navProps={
     openNav:()=>void;
}

function Nav({openNav}:navProps) {
      const [navbg,setnavbg]=useState(false);

      useEffect(()=>{
          const handeler=()=>{
               if(window.scrollY>=90)setnavbg(true);
               else setnavbg(false);
          }  
          window.addEventListener('scroll',handeler);
          return ()=>{
            window.removeEventListener('scroll',handeler);
          }

      },[]);

  return (
    <div className={`${navbg?"bg-[#101010d4] shadow-md " :"fixed"}
    transition-all duration-600 w-full h-[10vh] z-[1003]  dark:bg-gray-950 fixed`}>
        <div className='flex items-center justify-between h-full w-[90%] mx-auto xl:w-[80%]'>
          {/* logo */}
          <div className='flex items-center space-x-2'>
            <div  className='w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center
            flex-col'>
              <Image src={'/images/logo.png'} alt='logo'
               width={100} height={100} className='w-7 h-7'/>
                {/* <MdDeliveryDining className='w-6 h-6 text-white'/> */}
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-[#afdbf5] font-bold
            dark:text-[#afdbf5]'>EatExpress</h1>

          </div>

           <div className=' justify-between space-x-10 hidden lg:flex '>
            {
                Navlinks.map((items)=>(
                       <Link 
                       key={items.id} 
                       href={items.url}
                       className='text-[#e2ecfe]  hover:text-gray-500 font-bold
                       transition-all duration-600 dark:text-white'
                       >
                        <p>{items.label}</p>
                       </Link>
                ))
            }

           </div>

           <div className='space-x-4 flex items-center justify-center'>
            <button className='bg-slate-700 hover:bg-slate-400 text-white
            px-6 py-2 font-bold transition-all duration-900 rounded-md cursor-pointer
            '
            >Join Now</button>
              {/**theme toggler */}
              <ThemeToggler/>
             {/* <HiBars3BottomRight  onClick={openNav} className='w-8 h-8 text-slate-900 cursor-pointer
             lg:hidden dark:text-white'/> */}

                <div  onClick={openNav} className="flex flex-col justify-center items-center space-y-1 cursor-pointer lg:hidden
                   ">
                        <span className="block h-[2.3px] w-10 bg-slate-50 rounded-full animate-barWave 
                        [animation-delay:0s] dark:bg-amber-50" />
                        <span className="block h-[2.3px] w-7 bg-slate-50 rounded-full animate-barWave 
                        [animation-delay:0.2s] dark:bg-amber-50" />
                        <span className="block h-[2.3px] w-5 bg-slate-50 rounded-full animate-barWave 
                        [animation-delay:0.4s] dark:bg-amber-50" />
                </div>

           </div>
 
        </div>
    </div>
    
  )
}

export default Nav