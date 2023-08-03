import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';


const Slider = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
        <Carousel responsive={responsive} className=' w-[450px] h-[100px] rotate-90 mt-72 left-0 right-32 bottom-16 lg:left-28 lg:bottom-auto lg:right-auto  '>
          <div className='-rotate-90  '>
               <Image src='/photo-1603386329225-868f9b1ee6c9.jpg' alt='slider1' width={200} height={200}  className='rounded-lg w-96 h-20'  /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/photo-1603386329225-868f9b1ee6c9.jpg' alt='slider2'width={200} height={200}  className='rounded-lg w-96 h-20 ' /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/images22.png' width={200} height={200} alt='slider3' className='rounded-lg w-96 h-20' /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/images6.png' width={200} height={200}alt='slider4' className='rounded-lg w-96 h-20'  /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/image5.png' width={200} height={200} alt='slider5' className='rounded-lg w-96 h-20' /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/images7.png' width={200} height={200} alt='slider6' className='rounded-lg w-96 h-20' /> 
          </div>
          <div className='-rotate-90  '>
               <Image src='/images221.png' width={200} height={200} alt='slider7' className='rounded-lg w-96 h-20' /> 
          </div>
        </Carousel>
  )
}

export default Slider
