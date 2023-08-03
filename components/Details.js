import React from 'react'
import Image from 'next/image'
const Details = () => {
  return (
    <div>
        <div className="flex justify-between items-center h-12 text-white font-light rounded-md p-3 bg-[#414141]">
              <p>تاريخ البث</p>
              <p className="font-semibold">22-1-2022</p>
            </div>
            <div className="relative flex justify-around items-center h-32  ">
                <div className=" w-[25%] lg:w-[45%] py-5 text-center  text-white rounded-lg bg-[#44215D]">
                  <p className="text-sm">القيمه الحالية للمزاد</p>
                  <p className="flex justify-center items-center gap-x-1 font-bold text-2xl ">5000 <span className="text-sm  ">$</span></p>
                  <div className="absolute flex justify-start items-center gap-x-2  md:right-24 xl:right-10 bottom-2  bg-white h-4 w-24 rounded-xl  p-1 shadow-xl shadow-gray-400">
                    <Image src='/istockphoto-1129638598-612x612.jpg' width={20} height={50} alt='pic8' className="w-4 h-4 rounded-full " />
                    <p className="text-[#44215D] text-xs font-bold">أحمد الرائد</p>
                  </div>
                </div>
                <div className=" relative w-[45%] py-5 text-center rounded-lg text-[#44215D] bg-[#44215D] bg-opacity-10" >
                  <p className="text-xs">القيمه الحالية بعد الضريبة</p>
                  <p className="flex justify-center items-center gap-x-1 font-bold text-2xl">5050 <span className="text-sm ">$</span></p>
                </div>
            </div>        
    </div>
  )
}

export default Details
