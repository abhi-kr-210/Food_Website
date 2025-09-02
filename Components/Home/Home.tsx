'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import Working from './workings/Working'
import About from './About/About'
import Feature from './Feature/Feature'
import ClientReview from './ClientReview/ClientReview'
import Mobileapp from './MobileApp/Mobileapp'

import AOS, { init } from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Home() {
    useEffect(() => {
        const initAOS=async()=>{
            await import('aos');
            AOS.init({
              duration:1000,
              once:true,
              easing:'ease',
              anchorPlacement:"top-bottom",
            });
        }
        initAOS();
    },[])
  return (
    <div  className='overflow-hidden  '>
      <Hero/>
      <Restaurant/>
      <Category/>
      <Working/>
      <About/>
      <Feature/>
      <ClientReview/>
      <Mobileapp/>
    </div>
  )
}

export default Home