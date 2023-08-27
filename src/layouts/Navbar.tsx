import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.jpg";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import Search from "@/components/Search";

const Navbar: React.FC = () => {
  const cartItems = 2;
  return (
    <div className="w-full bg-white shadow-sm py-2 sticky top-0 z-50">
      <div className="lg:max-w-[1188px] px-3 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 text-primary">
          <Image src={Logo} width="38" height="30" alt="DarazPro Rakib" />
          <h2 className="font-bold">Darax</h2>
        </div>

        {/* Search */}
        <Search />

        <div className="flex items-center gap-10">
          {/* Cart Button */}
          <Link
            href="/cart"
            className="relative cursor-pointer hover:text-primary"
          >
            <span>
              <AiOutlineShoppingCart className="text-2xl" />
            </span>
            <p className="w-4 h-4 rounded-full text-center absolute -top-3 -right-3 text-xs bg-primary text-white">
              {cartItems}
            </p>
          </Link>
          {/* Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <div className="text-2xl cursor-pointer ">
                <Image
                  className="border rounded-full"
                  src={Avatar}
                  width="42"
                  height="42"
                  alt="Rakib"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 mt-1 shadow bg-white border rounded-lg w-52"
            >
              <li>
                <a>
                  <RxAvatar className="text-lg" /> Profile
                </a>
              </li>
              <li>
                <a>
                  <BsTruck className="text-lg" /> Track Order
                </a>
              </li>
              <li>
                <a>
                  <AiOutlineLogout className="text-lg" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
