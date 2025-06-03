import Aos from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

const Product = ({image,title,price}) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="product w-[90%] mx-auto  h-auto my-5 shadow-2xl overflow-hidden "
       data-aos="fade-up"
      >
        <div id="Exploreimg" className="w-full  h-auto overflow-hidden relative flex justify-center items-center ">
            <img src={image} className="h-full w-full" alt="" />
            <button id="Explore" className="text-gray-500 hover:text-gray-800 cursor-pointer p-1 absolute bottom-2 bg-white rounded-sm w-[90%] mx-[5%] py-2">Explore Mug</button>
        </div>
        <div className="proinfo w-full  h-auto text-center py-3 ">
            <p className="font-semibold text-lg">{title}</p>
            <p className="text-gray-400">$ {price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
