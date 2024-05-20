import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="bg-transparent  border-white border-opacity-15 flex flex-col border bg-opacity-10 shadow-md backdrop-blur-lg text-white">
          <div className="flex flex-col space-y-4 mt-16 ">
            <Link href="#">About</Link>
            <Link href="#">Vision</Link>
            <Link href="#">Offering</Link>
            <Link href="#">Contact</Link>
          </div>
          <Button className="bg-transparent backdrop-blur-md rounded-md border border-white border-opacity-20 shadow-md text-white py-2 px-4 transition duration-300 ease-in-out  hover:shadow-lg">
            TRY RAVIAN
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
