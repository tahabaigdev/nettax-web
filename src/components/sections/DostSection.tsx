import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";

const DostSection = () => {
  return (
    <section className="relative z-[1] overflow-hidden bg-[#EEF8FF] py-[5rem] lg:py-[9.6rem]">
      <div className="absolute bottom-[5rem] left-[10rem] aspect-[1.1/1] w-[6%]">
        <Image
          src="/images/rocket-02.svg"
          alt="Image"
          className="object-contain object-center"
          height={71}
          width={105}
        />
      </div>

      <div className="bg-dot absolute inset-0 z-[-1] size-[100%] opacity-[0.05]"></div>

      <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
        <div className="relative">
          <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3.5rem] md:right-[2rem]">
            <Image
              src="/images/rays-03.svg"
              alt="Image"
              className="object-contain object-center"
              height={67}
              width={63}
            />
          </div>

          <SectionTitle label="Unleash the power of Nettax Dost" />
        </div>

        <SectionDescription
          label="Simplifying legal and tax matters with expert guidance you can rely on.
Nettax Dost empowers you with clarity, confidence, and compliance."
        />

        <Button asChild>
          <Link href="/">
            <span>Get Free Consultation</span>

            <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
          </Link>
        </Button>
      </div>

      <div className="mt-[-30rem] mb-[-33rem] flex flex-col overflow-hidden md:mt-[-22rem] md:mb-[-25rem] lg:mt-[-12rem] lg:mb-[-12rem] xl:mt-[-5rem] xl:mb-[-5rem]">
        <ContainerScroll>
          <Image
            src="/images/nettax-dost-dash.gif"
            alt="hero"
            width={1890}
            height={2611}
            className="size-[100%] object-center"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default DostSection;
