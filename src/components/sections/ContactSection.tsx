import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CalendarClock, ChevronRight } from "lucide-react";
import ContactForm from "../ui/ContactForm";

const ContactSection = () => {
  return (
    <section className="relative px-[2rem] py-[5rem] lg:py-[7rem] xl:px-[0rem]">
      <div className="absolute top-[20rem] right-[5rem] aspect-[1.1/1] w-[5%]">
        <CalendarClock className="size-[6rem] -rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="absolute bottom-[10rem] left-[5rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/spring-02.svg"
          alt="Image"
          className="object-contain object-center"
          height={66}
          width={76}
        />
      </div>

      <div className="container">
        <div className="relative z-[1] grid grid-cols-1 items-end gap-[4rem] overflow-hidden rounded-[2.4rem] bg-(--secondary-color) px-[1rem] pt-[3rem] md:px-[4.8rem] lg:grid-cols-2">
          <div className="absolute inset-0 z-[-1] opacity-40">
            <Image
              src="/images/bg-noise.avif"
              alt="Background Noise"
              className="object-cover object-center"
              fill
              priority
            />
          </div>

          <div className="absolute top-[0rem] right-[0rem] z-[-1] opacity-20">
            <Image
              src="/images/logo-icon.svg"
              alt="Image"
              className="object-cover object-center"
              height={500}
              width={500}
            />
          </div>

          <div className="absolute top-[-50rem] right-[-50rem] z-[-1] aspect-[2.5/1] w-[125rem] rounded-[100%] bg-[#5868fb] blur-[17.2rem]"></div>

          <div>
            <ContactForm />
          </div>

          <div className="order-[-1] flex flex-col gap-[2.4rem] pb-[3rem] lg:order-none">
            <h3 className="text-[3rem] leading-[3.5rem] font-medium tracking-[-2px] text-white md:text-[3.6rem] md:leading-[4.33rem]">
              We&apos;re Here to Help
            </h3>

            <p className="max-w-[50rem] text-[1.6rem] leading-[2.4rem] text-[#B3B3B3] md:text-[2rem]">
              Legal matters can feel overwhelming, but you&apos;re not alone.
              Contact us today for trusted, personalized support.
            </p>

            <div className="flex flex-col items-center gap-[2rem] md:flex-row">
              <Button className="w-full md:w-auto" asChild>
                <Link href="/">
                  <span>Get Free Consultation</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </Link>
              </Button>

              <Button className="w-full md:w-auto" variant="dark" asChild>
                <Link href="/">
                  <span>Become a Filer</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
