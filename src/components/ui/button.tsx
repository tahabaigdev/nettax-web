import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "group inline-flex h-fit justify-center rounded-[.8rem] px-[1.6rem] py-[1rem] text-[1.4rem] md:text-[1.6rem] leading-[2rem] font-normal transition-all duration-200 hover:opacity-90 bg-(--primary-color) text-white",
      dark: "group inline-flex h-fit justify-center rounded-[.8rem] px-[1.6rem] py-[1rem] text-[1.4rem] md:text-[1.6rem] leading-[2rem] font-normal transition-all duration-200 hover:opacity-90 bg-(--secondary-color) text-white",
      transparent:
        "text-[1.6rem] leading-[1.96rem] font-normal text-(--base-color-01) transition-all duration-300 hover:opacity-80",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
