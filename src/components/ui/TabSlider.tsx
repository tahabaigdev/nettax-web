"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  CircleFadingArrowUp,
  FastForward,
  Languages,
  MousePointerClick,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

interface Feature {
  label: string;
  icon: React.ElementType;
}

interface HeroSlide {
  heading: string;
  subtext: string;
  img: string;
}

const features: Feature[] = [
  {
    label: "Fast, Hassle-Free Service",
    icon: CircleFadingArrowUp,
  },
  {
    label: "Legal Advisory & Compliance",
    icon: FastForward,
  },
  {
    label: "Business Registration Support",
    icon: Languages,
  },
  {
    label: "Affordable Plans for Individuals & Businesses",
    icon: MousePointerClick,
  },
];

const heroSlides: HeroSlide[] = [
  {
    heading: "Your Trusted Tax & Legal Consultant",
    subtext:
      "Let experts take the stress out of your taxes, filings, and compliance. We handle the legal work so you can focus on what matters most.",
    img: "/images/feature-img-01.png",
  },
  {
    heading: "Accurate & Compliant Tax Filing",
    subtext:
      "Stay on the right side of the law. We ensure every tax return is error-free and fully compliant with legal requirements.",
    img: "/images/feature-img-02.png",
  },
  {
    heading: "Fast Business & NTN Registration",
    subtext:
      "Whether you're starting a business or need an NTN, we handle the paperwork quickly and correctly — so you can go live faster.",
    img: "/images/feature-img-03.png",
  },
  {
    heading: "Personalized Legal Advice",
    subtext:
      "From tax planning to legal notices, get expert support tailored to your needs — not generic templates.",
    img: "/images/feature-img-04.png",
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

const TabSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => resetTimeout();
  }, [selectedIndex]);

  return (
    <div>
      <div className="mb-[6rem] grid grid-cols-2 overflow-hidden rounded-[.96rem] bg-[#ffffff] lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = selectedIndex === index;

          return (
            <div
              key={feature.label}
              onClick={() => setSelectedIndex(index)}
              className={`flex cursor-pointer flex-col items-start justify-between transition-all duration-300 lg:items-center ${
                isActive ? "bg-[#f3f3f3]" : ""
              }`}
            >
              <div
                className={`my-[2rem] flex w-full items-center gap-[1.6rem] px-[1rem] text-[1.2rem] leading-[1.4rem] font-medium text-[var(--base-color-01)] md:px-[2rem] md:text-[1.4rem] md:leading-[1.728rem]`}
              >
                <Icon
                  className={`min-w-[2.4rem] ${
                    isActive
                      ? "text-(--primary-color)"
                      : "text-(--base-color-01)"
                  }`}
                />
                <span className="max-w-[17rem]">{feature.label}</span>
              </div>

              <div
                className={`h-[.24rem] w-full ${isActive ? "bg-[#d8d8d8]" : "bg-[transparent]"}`}
              >
                {isActive && (
                  <motion.div
                    key={selectedIndex}
                    className="h-full bg-[var(--primary-color)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: AUTO_PLAY_INTERVAL / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-start gap-[3.2rem] xl:flex-row xl:items-center"
        >
          <div className="flex w-full max-w-[60rem] flex-col justify-center xl:max-w-[46.8rem]">
            <div className="relative">
              <div className="absolute top-[-3.5rem] right-[2rem] w-[7%]">
                <Image
                  src="/images/rays-03.svg"
                  alt="Image"
                  className="object-contain object-center"
                  height={67}
                  width={63}
                />
              </div>

              <h3 className="ibm-font mb-[2.4rem] text-[3rem] leading-[4rem] font-medium tracking-[-2px] text-(--base-color-01) capitalize md:text-[5rem] md:leading-[6rem]">
                {heroSlides[selectedIndex].heading}
              </h3>
            </div>

            <p className="mb-[2.4rem] text-[1.6rem] leading-[2.4rem] font-normal text-(--base-color-01) md:text-[2rem] md:leading-[2.8rem]">
              {heroSlides[selectedIndex].subtext}
            </p>

            <div className="flex flex-col items-start gap-[1rem] md:flex-row md:items-center md:gap-[2rem]">
              <Button asChild className="w-[100%]">
                <Link href="/">
                  <span>Get Free Consultation</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </Link>
              </Button>

              <Button className="w-[100%]" variant="dark" asChild>
                <Link href="/">
                  <span>Become a Filer</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex h-[30rem] w-full justify-center overflow-hidden rounded-[2.4rem] md:h-[50rem] xl:h-[43.5rem]">
            <Image
              src={heroSlides[selectedIndex].img}
              className="object-contain object-top"
              alt=""
              width={600}
              height={800}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabSlider;
