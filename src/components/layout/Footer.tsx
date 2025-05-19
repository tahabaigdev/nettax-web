import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import ToTopButton from "../ui/ToTopButton";

const productsItem = [
  "Home",
  "Services",
  "Price List",
  "About Us",
  "Tax Calculator",
];

const productsItem2 = ["Sindh Revenue Board", "SECP", "PSEB", "FBR"];

const Footer = () => {
  return (
    <footer className="bg-(--primary-color)">
      <div className="container px-[2rem] pt-[6rem] lg:pt-[10rem] xl:px-[0rem]">
        <div className="relative grid grid-cols-1 gap-y-[4rem] sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-[0rem]">
          <div className="flex flex-col gap-[2rem]">
            <a href="" className="inline-flex max-w-[18rem]">
              <Image
                src="/images/logo-white.svg"
                alt="Brand Logo"
                className="object-cover object-center"
                width={320}
                height={320}
              />
            </a>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <h5 className="text-[1.8rem] font-medium text-white">
              Quick Links
            </h5>

            <ul className="flex flex-col gap-[1rem] text-white">
              {productsItem.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <h5 className="text-[1.8rem] font-medium text-white">
              Related Links
            </h5>

            <ul className="flex flex-col gap-[1rem] text-white">
              {productsItem2.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <h5 className="text-[1.8rem] font-medium text-white">Follow us</h5>

            <ul className="flex items-center gap-[1rem]">
              <li>
                <a
                  href="https://www.facebook.com/netaxpvtltd"
                  className="group"
                >
                  <Facebook className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/nettaxpvtltd"
                  className="group"
                >
                  <Instagram className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a href="#" className="group">
                  <Twitter className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/nettaxpk"
                  className="group"
                >
                  <Linkedin className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="big-logo apect-[3.8/1] container mx-auto mt-[10rem] w-full opacity-40">
        <Image
          src="/images/logo-white.svg"
          alt="Brand Logo"
          className="relative bottom-[-2rem] size-full object-contain md:bottom-[-4rem]"
          width={320}
          height={320}
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-[2rem] border-t border-[#ffffff1f] px-[4.8rem] py-[1rem] md:flex-row">
        <p className="text-[1.6rem] leading-[1.26rem] font-normal text-white">
          All rights reserved 2025 © Nettax
        </p>

        <ToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
