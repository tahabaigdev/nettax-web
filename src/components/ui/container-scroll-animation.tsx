"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const scaleDimensions = () => {
    return [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[90rem] items-center justify-center"
      ref={containerRef}
    >
      <div
        className="relative w-full"
        style={{
          perspective: "2000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="mx-auto h-[25rem] w-full max-w-[33rem] rounded-[3rem] border-4 border-[#2779a7] bg-[#181c39] p-6 md:h-[40rem] md:max-w-[60rem] lg:h-[60rem] lg:max-w-[90rem] xl:h-[75rem] xl:max-w-[120rem]"
    >
      <div className="h-full w-full overflow-hidden rounded-[1rem]">
        {children}
      </div>
    </motion.div>
  );
};
