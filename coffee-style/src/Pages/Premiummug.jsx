import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import slide1 from "../assets/slider (1).jpg";
import slide2 from "../assets/slider (2).jpg";
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
import { Link, useParams } from "react-router-dom";

const Premiummug = () => {
  return (
    <>
      <Navbar />
      <div className="section1">
        <div className="container mx-auto flex flex-col items-center justify-center h-[30vh] w-full">
          <h1 className="text-4xl font-bold mb-4">Premium</h1>
          <p className="text-lg text-gray-600 px-4">
            However, back over in reality some project schedules and budgets
            don’t allow for web copy to be written before the design phase.
          </p>
        </div>
      </div>

      <div className="button  w-[100%]  md:w-[90%] lg:w-[70%]   mx-auto flex flex-wrap justify-evenly items-center gap-2 p-2">
        <Link
          to="/productpage"
          className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] "
        >
          ALL PRODUCTS
        </Link>
        <Link
          to="/productpage/coffeemug"
          className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] "
        >
          COFFEE MUGS
        </Link>
        <Link
          to="/productpage/othermug"
          className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] "
        >
          OTHERS
        </Link>
        <Link
          to="/productpage/premiummug"
          className="p-2 border text-[#a75749] border-[#a75749] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] "
        >
          PREMIUM
        </Link>
        <Link
          to="/productpage/teamug"
          className="p-2 border text-[#debc9e] border-[#debc9e] w-full md:w-[19%]  text-sm text-center hover:text-[#a75749] hover:border-[#a75749] "
        >
          TEA MUGS
        </Link>
      </div>

      <div className="section2  mt-15 w-[100%] grid sm:grid-cols-2 lg:grid-cols-3 sm:w-[80%] mx-auto">
        <Product
          image={product1}
          title={"Blue Premium Mug"}
          price={"99.00 USD"}
        />
        <Product
          image={product3}
          title={"Pink Premium Ceramic"}
          price={"99.00 USD"}
        />

        <Product
          image={product8}
          title={"Golden Designers Mug"}
          price={"49.00 USD"}
        />
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

export default Premiummug;
