import React, { useState } from 'react'
import {RiSearch2Line} from 'react-icons/ri';
import {IoIosArrowDown} from 'react-icons/io'
const Search = () => {
  const [toggle , setToggle] = useState(false);
  return (
    <div>
       <form className= 'w-[350px] lg:w-[868px] md:w[600px] sm:w-[500px] transition-all '> 
         <div className="relative flex">
               <div className='relative '>
                  <button  disabled={false} data-testid='btn'
                          data-dropdown-toggle="dropdown" 
                          className="flex items-center z-50 justify-center gap-x-1 h-12 w-48 ml-1 text-sm font-medium text-center
                                  text-[#d20660] focus:text-[#FF951D] bg-[#D20653] bg-opacity-10 rounded-r-md  " 
                          type="button"
                          onClick={()=>setToggle(!toggle)}  >مزاد مباشر متعدد  <IoIosArrowDown className='w-4 h-4 font-bold' />
                        
                  </button>
                  <div id="dropdown"  className={` ${toggle ? "absolute   z-50 bg-[#FFF4E8] rounded-lg shadow w-44 " : "z-10 hidden"} `}>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  مزاد مباشر</button>
                      </li>
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  مزاد عام</button>
                      </li>
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  أسم البائع</button>
                      </li>
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  مزاد مباشر متعدد</button>
                      </li>
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  مزاد عام متعدد</button>
                      </li>
                      <li>
                          <button type="button" 
                                  className="inline-flex w-full px-4 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                رقم المنتج</button>
                      </li>
                     
                      </ul>
                  </div>
                </div>
                <input 
                       type="search" 
                       id="search-dropdown" 
                       className="block w-full h-12 p-4 pl-10 bg-[#D20653] bg-opacity-10 text-sm text-gray-900   placeholder:text-gray-700" 
                       placeholder="ابحث هنا"  
                       required />
                <button  className="w-16 h-12 text-white absolute left-0 bottom-0 top-0 bg-[#D20653] hover:bg-[#D20670] focus:ring-4 font-medium  
                                        rounded-md text-sm hover:scale-105 duration-300 active:scale-90 " 
                         onClick={(e) =>(e.preventDefault())} >
                        
                    <RiSearch2Line className='h-5 w-5 mx-auto ' />
                </button>
           </div>
        </form> 
    </div>
  )
}

export default Search
