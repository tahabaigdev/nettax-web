"use client";

import { useMenuStore } from "@/stores/useMenuStore";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface MobileMenuDropdownProps {
  label: string;
  href: string;
  description?: string;
  items: { label: string; href: string; description?: string }[];
}

const MobileMenuDropdown = ({ label, items }: MobileMenuDropdownProps) => {
  const { setIsMenuOpen, activeDropdown, setActiveDropdown } = useMenuStore();

  return (
    <div
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <button
        onClick={() => setActiveDropdown(true)}
        className={clsx(
          "flex w-[100%] cursor-pointer justify-between gap-[.3rem] py-[2rem] text-[1.6rem] leading-[2.56rem] font-medium transition-all duration-300",
          activeDropdown ? "text-(--primary-color)" : "text-(--base-color-01)",
        )}
      >
        <span>{label}</span>

        <ChevronDown
          className={clsx(
            "relative top-[.7rem] size-[2rem] rotate-[-90deg] stroke-2 transition-transform duration-300",
          )}
        />
      </button>

      <div
        className={clsx(
          "absolute inset-0 z-[100] flex h-[100%] w-[100%] overflow-y-auto bg-white transition-all duration-300",
          activeDropdown
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <ul className="grid grid-cols-2 gap-x-[1.6rem] px-[1.6rem] sm:gap-x-[2.4rem]">
          {items.map((item, id) => (
            <li key={id} className="flex flex-col gap-[.8rem] py-[1.6rem]">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(false);
                }}
                href={item.href}
                className="text-[1.6rem] font-medium text-(--base-color-01) hover:text-(--primary-color) hover:underline"
              >
                {item.label}
              </Link>

              <p className="text-[1.4rem] leading-[2.2rem] font-normal text-(--base-color-01)">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuDropdown;
