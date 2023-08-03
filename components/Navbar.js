import React, { useState } from 'react'
import Image from 'next/image';
import Search from './Search';
import Link from 'next/link';
import {AiFillHeart} from 'react-icons/ai'
import {HiBellAlert} from 'react-icons/hi2'
import {FaMoneyCheckDollar} from 'react-icons/fa6'
import {IoIosArrowDown } from 'react-icons/io'
import {IoReorderThreeSharp} from 'react-icons/io5'
const Navbar = () => {

  const [toggle , setToggle] = useState(false);
  return (
    <nav className='mt-5 '>
      <div className='container flex justify-between items-center md:gap-x-10'>
         <Search />
         <Image src='/Layer 2@2x.png' alt='pic4' width={120} height={120}  />
      </div>   
      <div className='flex items-center w-full mt-5 bg-gradient-to-r from-[#D20653] to-[#9B0257]  h-20'>
        <div className='container flex justify-between items-center '>
         <div className='flex justify-between items-center w-[500px] text-white lg:visible invisible' >
          <Link href="/" className='hover:text-gray-800 duration-300 active:scale-90'>الرئيسيه</Link>
          <Link href="/" className='hover:text-gray-800 duration-300 active:scale-90'>التصنيفات</Link>
          <Link href="/" className='hover:text-gray-800 duration-300 active:scale-90'>مشترياتي</Link>
          <Link href="/" className='hover:text-gray-800 duration-300 active:scale-90'>حسابي</Link>
         </div>
         <div className='flex w-72 justify-between items-center gap-x-5 '>
            <button><FaMoneyCheckDollar className='w-6 h-7 text-white  hover:text-yellow-500 hover:scale-125 duration-700 transition-all'/></button>
            <button><HiBellAlert className='w-6 h-7 text-white hover:text-yellow-500 hover:scale-125 duration-700 transition'/></button>
            <button><AiFillHeart className='w-6 h-7 text-white hover:text-yellow-500 hover:scale-125 duration-700 transition'/></button>
            <button className='w-[90px] h-8 pb-1   text-center text-white font-normal  text-md rounded-2xl hover:scale-110 duration-500 active:scale-90
                                 bg-gradient-to-r from-[#FDBC01] to-[#FF951D]  ' data-testid = 'language'> عربية 
                                </button> 
         </div>
        
         </div>
          <div className=' absolute z-[50] visible lg:hidden  '>
                  <button  disabled={false} data-testid='btn'
                          data-dropdown-toggle="dropdown" 
                          className="flex items-center justify-center gap-x-1 h-12 w-48 ml-1 text-sm font-medium text-center
                                  text-[#d20660] focus:text-[#FF951D] bg-[#D20653] bg-opacity-10 rounded-r-md  " 
                          type="button"
                          onClick={()=>setToggle(!toggle)}  >    <IoReorderThreeSharp className='w-12 h-12 font-bold text-[#FDBC01]' />
                        
                  </button>
                  <div id="dropdown"  className={` ${toggle ? "absolute  z-50 grid items-center justify-center bg-[#FFF4E8] divide-y rounded-lg  shadow   w-screen " : "z-10 hidden"} `}>
                      <ul className=" relative z-50  py-2 text-sm text-black text-center  dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li >
                          <Link href="/" 
                                  className="inline-flex w-[100%] px-48 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  الرئيسيه</Link>
                      </li>
                      <li>
                          <Link href="/" 
                                  className="inline-flex w-full px-48 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  التصنيفات</Link>
                      </li>
                      <li>
                          <Link href="/" 
                                  className="inline-flex w-full px-48 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  مشترياتي</Link>
                      </li>
                      <li>
                          <Link href="/" 
                                  className="inline-flex w-full px-48 py-2 hover:text-yellow-400 duration-300 transition-all ">
                                  حسابي</Link>
                      </li>
                      </ul>
                  </div>
                </div>
      </div>


    



    </nav>
  )
}

export default Navbar
