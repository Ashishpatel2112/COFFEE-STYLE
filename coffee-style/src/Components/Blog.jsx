import Aos from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

const Blog = ({image,title,info,date}) => {
     useEffect(() => {
        Aos.init({ duration: 1000, once: true });
      }, []);
  return (
    <>
    <div className="main  md:w-[33%] h-[60vh] mt-1"
    data-aos="fade-up"
    >
        <div id='Exploreimg' className="img h-[60%]  relative ">
            <img src={image} className='h-full w-full' alt="" />
            <button id='Explore' className=" w-[95%] ms-[2.5%] absolute bottom-3 p-2 bg-white font-semibold rounded-sm cursor-pointer text-gray-300 hover:text-gray-600">Read The Full Story</button>
        </div>
        <div className="info h-[40%]  flex flex-col justify-evenly xs:items-center ps-3 ">
            <h3 className=' cursor-pointer text-gray-700 font-semibold text-lg hover:text-red-900'>{title}</h3>
            <p className='text-gray-500'>{info}</p>
            <p className='text-gray-500 '>{date}</p>
        </div>
    </div>
    </>
  )
}

export default Blog