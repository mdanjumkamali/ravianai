import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between border border-white border-opacity-30 rounded-lg py-2 px-3 max-w-screen-md mx-auto bg-white bg-opacity-5 shadow-md backdrop-blur-lg text-white">
        <div>
          <Link href="/" className="text-xl font-semibold">
            Avain AI
          </Link>
        </div>
        <div className=" hidden lg:flex items-center gap-6 ">
          <Link href="#" className="text-white">
            About
          </Link>
          <Link href="#">Vision</Link>
          <Link href="#">Offering</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="hidden lg:block">
          <Button className="bg-transparent backdrop-blur-md rounded-md border border-white border-opacity-20 shadow-md text-white py-2 px-4 transition duration-300 ease-in-out  hover:shadow-lg">
            TRY RAVIAN
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
