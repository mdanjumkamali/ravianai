"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/Data";
import { AlignJustify, Navigation } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="bg-black border-white border-opacity-15 flex flex-col border shadow-md backdrop-blur-lg text-white">
          <div className="flex flex-col space-y-4 mt-16 ">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="bg-transparent text-white flex items-center px-6 gap-2"
            onClick={() => router.push("http://20.106.224.149:8501/")}
          >
            <span>TRY RAVIAN</span>
            <Navigation width={20} />
          </HoverBorderGradient>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
