import React from 'react'

const foodItems = [
  { category: "Burger" },
  { category: "Pizza" },
  { category: "Sushi" },
  { category: "Tacos" },
  { category: "Pasta" },
  { category: "Biryani" },
  { category: "Ramen" },
  { category: "Shawarma" },
  { category: "Dosa" },
  { category: "Falafel" },
  { category: "Croissant" },
  { category: "Paella" },
  { category: "Kebab" },
  { category: "Chow Mein" },
  { category: "Hot Dog" },
  { category: "Dim Sum" },
  { category: "Samosa" },
  { category: "Tempura" },
  { category: "Goulash" },
  { category: "Pav Bhaji" }
];
function Category() {
  return (
    <div className='pt-10 pb-20  '>
      <div className='text-center'>
        <h1
        className="text-2xl sm:text-3xl text-center font-extrabold 
                    bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 
                    text-transparent bg-clip-text drop-shadow-md tracking-wide
                    animate-gradient"
        >
        Discover <span className="text-black dark:text-white animate-pulse">Delicious</span>
        </h1>

      </div>

      <div className=' mx-auto w-[80%] mt-10'>
           <div  className='flex flex-wrap gap-4 justify-center'>
              {
                foodItems.map((items,i)=>(
                    <span 
                    data-aos='zoom-in'
                    data-aos-anchor-placement="top-center"
                    data-asos-delay={i*100}
                    key={i} className='px-6 py-2 rounded-full cursor-pointer hover:bg-slate-600
                    hover:text-white transition-all duration-300 bg-gray-200 dark:bg-gray-800
                    dark:text-white text-gray-900 font-semibold text-[15px]'>
                        {items.category}
                    </span>
                ))
              }
           </div>
      </div>


    </div>
  )
}

export default Category