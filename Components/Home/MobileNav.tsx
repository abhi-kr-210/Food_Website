import React from 'react'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type props={
      showNav:boolean;
      closeNav:()=>void;

}
function MobileNav({showNav,closeNav}:props) {
     const navopen=showNav?"translate-x-0":"translate-x-[-100%]";
  return (
    <div>
      {/*overlay*/}
      <div className={`fixed ${navopen} inset-0 transform transition-all  duration-600
      z-[10002] bg-black opacity-70 w-full h-screen`}></div>

      { /*navlinks*/}
       <div className={`${navopen} text-white fixed justify-center flex flex-col h-full
        transform transition-all ease-in-out duration-600 delay-300 w-[80%] sm:w-[40%]
        gradient bg-gradient-to-tl from-slate-900 to-slate-800
       space-y-6 z-[10050]`}>
            {
              Navlinks.map((items)=>(
                   <Link 
                   key={items.id} 
                   href={items.url}
                   >
                   <p className='text-white w-fit text-[20px]
                   ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]
                   cursor-pointer hover:text-amber-200 
                   hover:border-amber-200 transition duration-500'>{items.label}</p>
                   </Link>  
              ))}
 

              {/*close icon*/}

              <CgClose  onClick={closeNav} className='absolute top-[1.7rem] right-[2.4rem] 
                sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>
       </div>


    </div>
  )
}

export default MobileNav