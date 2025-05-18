"use client";

import { useLenis } from "@/hooks/useLenis";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
