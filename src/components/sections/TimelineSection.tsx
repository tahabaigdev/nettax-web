"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import SectionDescription from "../ui/SectionDescription";
import SectionTitle from "../ui/SectionTitle";
import { ChevronRight } from "lucide-react";
import ProcessTimeline from "../ui/ProcessTimeline";
import { useRef } from "react";
import Image from "next/image";

// const timelineData = [
//   {
//     id: 1,
//     label: "Experienced insight for accurate, compliant results.",
//     item: [
//       {
//         label: "Specialized Expertise:",
//         desc: "Our seasoned professionals bring deep knowledge across industries and tax domains to address complex scenarios.",
//       },
//       {
//         label: "Precision Execution:",
//         desc: "We deliver tax solutions with accuracy and attention to detail—nothing is overlooked.",
//       },
//       {
//         label: "Adaptable Solutions:",
//         desc: "From startups to enterprises, our strategies flex to meet the specific challenges and goals of each client.",
//       },
//     ],
//   },
// ];

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute top-[40rem] right-[10rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/rays-03.svg"
          alt="Image"
          className="object-contain object-center"
          width={63}
          height={67}
        />
      </div>

      <div className="absolute top-[10rem] left-[15rem] z-[-1] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/line-03.svg"
          alt="Image"
          className="object-contain object-center"
          width={40}
          height={91}
        />
      </div>

      <div className="absolute right-[30rem] bottom-[20rem] aspect-[1.1/1] w-[3%]">
        <Image
          src="/images/mark-01.svg"
          alt="Image"
          className="object-contain object-center"
          width={48}
          height={34}
        />
      </div>

      <div className="absolute top-[120rem] right-[20rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/rocket-02.svg"
          alt="Image"
          className="size-full object-contain object-center"
          width={105}
          height={71}
        />
      </div>

      <div className="absolute bottom-[70rem] left-[30rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/spring-02.svg"
          alt="Image"
          className="object-contain object-center"
          height={66}
          width={76}
        />
      </div>

      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <SectionTitle label="Achieve Financial Success with Our Trusted Experts" />

          <SectionDescription label="Hyderabad’s leading taxation firm, delivering expert tax services to a diverse range of clients across Sindh." />

          <Button asChild>
            <Link href="/">
              <span>Get Free Consultation</span>

              <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
            </Link>
          </Button>
        </div>

        <div>
          <ProcessTimeline ref={sectionRef} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
