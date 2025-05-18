"use client";

import { Cross, Cuboid, Pyramid } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const imagesMap: Record<string, React.ReactNode> = {
  "item-1": (
    <>
      <div className="relative size-full">
        <Image
          src="/images/about-section-bg.avif"
          alt="About Section Bg"
          className="size-full object-cover object-center"
          width={755}
          height={1024}
          priority
        />

        <div className="shadow-06 absolute top-[10.6rem] left-[50%] w-[76%] translate-x-[-50%]">
          <Image
            src="/images/about-section-img-01.avif"
            alt="About Section Bg"
            className="size-full object-contain object-center"
            width={512}
            height={125}
          />
        </div>

        <div className="absolute bottom-[10.2rem] left-[50%] aspect-[2.1/1] w-[80%] translate-x-[-50%]">
          <Image
            src="/images/about-section-img-02.avif"
            alt="About Section Bg"
            className="size-full object-contain object-center"
            width={768}
            height={278}
          />
        </div>

        <div className="absolute top-[7rem] left-[2.3rem] h-[2.8rem] w-[11%]">
          <Image
            src="/images/mark-01.svg"
            alt="About Section Bg"
            className="size-full object-contain object-center"
            width={48}
            height={34}
          />
        </div>

        <div className="absolute bottom-[-10rem] left-[46%] aspect-[2.1/1] w-[69%] translate-[-50%]">
          <Image
            src="/images/line-01.svg"
            alt="About Section Bg"
            className="size-full object-contain object-center"
            width={275}
            height={96}
          />
        </div>
      </div>
    </>
  ),
  "item-2": (
    <>
      <div className="relative size-full">
        <Image
          src="/images/about-section-bg.avif"
          alt="About Section Bg"
          className="object-cover object-center"
          width={755}
          height={1024}
          priority
        />

        <div className="aspect-[.9 / 1] absolute top-1/2 left-1/2 w-[69%] translate-[-50%]">
          <Image
            src="/images/about-section-img-03.avif"
            alt="About Section Bg"
            className="object-contain object-center"
            height={686}
            width={688}
          />
        </div>

        <div className="aspect-[1.1 / 1] absolute top-[4rem] right-[2rem] h-[4rem] w-[13%]">
          <Image
            src="/images/rays-02.svg"
            alt="About Section Bg"
            className="object-contain object-center"
            width={44}
            height={40}
          />
        </div>

        <div className="aspect-[7.4 / 1] absolute bottom-[-1rem] left-[-7.7rem] w-[145%]">
          <Image
            src="/images/line-02.svg"
            alt="About Section Bg"
            className="object-contain object-center"
            width={499}
            height={67}
          />
        </div>
      </div>
    </>
  ),
  "item-3": (
    <>
      <div className="relative size-full">
        <Image
          src="/images/about-section-bg.avif"
          alt="About Section Bg"
          className="object-cover object-center"
          width={755}
          height={1024}
          priority
        />

        <div className="aspect-[.9 / 1] absolute top-1/2 left-1/2 w-[76%] translate-[-50%]">
          <Image
            src="/images/about-section-img-04.avif"
            alt="About Section Bg"
            className="object-cover object-center"
            width={760}
            height={840}
          />
        </div>

        <div className="aspect-[1.1 / 1] absolute top-[1rem] left-[1rem] w-[12%]">
          <Image
            src="/images/heart-01.svg"
            alt="About Section Bg"
            className="object-contain object-center"
            width={46}
            height={43}
          />
        </div>

        <div className="aspect-[2 / 1] absolute right-[-1rem] bottom-[-1rem] w-[50%]">
          <Image
            src="/images/circle-01.svg"
            alt="About Section Bg"
            className="object-contain object-center"
            width={250}
            height={167}
          />
        </div>
      </div>
    </>
  ),
};

const accordionItems = [
  {
    id: "item-1",
    title: "Efficient Tax Savings",
    desc: "Strategic, compliant tax planning designed to optimize returns and reduce liabilities.",
    icon: Cuboid,
  },
  {
    id: "item-2",
    title: "Complete Tax Profile Management",
    desc: "Seamless management of your entire tax lifecycle—accurate, secure, and stress-free.",
    icon: Pyramid,
  },
  {
    id: "item-3",
    title: "Tax Education & Insights",
    desc: "Empowering you with expert knowledge and actionable insights for smarter financial decisions.",
    icon: Cross,
  },
];

const AccordionSlider: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("item-1");
  const items = ["item-1", "item-2", "item-3"];

  const handleChange = (value: string) => {
    setActiveItem(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = items.indexOf(activeItem);
      const nextIndex = (currentIndex + 1) % items.length;
      setActiveItem(items[nextIndex]);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [activeItem]);

  return (
    <div className="flex flex-col items-center justify-between gap-[3.2rem] xl:flex-row xl:items-start">
      <div className="w-full xl:max-w-[45%]">
        <Accordion
          type="single"
          className="w-full"
          value={activeItem}
          onValueChange={handleChange}
        >
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="relative border-none py-[2.4rem] data-[state=open]:pb-[1.2rem]"
            >
              <AccordionTrigger className="ibm-font group flex items-center justify-start gap-[1.2rem] text-[2rem] leading-[2.8rem] font-semibold text-(--base-color-01) !no-underline data-[state=open]:text-(--heading-color-01) md:data-[state=open]:text-[2.8rem]">
                <item.icon className="size-[3.2rem] !rotate-none stroke-[0.5px] text-(--primary-color) transition-all duration-300 group-data-[state=open]:size-[4rem] group-data-[state=open]:fill-(--primary-color) group-data-[state=open]:text-white" />
                <span>{item.title}</span>
              </AccordionTrigger>

              <AccordionContent className="px-[.4rem] py-[1.2rem]">
                <p className="text-[1.6rem] leading-[2.56rem] font-normal text-(--base-color-01)">
                  {item.desc}
                </p>
              </AccordionContent>

              {activeItem === item.id && (
                <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-[#D4E0ED]">
                  <motion.div
                    key={item.id}
                    className="h-full bg-(--primary-color)"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="-order-1 flex h-[35rem] w-full items-start justify-center md:h-[55rem] md:max-w-[80%] lg:h-[45.7rem] lg:max-w-[50%] xl:order-none xl:max-w-[38%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="relative size-full overflow-hidden rounded-[2.4rem]"
          >
            {imagesMap[activeItem]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccordionSlider;
