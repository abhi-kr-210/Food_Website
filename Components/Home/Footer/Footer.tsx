import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'

function Footer() {
  return (
    <div className='pt-16 pb-16 bg-gray-800'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-[10px]'>

        {/*1st part*/}
        <div className='flex flex-col  justify-start'>
          <div className='flex space-x-2  items-center'>
           <div className='flex  rounded-full items-center justify-center
           bg-amber-50 w-10 h-10'>
               {/* <MdDeliveryDining className='w-6 h-6 text-black'/>
                */}
                <Image src={'/images/logo.png'} alt='logo'
                  width={100} height={100} className='w-7 h-7'/>
           </div>
           <h1 className='text-xl font-extrabold text-white'>EatExpress</h1>
           </div>
           <p className='text-sm sm:text-base font-medium mt-4 text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
             . Nullam vel nulla vel nisi faucibus
              fermentum non et felis.</p>
           <div className='flex space-x-4 mt-4 mb-4 items-center'>
              <div className='flex items-center justify-center flex-col w-8 h-8
               rounded-full text-white bg-blue-800'>
                <FaFacebook className='w-5 h-5 text-white'/>
              </div>

              <div className='flex items-center justify-center flex-col w-8 h-8
               rounded-full text-white bg-red-500'>
                <FaInstagram className='w-5 h-5 text-white'/>
              </div>

              <div className='flex items-center justify-center flex-col w-8 h-8
               rounded-full text-white bg-blue-400'>
                <FaTwitter className='w-5 h-5 text-white text-center'/>
              </div>

              <div className='flex items-center justify-center flex-col w-8 h-8
               rounded-full text-white bg-red-500'>
                <FaYoutube className='w-5 h-5 text-white'/>
              </div>
              
 
           </div>

        </div>
        {/*2nd part*/}
        <div className='flex flex-col items-start justify-center'>
             <h1 className='text-xl font-extrabold text-white'>Company</h1>
              <ul className='text-amber-100 mt-4'>
                <li>
                  <Link href="#" className='hover:text-white'> About Us</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> News & Press</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> Our Customer</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> Leadership</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> Careers</Link>
                </li>
             </ul>           
        </div>
        {/*3rd part*/}
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-xl font-extrabold text-white'>Resources</h1>
              <ul className='text-amber-100 mt-4'>
                <li>
                  <Link href="# " className='hover:text-white'> Blog </Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> Webinar & Events</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> Podcast</Link>
                </li>
                <li>
                  <Link href="# " className='hover:text-white'> E-book & Guides</Link>
                </li>
             </ul>     
        </div>
        {/*4th aprt*/}
        <div className='flex flex-col items-start justify-center'>
                <h1 className='text-xl font-extrabold text-white'>Contact Us</h1>
              <ul className='text-amber-100 mt-4'>
                <li>
                  <p className='text-sm sm:text-base text-gray-300'>Our Mobile Number</p>
                  <p className='text-sm sm:text-base text-blue-500'>+3489 320490302</p>
                </li>
                <li>
                 <p className='text-sm sm:text-base text-gray-300'> Our Email</p>
                 <p className='text-sm sm:text-base text-blue-500'>example@gamil.com</p>
                </li>
             </ul>        
        </div>

        </div>
        <div className='w-[80%] mx-auto outline-1 outline-gray-500 mt-3'></div>
        <div className='w-[80%] mx-auto mt-2 flex items-start flex-col lg:flex-row lg:justify-between'>
          <p className='text-sm  text-gray-300  mb-2 '>
            Copyright© 2025 WebDev™. All Rights Reserved. Unauthorized use is
             strictly prohibited.</p>
            <div className='space-x-2 text-sm flex justify-start items-center'>
                <p className='text-sm text-gray-300'>Social :</p>
                <FaFacebook className='text-gray-300'/>
                <FaTwitter className='text-gray-300'/>
                <FaDribbble className='text-gray-300'/>
            </div>
        </div>
    </div>
  )
}

export default Footer