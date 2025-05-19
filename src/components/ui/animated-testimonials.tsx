"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="">
      <div className="relative grid grid-cols-1 items-end gap-[6rem] lg:grid-cols-2 lg:gap-[0rem]">
        <div className="flex justify-center lg:block">
          <div className="relative aspect-[1/1] w-[70%]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-top"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h6 className="ibm-font max-w-[70rem] text-[3.5rem] leading-[4.5rem] font-medium tracking-[-2px] text-(--base-color-01) md:text-[6rem] md:leading-[6rem]">
              Meet Our Team
            </h6>

            <p className="my-[2rem] text-(--base-color-01) md:text-[2rem] md:leading-[3rem]">
              We partner with our clients to provide bespoke tax solutions,
              leveraging leading-edge technology and deep expertise. Our
              commitment to transparency and clarity means you understand every
              step of the process, empowering you to make smart
              financial decisions.
            </p>

            <h3 className="ibm-font text-[3.5rem] leading-[4rem] font-medium tracking-[-2px] text-(--base-color-01) md:text-[3rem] md:leading-[4rem]">
              {testimonials[active].name}
            </h3>
            <p className="text-(--base-color-01) md:text-[2rem] md:leading-[3rem]">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-[3rem] mb-[2rem] max-w-[50rem] text-(--base-color-01) md:text-[1.8rem] md:leading-[2.4rem]">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex size-[4rem] items-center justify-center rounded-full bg-(--primary-color)"
            >
              <IconArrowLeft className="size-[2rem] text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>

            <button
              onClick={handleNext}
              className="group/button flex size-[4rem] items-center justify-center rounded-full bg-(--primary-color)"
            >
              <IconArrowRight className="size-[2rem] text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
