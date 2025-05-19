"use client";

import clsx from "clsx";
import { ChevronDown, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DropdownMenuProps {
  label: string;
  href: string;
  image: string;
  description?: string;
  items: { label: string; href: string; description?: string }[];
}

const DropdownMenu = ({
  label,
  items,
  image,
  href,
  description,
}: DropdownMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleToggle = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
      className="relative"
    >
      <button
        onClick={handleToggle}
        className={clsx(
          "flex cursor-pointer gap-[.3rem] text-[1.6rem] leading-[2.56rem] font-normal transition-all duration-300",
          activeDropdown ? "text-(--primary-color)" : "text-(--base-color-01)",
        )}
      >
        <span>{label}</span>

        <ChevronDown
          className={clsx(
            "relative top-[.7rem] size-[1.4rem] stroke-3 transition-transform duration-300",
            activeDropdown ? "rotate-180" : "rotate-0",
          )}
        />
      </button>

      <div
        className={clsx(
          "absolute top-[100%] left-[-300%] z-[100] flex transition-all duration-300",
          activeDropdown
            ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
            : "pointer-events-none invisible pt-[0rem] opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-[.8rem] bg-white shadow-(--shadow-01)">
          <div className="flex gap-[2rem] p-[1.6rem]">
            <div className="min-w-[65rem] p-[1.6rem]">
              <ul className="grid grid-cols-2 gap-x-[2.4rem] gap-y-[3rem]">
                {items.map((item, id) => (
                  <li key={id} className="flex flex-col gap-[.8rem]">
                    <Link
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

            <div className="min-w-[25rem] border-l border-dotted border-[#D8D8D8] pl-[1.5rem]">
              <div className="flex h-[100%] flex-col gap-[1rem] rounded-[.8rem] bg-(--secondary-color) p-[1.6rem]">
                <h4 className="text-[1.4rem] font-semibold tracking-[0.4px] text-white uppercase">
                  {label}
                </h4>

                <div className="h-[17rem] w-full bg-amber-100">
                  <Image
                    src={image}
                    alt="Image"
                    className="size-full object-cover object-center"
                    width={800}
                    height={600}
                  />
                </div>

                <p className="text-[1.5rem] font-normal text-white">
                  {description}
                </p>

                <Link
                  href={href}
                  className="mt-[1rem] flex gap-[.8rem] text-[1.5rem] font-medium text-white"
                >
                  <span>{label}</span>

                  <MoveRight className="relative top-[.2rem] size-[2.4rem] stroke-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
