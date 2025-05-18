import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Hallar Azad",
    designation: "XR Product Leader",
    image: "/images/rating-img-01.jpeg",
  },
  {
    id: 2,
    name: "Vikram Kumar Devnani",
    designation: "Co-Founder at HostYD",
    image: "/images/rating-img-02.jpeg",
  },
  {
    id: 3,
    name: "Aakif Nazeer",
    designation: "Data & AI/ML Specialist",
    image: "/images/rating-img-03.jpeg",
  },
  {
    id: 4,
    name: "Abdul Haseeb",
    designation: "Founder & CEO at Verior",
    image: "/images/rating-img-04.jpeg",
  },
];

const HeroSection = () => {
  return (
    <section className="relative px-[2rem] pt-[12rem] pb-[5rem] md:pt-[17rem] lg:pb-[8rem] xl:px-[0rem]">
      <div className="absolute bottom-0 left-0 z-[-1] size-[100%]">
        <Image
          src="/images/grid.avif"
          alt="Background Image"
          className="object-cover object-center"
          fill
          priority
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-[8rem] xl:flex-row">
          <div className="flex w-[100%] flex-col items-center text-center xl:w-[42%] xl:items-start xl:text-left">
            <h1 className="ibm-font text-[3.5rem] leading-[4rem] font-medium tracking-[-1px] text-(--base-color-01) md:text-[7.2rem] md:leading-[8.28rem] md:tracking-[-3px] xl:max-w-[50rem]">
              Simplifying Your Tax Journey with{" "}
              <span className="relative">
                nettax.{" "}
                <div className="absolute top-[1rem] right-[-12rem] hidden max-w-[10rem] xl:block">
                  <Image
                    src="/images/twisted-arrow.svg"
                    alt="Arrow"
                    className="scale-x-[-1] -rotate-[25deg] object-cover object-center"
                    width={800}
                    height={290}
                  />
                </div>
              </span>
            </h1>

            <p className="mt-[2.4rem] text-[1.6rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[3.6rem]">
              Your tax journey made simple with nettax. Quick, reliable, and
              stress-free from start to finish.
            </p>

            <div className="mt-[3.2rem] flex w-[100%] gap-[1.2rem]">
              <Input
                type="email"
                name="email"
                placeholder="Enter email to get started"
                className="h-[4rem] rounded-[.8rem]"
              />

              <Button className="min-w-max">
                <span>Get Started</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </Button>
            </div>

            <div className="mt-[3.2rem] flex items-center gap-[2rem]">
              <div className="flex flex-row items-center">
                <AnimatedTooltip items={people} />
              </div>

              <h4 className="max-w-[10rem] text-[1.4rem] leading-[1.8rem] font-normal text-(--base-color-01)">
                Trusted by 6,287 users
              </h4>
            </div>
          </div>

          <div className="order-[-1] xl:order-none xl:w-[51%]">
            <div className="relative h-[26rem] min-w-[32rem] md:h-[49rem] md:min-w-[60rem]">
              <div className="absolute right-[6.2rem] bottom-[.2rem] aspect-[1.1/1] w-[82%] overflow-hidden rounded-[.8rem]">
                <Image
                  src="/images/hero-bg.png"
                  alt="Hero Bg"
                  className="size-full object-cover object-center"
                  width={1024}
                  height={895}
                />
              </div>

              <div className="absolute top-0 right-0 aspect-[.8/1] w-[53%] rounded-[.8rem]">
                <Image
                  src="/images/hero-img-01.avif"
                  alt="Hero Bg"
                  className="size-full object-contain object-center"
                  width={1024}
                  height={840}
                />

                <div className="absolute top-[11.3rem] left-[2.3rem] z-[9] aspect-[1.7/1] w-[28%]">
                  <Image
                    src="/images/spring.svg"
                    alt="Spring"
                    className="object-cover object-center"
                    width={97}
                    height={54}
                  />
                </div>
              </div>

              <div className="shadow-05 absolute bottom-[9.4rem] left-0 aspect-[1/1] w-[44%] rounded-[.8rem]">
                <Image
                  src="/images/hero-img-02.avif"
                  alt="Hero Bg"
                  className="object-contain object-center"
                  width={562}
                  height={586}
                />

                <div className="absolute bottom-[-2.6rem] left-[-2.6rem] aspect-[1/1] w-[11%]">
                  <Image
                    src="/images/rays.svg"
                    alt="Rays"
                    className="object-cover object-center"
                    width={32}
                    height={31}
                  />
                </div>
              </div>

              <div className="shadow-05 absolute right-[15.6rem] bottom-[-1.2rem] aspect-[3.5/1] w-[50%] rounded-[.8rem]">
                <Image
                  src="/images/hero-img-03.avif"
                  alt="Hero Bg"
                  className="object-cover object-center"
                  width={512}
                  height={148}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
