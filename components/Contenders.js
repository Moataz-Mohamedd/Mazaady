import React from 'react'
import Image from "next/image";

const Contenders = ({image}) => {
  return (
    <div>
         <h1 className="text-2xl font-bold text-[#1D1D1D]">المتنافسون </h1>
          {image.map((pic , index) =>(
             <div className="flex justify-between items-center mt-3" key={index}>
              <div className="flex gap-x-3 ">
                  <Image src={pic}  width={50} height={70} alt='pic1' className="w-12 h-12  rounded-full" />
                <div>
                  <p className="text-[#414141] font-bold">أسم المزايد</p>
                  <p className="text-xs text-[#808080]">13:59:00</p>
                </div>
              </div>
              <button className="px-2 py-1 ml-5 bg-[#FDBC01] bg-opacity-10 text-[#FDBC01] font-semibold text-xl rounded-md">20+</button>
            </div>
          ))}
          

           
          
    </div>
  )
}

export default Contenders
