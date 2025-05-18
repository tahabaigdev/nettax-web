"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const Navlink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "text-[1.6rem] leading-[2.56rem] font-normal transition-all duration-300 hover:text-(--primary-color)",
        pathname === href ? "text-(--primary-color)" : "text-(--base-color-01)",
      )}
    >
      {label}
    </Link>
  );
};

export default Navlink;
