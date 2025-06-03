import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import slide1 from "../assets/slider (1).jpg";
import slide2 from "../assets/slider (2).jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../Components/Product";
import product1 from "../assets/CATPRO (1).jpg";
import product2 from "../assets/CATPRO (2).jpg";
import product3 from "../assets/CATPRO (3).jpg";
import product4 from "../assets/CATPRO (4).jpg";
import product5 from "../assets/CATPRO (5).jpg";
import product6 from "../assets/CATPRO (6).jpg";
import product7 from "../assets/CATPRO (7).jpg";
import product8 from "../assets/CATPRO (8).jpg";
import product9 from "../assets/CATPRO (9).jpg";
import product10 from "../assets/CATPRO (10).jpg";
import product11 from "../assets/CATPRO (11).jpg";
import product12 from "../assets/CATPRO (12).jpg";
import product13 from "../assets/CATPRO (13).jpg";
import product14 from "../assets/CATPRO (14).jpg";
import product15 from "../assets/CATPRO (15).jpg";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Productpage = () => {

  const swiperRef = useRef(null);

  return (
    <>
      <Navbar />
      <div className="section1">
        <div className="container mx-auto flex flex-col items-center justify-center h-[30vh] w-full">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 px-4">
            Explore our wide range of products designed to enhance your coffee
            experience.
          </p>
        </div>
      </div>

      <div className="button  w-[100%]  md:w-[90%] lg:w-[70%]   mx-auto flex flex-wrap justify-evenly items-center gap-2 p-2">
        <Link to="/productpage" className="p-2 border text-[#a75749] border-[#a75749] w-full md:w-[19%]  text-sm text-center">ALL PRODUCTS</Link>
        <Link to="coffeemug" className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] ">COFFEE MUGS</Link>
        <Link to="othermug" className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] ">OTHERS</Link>
        <Link to="premiummug" className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] ">PREMIUM</Link>
        <Link to="teamug" className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] ">TEA MUGS</Link>
        
      </div>

      <div className="relative w-full">
        {/* Custom Navigation Buttons */}
        <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full hidden lg:flex justify-between px-4 ">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=" text-black text-5xl px-3 py-2 rounded-full ms-25"
          >
            ❮
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" text-5xl text-black px-3 py-2 rounded-full me-25"
          >
            ❯
          </button>
        </div>

        {/* Swiper Component */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            {/* Slide 1 Content */}
            <div className="slide1   md:w-[90%] lg:w-[70%] w-[95%] h-auto mx-auto mt-10 flex flex-wrap">
              {/* Image Section */}
              <div id="Exploreimg" className="img md:w-[50%] h-full  relative">
                <img src={slide1} className="h-full w-full" alt="" />
                <button id="Explore" className="bg-white text-[#1d1f2e] p-3 absolute bottom-5 w-[90%] ms-[5%]">
                  EXPLORE OUR OFFICES
                </button>
              </div>

              {/* Info Section */}
              <div className="info md:w-[50%] h-full  my-auto">
                <div className="info flex flex-col gap-3">
                  <h3 className="text-sm text-gray-400 ms-5 mt-5">
                    New Store Opened
                  </h3>
                  <p className="md:text-3xl font-semibold ms-5">We're in London</p>
                  <p className="ms-5">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life.
                  </p>
                  <button className="py-3 px-5 bg-[#1d1f2e] text-white text-sm w-[50%] ms-5 mb-5">
                    EXPLORE OUR OFFICES
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Slide 2 Content */}
            <div className="slide2 lg:w-[70%] w-[95%] h-auto mx-auto mt-10 flex flex-wrap">
              {/* Image Section */}
              <div id="Exploreimg" className="img md:w-[50%] h-full  relative">
                <img src={slide1} className="h-full w-full" alt="" />
                <button id="Explore" className="bg-white text-[#1d1f2e] p-3 absolute bottom-5 w-[90%] ms-[5%]">
                  READ THE FULL STORY
                </button>
              </div>

              {/* Info Section */}
              <div className="info md:w-[40%] h-full  my-auto">
                <div className="info  flex flex-col gap-3">
                  <h3 className="text-sm text-gray-400 ms-5 mt-5">
                    New Article is Live
                  </h3>
                  <p className=" text-xl md:text-3xl font-semibold ms-5">
                    Health Check: why do I get a headache when I haven’t had my
                    coffee?
                  </p>
                  <p className="ms-5">
                    It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth.
                  </p>
                  <button className="py-3 px-5 bg-[#1d1f2e] text-white text-sm w-[50%] ms-5 mb-5">
                    READ THE FULL STORY
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination mt-2 lg:mt-5 flex justify-center gap-2"></div>
      </div>

      <div className="section2  mt-15 w-[100%] grid sm:grid-cols-2 lg:grid-cols-3 sm:w-[80%] mx-auto">
          <Product image={product1} title={"Blue Premium Mug"} price={"99.00 USD"}/>
          <Product image={product2} title={"Aroma Art Coffee Mug"} price={"39.00 USD"}/>
          <Product image={product3} title={"Pink Premium Ceramic"} price={"99.00 USD"}/>
          <Product image={product4} title={"Basic White Mug"} price={"15.00 USD"}/>
          <Product image={product5} title={"White Mug Essential"} price={"59.00 USD"}/>
          <Product image={product6} title={"White Ceramic"} price={"29.00 USD"}/>
          <Product image={product7} title={"Espresso Cup by Mugs.co"} price={"25.00 USD"}/>
          <Product image={product8} title={"Golden Designers Mug"} price={"49.00 USD"}/>
          <Product image={product9} title={"Summer Designer Cup"} price={"29.00 USD"}/>
          <Product image={product10} title={"No Handle Bar Cup"} price={"34.00 USD"}/>
          <Product image={product11} title={"Black Tea Cup"} price={"19.00 USD"}/>
          <Product image={product12} title={"Winter Style Mug"} price={"25.00 USD"}/>
          <Product image={product13} title={"B&W Essentials Mug"} price={"19.00 USD"}/>
          <Product image={product14} title={"Red Love Cup"} price={"25.00 USD"}/>
          <Product image={product15} title={"Ceramic Tea"} price={"46.00 USD"}/>
      </div>

       <div className="section10 w-full h-[40vh] lg:w-[80%] mx-auto mt-15  flex justify-center items-center bg-[#1d1f2e]">
        <div className="inner w-[70%] h-[70%] ">
          <div className="one w-full h-[20%]  flex justify-center items-center lg:h-[30%] ">
            <div className="bg-gray-400 h-[1.5px] w-[100px] rounded-2xl"></div>
            <h3 className="text-gray-500  px-5">
              Sign up and get free coffee bags
            </h3>
            <div className="bg-gray-400 h-[1.5px] w-[70px] rounded-2xl"></div>
          </div>
          <div className="two  w-full text-center h-[20%] lg:h-[30%] flex justify-center items-center">
            <h4 className="md:text-4xl text-2xl text-white">Coffee Updates</h4>
          </div>
          <div className="three  w-full text-center h-[60%] flex  md:justify-center md:items-center">
            <div className="form w-full">
              <input
                type="email"
                name=""
                id=""
                placeholder="CUSTOER@coffeestyle.io"
                className=" p-3 me-1 my-2  lg:w-[30%] border border-gray-500 placeholder:text-gray-400 text-gray-400 font-semibold w-[100%] text-center "
                style={{ latterSpacing: "5px" }}
              />
              <button className="bg-white lg:w-[20%] p-3 px-10 cursor-pointer text-sm w-[100%] my-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Productpage;
