"use client";

import { useMenuStore } from "@/stores/useMenuStore";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuNavLinkProps {
  href: string;
  label: string;
}

const MobileMenuNavlink = ({ href, label }: MobileMenuNavLinkProps) => {
  const pathname = usePathname();
  const { setIsMenuOpen } = useMenuStore();

  return (
    <Link
      onClick={() => {
        setIsMenuOpen(false);
      }}
      href={href}
      className={clsx(
        "flex py-[2rem] text-[1.6rem] leading-[2.56rem] font-medium transition-all duration-300 hover:text-(--primary-color)",
        pathname === href ? "text-(--primary-color)" : "text-(--base-color-01)",
      )}
    >
      {label}
    </Link>
  );
};

export default MobileMenuNavlink;
