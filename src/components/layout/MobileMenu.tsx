import clsx from "clsx";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import MobileMenuNavbar from "../ui/MobileMenuNavbar";
import { Button } from "../ui/button";
import { useMenuStore } from "@/stores/useMenuStore";

const MobileMenu = () => {
  const { setIsMenuOpen, setActiveDropdown, activeDropdown } = useMenuStore();

  return (
    <div className="flex h-[100vh] w-full flex-col bg-white p-[.4rem]">
      <div className="flex items-center justify-between border-b border-dashed border-[#e4e4e4] p-[1.6rem]">
        <div className="relative h-[3rem] w-[6rem]">
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            href="/"
            className={clsx(
              "ibm-font absolute top-[50%] inline-flex -translate-y-[50%] text-[2rem] font-bold tracking-wider text-(--primary-color) transition-all duration-200",
              activeDropdown
                ? "pointer-events-none invisible left-[-10px] opacity-0"
                : "pointer-events-auto visible relative left-[0px] opacity-100",
            )}
          >
            NETTAX
          </Link>

          <button
            onClick={() => setActiveDropdown(false)}
            className={clsx(
              "absolute top-[50%] flex -translate-y-[50%] cursor-pointer gap-[.5rem] text-[1.6rem] font-normal text-(--primary-color) transition-all duration-200",
              activeDropdown
                ? "pointer-events-auto visible left-[0px] opacity-100"
                : "pointer-events-none invisible left-[10px] opacity-0",
            )}
          >
            <ChevronLeft className="relative top-[4px] size-[1.6rem] stroke-[2.5px]" />
            <span>Back</span>
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
          <X className="text-(--base-color-01)" />
        </button>
      </div>

      <div className="relative flex-1 overflow-x-hidden overflow-y-auto">
        <MobileMenuNavbar />
      </div>

      <div className="grid grid-cols-2 items-center gap-[2rem] border-t-[1px] border-dashed border-[#e4e4e4] px-[1.6rem] pt-[1.6rem] pb-[6.4rem] text-center">
        <Button asChild variant="transparent">
          <Link href="/">Login</Link>
        </Button>

        <Button asChild>
          <Link href="/">
            <span>Register</span>

            <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
