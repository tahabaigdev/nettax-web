"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../ui/Navbar";
import { Button } from "../ui/button";
import { ChevronRight, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";
import { useEffect } from "react";
import { useMenuStore } from "@/stores/useMenuStore";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

  // 👉 Lock/unlock body scroll when hamburger menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1150px)").matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call it once on mount in case the screen is already > 1025
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 z-[998] w-full border-b border-[#e7edf6] bg-white">
      <div className="relative mx-auto flex h-[7.8rem] max-w-[128rem] items-center justify-between px-[2rem] py-[1.4rem] sm:px-[4rem]">
        <div className="flex items-center">
          <Link href="/" className="inline-flex max-w-[14rem] sm:max-w-[18rem]">
            <Image
              src={"/images/logo.svg"}
              alt="Brand Logo"
              width={320}
              height={320}
              className="size-full object-cover object-center"
              priority
            />
          </Link>
        </div>

        <div className="hidden xl:block">
          <Navbar />
        </div>

        <div className="hidden items-center gap-[2rem] xl:flex">
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

        <div className="block xl:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-[3.2rem] w-[4.8rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-(--primary-color) transition-all duration-200 hover:opacity-80"
          >
            <Menu className="size-[2.2rem] text-white" />
          </button>
        </div>

        <div
          className={clsx(
            "fixed top-0 left-0 z-[999] w-full bg-[pink] transition-all duration-200",
            isMenuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0",
          )}
        >
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
