"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-5 left-8 right-8 md:left-0 md:right-0 flex items-center justify-between border border-white border-opacity-30 rounded-lg py-2 px-3 sm:px-6 max-w-screen-xs  md:max-w-screen-sm lg:max-w-screen-md mx-auto bg-white bg-opacity-5 shadow-md backdrop-blur-lg text-white z-50">
      <div>
        <Link href="/" className="text-xl font-semibold">
          Avain AI
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#">Contact</Link>
        <Link href="#">FAQs</Link>
      </div>
      <div className="hidden md:block">
        <Button
          className="bg-transparent backdrop-blur-md rounded-md border border-white border-opacity-20 shadow-md text-white py-2 px-4 transition duration-300 ease-in-out hover:shadow-lg"
          onClick={() => router.push("http://20.106.224.149:8501/")}
        >
          TRY RAVIAN
        </Button>
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
