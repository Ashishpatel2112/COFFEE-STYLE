import React from "react";
import START from "../assets/START YOUR DAY.gif";
import Navbar from "../Components/Navbar";
import Featuredmug1 from "../assets/Featured mug1.jpg";
import Featuredmug2 from "../assets/Featured mug2.jpg";
import Product from "../Components/Product";
import pro1 from "../assets/Product (1).jpg";
import pro2 from "../assets/Product (2).jpg";
import pro3 from "../assets/Product (3).jpg";
import pro4 from "../assets/Product (4).jpg";
import pro5 from "../assets/Product (5).jpg";
import pro6 from "../assets/Product (6).jpg";
import pro7 from "../assets/Product (7).jpg";
import pro8 from "../assets/Product (8).jpg";
import ads1 from "../assets/add (2).jpg";
import ads2 from "../assets/add (1).jpg";
import ads3 from "../assets/add (3).jpg";
import Blog from "../Components/Blog";
import blog1 from "../assets/Blog (1).jpg";
import blog2 from "../assets/Blog (2).jpg";
import blog3 from "../assets/Blog (3).jpg";
import Footer from "../Components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="section1">
        <img
          src={START}
          alt=""
          className=" h-[40vh] md:h-[50vh] lg:h-[90vh] w-full "
        />
      </div>

      <div className="section2  w-full h-auto text-center ">
        <h3 className="text-3xl text-[#050827] pt-7 pb-5 px-10 font-bold lg:pt-15 md:px-[20%] lg:px-[35%]  ">
          Even the all-powerful Pointing has no control about the blind texts.
        </h3>
        <p className="pb-5 px-12 text-gray-600 text-lg md:text-xl md:px-15 lg:px-[25%] ">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <button className="text-[#845438] hover:text-[#ff6e6e] underline underline-offset-10 pb-5">
          Read The Full Story
        </button>
      </div>
      <div className="section3 flex justify-center items-center w-full">
        <p className="text-gray-500 py-5">Featured Mugs</p>
      </div>

      <div className="section4 h-auto w-full  flex flex-wrap justify-center items-center py-3">
        <div className="product  h-[40vh] w-[85%] sm:w-[60%] lg:w-[25%] lg:h-[60vh] shadow-xl mt-5 lg:me-10 lg:mb-5"
        data-aos="fade-right"
        >
          <div id="Exploreimg" className="img  h-[80%] w-full relative"
          >
            <img src={Featuredmug1} className="h-full w-full" alt="" />
            <button
              id="Explore"
              className="absolute  bottom-2 bg-[#ffff]  w-[90%] h-[15%] mx-[5%] cursor-pointer"
            >
              Explore Mug
            </button>
          </div>
          <div className="info flex flex-col justify-center items-center  h-[20%]">
            <p className="text-xl font-bold pt-5">Pink Premium Ceramic</p>
            <p className="text-gray-600 pb-7">$ 99.00 USD</p>
          </div>
        </div>
        <div className="product  h-[40vh] w-[85%] mt-5 sm:w-[60%] lg:w-[25%] lg:h-[60vh] lg:mt-5 lg:mb-5  shadow-xl  "
        data-aos="fade-left"
        >
          <div id="Exploreimg" className="img  h-[80%] relative">
            <img src={Featuredmug2} className="h-full w-full" alt="" />
            <div className="sale  absolute top-2 right-2 bg-white px-6 py-2 text-lg font-semibold text-[#ab7161]">
              On Sale .
            </div>
            <button
              id="Explore"
              className="absolute  bottom-2 bg-[#ffff]  w-[90%] h-[15%] mx-[5%] cursor-pointer"
            >
              Explore Mug
            </button>
          </div>
          <div className="info flex flex-col justify-center items-center  h-[20%]">
            <p className="text-xl font-bold pt-5">Golden Designers Mug</p>

            <p className="text-red-500 pb-3">
              {" "}
              $50.00{" "}
              <span className="text-gray-500 line-through">
                $ 69.00 USD
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="  w-full h-auto flex justify-center items-center ">
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
        <h3 className="px-5 py-10 text-sm text-gray-500">More Products</h3>
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
      </div>

      <div className="section5 h-auto w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] md:w-[80%] mx-auto ">
        <Product image={pro1} title="Summer Designer Cup" price="29.00 USD" />

        <Product
          image={pro2}
          title="Espresso Cup by Mugs.co"
          price="25.00 USD"
        />

        <Product image={pro3} title="Winter Style Mug" price="25.00 USD" />

        <Product image={pro4} title="B&W Essentials Mug" price="19.00 USD" />

        <Product image={pro5} title="No Handle Bar Cup" price="32.00 USD" />

        <Product image={pro6} title="Ceramic Tea" price="46.00 USD" />

        <Product image={pro7} title="Black Tea Cup" price="15.00 USD" />

        <Product image={pro8} title="Winter Designer Cup" price="29.00" />

        <Product
          image={Featuredmug1}
          title="Pink Premium Ceramic"
          price="99.00 USD"
        />
      </div>

      <div className="  w-full h-auto flex justify-center items-center ">
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
        <h3 className="px-5 py-10 text-sm text-gray-500">
          {" "}
          Buy 2 mugs and get a coffee magazine free
        </h3>
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
      </div>

      <div className="section6 flex flex-wrap sm:flex-row-reverse sm:items-center ">
        <div className="  w-[95%] mx-auto h-[45vh]  flex flex-wrap  p-5 sm:w-[40%] sm:h-[40vh] lg:h-[65vh]    ">
          <img src={ads1} alt="" className="w-[100%] h-[55%]" />
          <img src={ads2} alt="" className="w-[50%] h-[40%]" />
          <img src={ads3} alt="" className="w-[50%] h-[40%]" />
        </div>
        <div className="section7 h-auto w-full  text-center sm:w-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center ms-10 p-5">
          <p className="text-gray-700 py-3 text-lg">Premium Offer</p>
          <h3 className="text-3xl pb-3 font-bold">Get our Coffee Magazine</h3>
          <p className="text-gray-700 pb-3 text-lg px-3">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <button className="bg-[#1d1f2e] text-white p-3 uppercase rounded-md mb-5 cursor-pointer">
            Start Shopping
          </button>
        </div>
      </div>

      <div id="section8" className="section8 h-[60vh] "></div>

      <div className=" w-full h-auto flex justify-center my-5 items-center ">
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
        <h4 className="px-5 py-3 text-gray-500">
          Behind the mugs, lifestyle stories Read the Full Story
        </h4>
        <div className="bg-black h-[2px] w-[100px] rounded-2xl opacity-10"></div>
      </div>

      <div className="section9 h-auto md:w-[80%] my-5 mx-auto flex justify-evenly items-center flex-wrap">
        <Blog
          image={blog1}
          title={
            "Recent research suggests that heavy coffee drinkers may reap health benefits."
          }
          info={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
          date={"October 9, 2018"}
        />
        <Blog
          image={blog2}
          title={"How long does a cup of coffee keep you awake?"}
          info={
            "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
          }
          date={"October 9, 2018"}
        />
        <Blog
          image={blog3}
          title={
            "Health Check: why do I get a headache when I haven’t had my coffee?"
          }
          info={
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
          date={"October 9, 2018"}
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

export default Dashboard;
