import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" h-auto w-full border text-center md:hidden">
        <h1 className="text-[#060727] font-bold text-xl mt-10">coffeeStyle.</h1>
        <p className="text-gray-400">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p className="text-gray-300 py-3 hover:text-red-950">
          CoffeeStyle Inc. © 1996
        </p>

        <h3 className="text-gray-400 py-5 font-bold">MENU</h3>

        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          home
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          about
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          our products
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          contact
        </p>
        <h3 className="text-gray-400 py-5 font-bold">FOLLOW US</h3>

        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          facebook
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          instagram
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          twitter
        </p>
        <p className="text-gray-400 cursor-pointer hover:text-red-800 py-1">
          printrest
        </p>

        <h3 className="text-gray-400 py-5 font-bold">CONTACT US</h3>

        <p className="text-gray-500">We’re Always Happy to Help us</p>
        <p className="text-gray-700 text-xl">@coffeestyle.io</p>
      </footer>

      <footer id="footer" className=" h-[50vh] w-full hidden md:flex">
        <div className="foot h-full w-full flex justify-between ">
          <div className="one md:w-[30%]  h-full border  text-center">
            <h1 className="text-white text-4xl w-full py-10">CoffeeStyle.</h1>

            <p className="text-white py-1 text-md ms-5 mt-10 hover:text-red-700">
              HOME
            </p>
            <p className="text-white py-1 text-md ms-5 hover:text-red-700">
              OUR PRODUCT
            </p>
            <p className="text-white py-1 text-md ms-5 hover:text-red-700">
              ABOUT
            </p>
            <p className="text-white py-1 text-md ms-5 hover:text-red-700">
              CONTACT
            </p>
            <p className="text-white py-1 text-md ms-5">
              We’re Always Happy to Help
            </p>
            <p className="text-white py-1 text-2xl ms-5 hover:text-red-700">
              us@coffeestyle.io
            </p>
          </div>
          <div className="one md:w-[30%]  h-full   text-white text-center ">
            <p className="text-xl pt-10 text-gray-500">
              Delivering the best coffee <br /> life since 1996. From <br />{" "}
              coffee geeks to the real ones.
            </p>

            <h3 className="text-2xl font-semibold py-5 underline">FOLLOW US</h3>

            <p className="text-xl text-gray-100 hover:text-red-600 py-2">
              instagram
            </p>
            <p className="text-xl text-gray-100 hover:text-red-600 py-2">facebook</p>
            <p className="text-xl text-gray-100 hover:text-red-600 py-2">twitter</p>
            <p className="text-xl text-gray-100 hover:text-red-600 py-2">
              printrest
            </p>
          </div>
        </div>
      </footer>

      <div className="information text-center">
        <h5>
          @Copyright2015coffeestyle.All right reserved. designed by Ashish{" "}
        </h5>
      </div>
    </>
  );
};

export default Footer;
