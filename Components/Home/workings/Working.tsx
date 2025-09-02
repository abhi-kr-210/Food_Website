import React from 'react'
import Workingcard from './Workingcard'

const items=[
       {image:"/images/w1.png",
        title:"Join as a Delivery Partner",
        description:"Earn steady income with flexible hours. Be your own boss while delivering smiles. "
       },
       {image:"/images/w2.png",
        title:"Grow Your Business With Us",
        description:"Reach more customers and increase visibility. Partner with us to scale faster."
       },
       {image:"/images/w3.png",
        title:"Experience Seamless Convenience",
        description:"Stay connected with our Android & iOS apps. Manage everything anytime, anywhere."
       }
    ]
function Working() {
  return (
    <div   className='pt-16 pb-16'>
       <div className='text-center'>
            <h1 className='text-2xl sm:text-3xl font-extrabold 
            animate-gradient bg-gradient-to-r dark:from-gray-500 dark:via-amber-300
               from-slate-950 via-amber-600
            to-red-500  bg-clip-text text-transparent tracking-wide font-sans animate-pulse  
            
        '>One Platform, Endless Possibilities</h1>
       </div>

       <div className='w-[80%] mx-auto grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-10 pt-20'>
        
         {  
             items.map((ele,i)=>(
                <Workingcard key={i}
                 image={ele.image}
                 title={ele.title}
                 description={ele.description}
                 index={i}/>
             ))
         } 
          
       </div>
    </div>
  )
}

export default Working