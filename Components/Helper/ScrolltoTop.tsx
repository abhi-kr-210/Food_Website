"use client"
import React, { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';

function ScrolltoTop() {
    const [visible, setVisible] = React.useState(false);

     useEffect(() => {   
        const togglevisibility=()=>{
            if(window.scrollY>300){
                setVisible(true);
            }else{
                setVisible(false);
            }
        }
        window.addEventListener('scroll',togglevisibility);
      return () => {
        window.removeEventListener('scroll',togglevisibility);
      }
    }, [])

    // scroll to top funcationality
    const scrollToTop=()=>{
       window.scrollTo({top:0,behavior:"smooth"});
    }
    
  return (
    <div className='fixed bottom-10 right-10 animate-pulse'>
        {visible&&(
            <button onClick={scrollToTop}
             className='w-12 h-12 rounded-full flex items-center
              justify-center bg-amber-600 text-white
               hover:bg-amber-700 transition-all duration-300 cursor-pointer
               focus-outline-none'>
                <FaArrowUp/>
               </button>
        )}

    </div>
  )
}

export default ScrolltoTop