"use client";

import clsx from "clsx";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef } from "react";

const ProcessTimeline = forwardRef<HTMLDivElement>((_, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>, // cast needed for Framer Motion
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["-10%", "120%"]);

  // Individual refs for each step
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const step5Ref = useRef<HTMLDivElement>(null);
  const step6Ref = useRef<HTMLDivElement>(null);

  const inView1 = useInView(step1Ref, {
    amount: 0.5,
  });
  const inView2 = useInView(step2Ref, {
    amount: 0.5,
  });
  const inView3 = useInView(step3Ref, {
    amount: 0.5,
  });
  const inView4 = useInView(step4Ref, {
    amount: 0.5,
  });
  const inView5 = useInView(step5Ref, {
    amount: 0.5,
  });
  const inView6 = useInView(step6Ref, {
    amount: 0.5,
  });

  return (
    <div ref={ref} className="relative z-[1]">
      <div className="process-line absolute top-0 left-[1.6rem] z-[-1] h-[100%] w-[.8rem] overflow-hidden rounded-[2.8rem] border-[1px] border-[#e4e2e9] bg-white lg:left-[50%] lg:translate-x-[-50%]">
        <motion.div
          className="w-[100%] rounded-[2.8rem] bg-(--primary-color)"
          style={{ height }}
        ></motion.div>
      </div>

      <div className="grid gap-[2.4rem] lg:block">
        <div
          ref={step1Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView1,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView1,
                },
              )}
            >
              01
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={step2Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView2,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView2,
                },
              )}
            >
              02
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </div>

        <div
          ref={step3Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView3,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView3,
                },
              )}
            >
              03
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={step4Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView4,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView4,
                },
              )}
            >
              04
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </div>

        <div
          ref={step5Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView5,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView5,
                },
              )}
            >
              05
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={step6Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView6,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView6,
                },
              )}
            >
              06
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]">
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Experienced insight for accurate, compliant results.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Specialized Expertise:
                    </strong>{" "}
                    Our seasoned professionals bring deep knowledge across
                    industries and tax domains to address complex scenarios.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Precision Execution:
                    </strong>{" "}
                    We deliver tax solutions with accuracy and attention to
                    detail—nothing is overlooked.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Adaptable Solutions:
                    </strong>{" "}
                    From startups to enterprises, our strategies flex to meet
                    the specific challenges and goals of each client.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProcessTimeline.displayName = "ProcessTimeline";

export default ProcessTimeline;
