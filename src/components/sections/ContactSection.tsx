import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactForm from "../ui/ContactForm";

const ContactSection = () => {
  return (
    <section className="relative px-[2rem] py-[5rem] lg:py-[7rem] xl:px-[0rem]">
      <div className="absolute top-[20rem] right-[10rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/rocket-02.svg"
          alt="Image"
          className="size-full object-contain object-center"
          width={105}
          height={71}
        />
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
        <div className="relative z-[1] grid grid-cols-1 items-center gap-[4rem] overflow-hidden rounded-[2.4rem] bg-(--secondary-color) px-[1rem] pt-[3rem] md:px-[4.8rem] md:pt-[7.2rem] lg:grid-cols-2">
          <div className="absolute inset-0 z-[-1] opacity-40">
            <Image
              src="/images/bg-noise.avif"
              alt="Background Noise"
              className="object-cover object-center"
              fill
              priority
            />
          </div>

          <div className="absolute top-[-50rem] right-[-50rem] z-[-1] aspect-[2.5/1] w-[125rem] rounded-[100%] bg-[#5868fb] blur-[17.2rem]"></div>

          <div>
            <ContactForm />
          </div>

          <div className="order-[-1] flex flex-col gap-[2.4rem] lg:order-none">
            <h3 className="text-[3rem] leading-[3.5rem] font-medium tracking-[-2px] text-white md:text-[3.6rem] md:leading-[4.33rem]">
              We&apos;re Here to Help
            </h3>

            <p className="max-w-[50rem] text-[1.6rem] leading-[2.4rem] text-[#B3B3B3] md:text-[2rem]">
              Legal matters can feel overwhelming, but you&apos;re not alone.
              Contact us today for trusted, personalized support.
            </p>

            <div className="hidden items-center gap-[2rem] xl:flex">
              <Button asChild>
                <Link href="/">
                  <span>Get Free Consultation</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </Link>
              </Button>

              <Button variant="dark" asChild>
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
