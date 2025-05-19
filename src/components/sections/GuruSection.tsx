import React from "react";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight, GraduationCap } from "lucide-react";
import Image from "next/image";
import AccordionSlider from "../ui/AccordionSlider";

const GuruSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[11.2rem] xl:px-[0rem]">
      <div className="absolute right-[5rem] bottom-[40rem] aspect-[1.1/1] w-[6%]">
        <GraduationCap className="size-[6rem] -rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <Image
                src="/images/rays-03.svg"
                alt="Image"
                className="object-contain object-center"
                height={67}
                width={63}
              />
            </div>

            <SectionTitle label="Achieve Financial Success with Our Trusted Experts" />
          </div>

          <SectionDescription label="Hyderabad’s leading taxation firm, delivering expert tax services to a diverse range of clients across Sindh." />

          <Button asChild>
            <Link href="/">
              <span>Get Free Consultation</span>

              <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
            </Link>
          </Button>
        </div>

        <div>
          <AccordionSlider />
        </div>
      </div>
    </section>
  );
};

export default GuruSection;
