"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import Search from "@/components/Search";
import { SignOutButton } from "@clerk/nextjs";

// clerk
import { useUser } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const { isSignedIn, user } = useUser();
  const cartItems = 2;
  return (
    <div className="w-full bg-white shadow-sm py-2 sticky top-0 z-50">
      <div className="lg:max-w-[1300px] px-3 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-1 text-primary">
            <Image src={Logo} width="38" height="30" alt="DarazPro Rakib" />
            <h2 className="font-bold">Darax</h2>
          </div>
        </Link>

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
          {!isSignedIn ? (
            <Link href="/sign-in" className="btn btn-primary btn-sm">
              Sign In
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="text-2xl cursor-pointer ">
                  <img
                    className="border border-primary rounded-full"
                    src={user?.imageUrl}
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
                <li className="border-t mt-2">
                  <a className="mt-2">
                    <SignOutButton>
                      <button className="flex items-center gap-3">
                        <AiOutlineLogout /> Sign Out
                      </button>
                    </SignOutButton>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
