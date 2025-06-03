import React, { useState } from "react";
import { PiBagLight } from "react-icons/pi";
import { HiMiniBars3 } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="h-[70px] z-50  w-full bg-white flex sticky top-0">
        <div className="icon text-xl flex items-center justify-center w-[33%]">
          <h1>CoffeeStyle.</h1>
        </div>

        <div className="links hidden md:flex  w-[50%] justify-evenly items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 font-semibold"
                : "text-gray-600 hover:underline hover:text-gray-800"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/productpage"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 font-semibold"
                : "text-gray-500 hover:underline hover:text-gray-800"
            }
          >
            OUR PRODUCT
          </NavLink>
          <NavLink
            to="/blogpage"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 font-semibold"
                : "text-gray-500 hover:underline hover:text-gray-800"
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 font-semibold"
                : "text-gray-500 hover:underline hover:text-gray-800"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 font-semibold"
                : "text-gray-500 hover:underline hover:text-gray-800"
            }
          >
         CONTACT
          </NavLink>
        </div>

        <div className="CART flex items-center justify-end w-[50%] md:w-[10%] me-10 gap-1 text-gray-500 cursor-pointer">
          <PiBagLight className="text-lg" />
          <span>CART</span>
          <span className="rounded-[50%] h-[40%] flex justify-center items-center p-1 bg-gray-500 text-white">
            0
          </span>
        </div>

        <div
          className="hamburg w-[20%] text-3xl font-bold flex items-center justify-center cursor-pointer md:hidden"
          onClick={toggleDropdown}
        >
          <HiMiniBars3 />
        </div>

        {/* Dropdown with animation */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 2, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
              className="absolute top-[68px] border border-t border-gray-400 right-0 w-full bg-white shadow-md text-center py-4 "
            >
              <ul className="flex flex-col gap-5">
                <li className="text-gray-900 hover:text-gray-500 cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-900 hover:text-gray-500 cursor-pointer">
                  <Link to="/productpage">Our Product</Link>
                </li>
                <li className="text-gray-900 hover:text-gray-500 cursor-pointer">
                  <Link to="/blogpage">Blog</Link>
                </li>
                <li className="text-gray-900 hover:text-gray-500 cursor-pointer">
                  About
                </li>
                <li className="text-gray-900 hover:text-gray-500 cursor-pointer">
                  Contact
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
