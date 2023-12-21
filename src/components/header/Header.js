import React, { useState, useEffect } from "react";

import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productCard = useSelector((store) => store.PRODUCTS.productCard);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productCard);
  }, [productCard]);
  return (
    <div className="w-full h-20 bg-white border-b-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <div>
            <a href="#">
              <h4 className="text-teal-800 font-bold text-4xl">
                Magasin en ligne
              </h4>
            </a>
          </div>
          {/*userInfo && (
            <p className="text-sm font-bold">
              <span className="text-black">Welcome</span>{" "}
              <span className="text-blue-800">{userInfo.name}</span>
            </p>
					)*/}
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link
              to="/"
              className="text-base
            text-black font-bold 
            hover:text-orange-900 
            hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </Link>

            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold
             hover:text-orange-900 hover:underline 
             underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Shop
            </li>
            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>
            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Blog
            </li>
          </ul>
          <div className="relative ">
            <Link to="/cart">
              <span>
                <i className="ri-shopping-cart-fill text-blue-700 text-2xl font-extrabold"></i>
              </span>
              {products.length > 0 && (
                <span
                  className="bg-red-800 text-red-200 rounded-3xl text-xs 
              font-medium me-2 px-2.5 py-0.5 
              dark:bg-red-900 
              dark:text-red-300 absolute bottom-3 right-[-20px]"
                >
                  {products.length}
                </span>
              )}
            </Link>
          </div>
          {/*userInfo ? (
            <div className="flex flex-row gap-2">
              <FaSignOutAlt className="text-blue-700 cursor-pointer" />
              <span className="text-blue-700 font-bold text-xs">Log out</span>
            </div>
          ) : (
            <a to="/login">
              <div className="flex flex-row gap-2">
                <FaSignInAlt className="text-blue-700 cursor-pointer" />
                <span className="text-blue-700 font-bold text-xs">Login</span>
              </div>
            </Link>
					)*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
