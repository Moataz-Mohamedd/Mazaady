import Contenders from "@/components/Contenders";
import Details from "@/components/Details";
import Slider from "@/components/Slider";
import Values from "@/components/Values";
import Head from "next/head";
import Image from "next/image";
import {AiFillStar , AiFillHeart , AiFillEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsShare } from 'react-icons/bs' 
import {HiOutlineFlag} from 'react-icons/hi2';
import {HiSignal} from 'react-icons/hi2';
import {MdOutlineSend} from 'react-icons/md';
import img1 from '../public/istockphoto-1129638598-612x612.jpg';
import img2 from '../public/istockphoto-1129638598-612x612.jpg';
import img3 from '../public/istockphoto-1129638598-612x612.jpg';
import img4 from '../public/istockphoto-1129638598-612x612.jpg';
import img5 from '../public/istockphoto-1129638598-612x612.jpg';



export default function Home() {
  const image = [img1 , img2 , img3 , img4 , img5];

  return (
    <>
    <Head>
       <title>Mazaady - Mazaady is an onlineauction classfieds platform.</title>
       <meta property="og:title" content="Mazaady - Mazaady is an onlineauction classfieds platform." key="title" />
    </Head>
    <div className="container h-full grid lg:flex  justify-center lg:justify-start  gap-x-5  ">
      <div className=" w-24  lg:w-36 col-span-1 h-[500px]  ">
         <Slider />  
      </div>
      <div className="relative grid gap-y-12   w-fit h-[700px] lg:h-[800px] mt-12 mr-2 shadow-xl  shadow-gray-300 ">  
         <div className="w-full   h-[700px] lg:h-[800px]"> 
          <Image alt="dashboardpic" src='/ruffa-jane-reyes-dlGhQPIstkQ-unsplash - Copy.jpg' width={1000} height={100} quality={100} className="rounded-md"  />
            <div className="absolute top-5 left-5 bg-black bg-opacity-40 backdrop-blur-sm  p-4 rounded-full">
              <BsShare className="w-5 h-5 text-white "/>
            </div> 
            <div className="absolute top-5 left-20 bg-black bg-opacity-40 backdrop-blur-sm  p-4 rounded-full">
              <AiOutlineHeart className="w-5 h-5 text-white"/>
            </div> 
            <div className="absolute top-5 left-36 bg-black bg-opacity-40 backdrop-blur-sm  p-4 rounded-full">
              <HiOutlineFlag className="w-5 h-5 text-white "/>
            </div> 
           <div className="absolute flex justify-center items-center gap-x-1 top-5 right-[140px] bg-black bg-opacity-30 backdrop-blur-sm rounded-l-lg  w-20 h-9 ">
               <AiFillEye className="w-5 h-6 text-white opacity-60 "/><p className="text-white text-xs ">3000</p>
            </div> 
            <div className="absolute flex justify-center items-center gap-x-1  top-5 right-[80px] border-l border-gray-400 bg-black  bg-opacity-20 backdrop-blur-sm  w-16 h-9  ">
               <p className="text-white text-md font-light ">02:00</p>
            </div>
            <div className="absolute flex justify-center items-center gap-x-1 top-5 right-[15px] border-l border-gray-400 bg-white rounded-r-lg  w-16 h-9 ">
               <HiSignal className="w-9 h-9 text-[#D20653] "/>
            </div> 
        <div className="flex m-2 gap-x-5 mr-3">
          <div className="relative">
            <Image alt="pic2" src='/istockphoto-1129638598-612x612.jpg' width={50} height={70} className="w-12 h-12  rounded-full" />
            <div className="absolute bottom-0 right-7 bg-white text-gray-200 p-1.5 rounded-3xl shadow-xl shadow-gray-300">
              <AiFillHeart className="w-4 h-4"/>
            </div>
          </div>
          <div className="grid gap-y-1">
            <p className="text-xl font-semibold  text-[#44215D]">اسم البائع </p>
            <p className="text-xs font-semibold text-[#44215D]">9635435643+</p>
          </div>
          <div className="flex mb-3">
           <button className="text-gray-300  hover:scale-110 duration-300 active:scale-90"><AiFillStar className="w-5 h-10"/></button>
           <button className="text-yellow-400 hover:scale-110 duration-300 active:scale-90"><AiFillStar className="w-5 h-10"/></button>
           <button className="text-yellow-400 hover:scale-110 duration-300 active:scale-90"><AiFillStar className="w-5 h-10"/></button>
           <button className="text-yellow-400 hover:scale-110 duration-300 active:scale-90"><AiFillStar className="w-5 h-10"/></button>
           <button className="text-yellow-400 hover:scale-110 duration-300 active:scale-90"><AiFillStar className="w-5 h-10"/></button>
          </div>
        </div>
        <div className="grid mr-3">
            <p className="text-2xl text-[#414141] font-bold">شراء مجموعة من السيارات من موديلات 1990</p>
            <span className="text-gray-500 text-sm">code 1234</span>
        </div>
        <div className="flex w-full justify-start items-center p-3">
          <div className="flex w-[65%] justify-start items-center gap-x-3 "> 
            <button className="bg-[#D20653] bg-opacity-10 p-2 text-[#D20653] rounded-md hover:scale-110 duration-300 active:scale-90">10000+</button>
            <button className="bg-[#D20653] bg-opacity-10 p-2 text-[#D20653] rounded-md hover:scale-110 duration-300 active:scale-90">10010+</button>
            <button className="bg-[#D20653] bg-opacity-10 p-2 text-[#D20653] rounded-md hover:scale-110 duration-300 active:scale-90">10020+</button>
          </div>
          <div className="flex justify-start items-center  w-fit xl:w-[30%] gap-x-3">
            <input type="text" placeholder="اكتب المبلغ" className="w-48 h-10 p-3 border-gray-300 border rounded-sm placeholder:text-sm" />
            <button className="px-8 py-2 bg-gradient-to-r from-[#9B0257] to-[#D20653] rounded-sm text-white text-sm hover:scale-110 duration-300 active:scale-90">تأكيد</button>
          </div>
        </div>
         </div>
         <div className=" w-full h-[150px] p-5 bg-white shadow-xl  shadow-gray-400  rounded-lg ">
           <p className="text-[#414141] text-2xl font-bold ">ارسال رسالة الي البائع</p> 
           <p className=" mt-2 text-sm text-[#414141]">يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</p>
           <div className="flex justify-start items-center gap-x-2 mt-3  ">
             <input 
                       type="search" 
                       id="search-dropdown" 
                       className="w-[90%] h-10 p-4  bg-[#F3F3F3] text-sm rounded-full border-[#E3E3E3] border text-gray-900 placeholder:text-xs placeholder:text-gray-700" 
                       placeholder="أكتب سؤالك"  
                       required />
              <button  className="w-12 h-12 text-white  bg-gradient-to-b from-[#D20653] to-[#9B0257] focus:ring-4 font-medium  
                                        rounded-full text-sm hover:scale-105 duration-300 active:scale-90 " 
                         onClick={(e) =>(e.preventDefault())} >
                        
                    <MdOutlineSend className='h-6 w-6 mx-auto rotate-180 ' />
                </button>
           </div>
          
               
         </div>
       
      </div>

      <div className=" w-full lg:w-[400px]  mt-72  lg:mt-12 text-black ">

         <div className="h-48 p-3 rounded-lg  shadow-xl shadow-gray-300 ">
          <Details />
         </div>

         <div className=" h-[360px] p-2 mt-10 rounded-lg  shadow-xl shadow-gray-300 overflow-x-hidden">
            <Contenders image={image}  />  
         </div>
         
         <div className="h-fit p-4 mt-10 rounded-lg  shadow-xl shadow-gray-300 ">
            <Values />
         </div>
      </div>
      
    </div>
   
    </>
  )
}
