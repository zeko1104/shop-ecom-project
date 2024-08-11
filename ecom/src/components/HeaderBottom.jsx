import { useState } from "react";
import Navbar from "./Navbar";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function HeaderBottom() {
  const [cartVisible, setCartVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const toggleUserMenuVisibility = (isVisible) => {
    setUserMenuVisible(isVisible);
  };

  return (
    <div className="p-5">
      <Container>
        <div className="flex justify-around items-center">
          <Link to='/'>
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-blue-600">SHOP</h1>
            </div>
          </Link>
          <Navbar />
          <div className="flex items-center gap-5 p-5">
            <select
              className="bg-transparent text-gray-500 border-none outline-none cursor-pointer p-1"
              name=""
              id=""
            >
              <option className="text-black" value="">
                USD
              </option>
              <option className="text-black" value="">
                EUR
              </option>
              <option className="text-black" value="">
                AZN
              </option>
            </select>
            <IoSearch className="text-gray-500 text-2xl cursor-pointer" />
            <div
              className="relative flex items-center"
              onMouseEnter={() => toggleUserMenuVisibility(true)}
              onMouseLeave={() => toggleUserMenuVisibility(false)}
            >
              <FaRegUser className="text-gray-500 text-2xl cursor-pointer" />
              {userMenuVisible && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded shadow-lg p-2">
                  <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    My Account
                  </Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Wishlist
                  </Link>
                  <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Login
                  </Link>
                </div>
              )}
            </div>
            <div className="flex relative">
              <IoCartOutline
                className="text-gray-500 text-2xl cursor-pointer"
                onClick={toggleCartVisibility}
              />
              <span
                className="w-4 h-4 bg-blue-600 rounded-[50%] text-white absolute
                top-[-5px] right-[-5px] flex items-center justify-center text-sm"
              >
                0
              </span>
            </div>
          </div>
        </div>
        <Cart visible={cartVisible} onClose={toggleCartVisibility} />
      </Container>
    </div>
  );
}
