import { ArrowUpRight, MoveRight } from "lucide-react";
import Image from "next/image";

const linkItem = [
  { id: 0, link: "", img: "/images/partner-logo-1.svg" },
  { id: 1, link: "", img: "/images/partner-logo-2.svg" },
  { id: 2, link: "", img: "/images/partner-logo-3.svg" },
  { id: 3, link: "", img: "/images/partner-logo-4.svg" },
  { id: 4, link: "", img: "/images/partner-logo-5.svg" },
  { id: 5, link: "", img: "/images/partner-logo-1.svg" },
  { id: 6, link: "", img: "/images/partner-logo-2.svg" },
  { id: 7, link: "", img: "/images/partner-logo-3.svg" },
  { id: 8, link: "", img: "/images/partner-logo-4.svg" },
  { id: 9, link: "", img: "/images/partner-logo-5.svg" },
  { id: 10, link: "", img: "/images/partner-logo-5.svg" },
  { id: 11, link: "", img: "/images/partner-logo-1.svg" },
  { id: 12, link: "", img: "/images/partner-logo-2.svg" },
  { id: 13, link: "", img: "/images/partner-logo-3.svg" },
  { id: 14, link: "", img: "/images/partner-logo-4.svg" },
  { id: 15, link: "", img: "/images/partner-logo-5.svg" },
];

const integrationItems = [
  {
    title: "Google Suite",
    description:
      "Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.",
    logo: "/images/google-logo.svg",
    link: "#",
  },
  {
    title: "Google Suite",
    description:
      "Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.",
    logo: "/images/google-logo.svg",
    link: "#",
  },
];

const PartnerSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute top-[40rem] left-[5rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/spring-02.svg"
          alt="Image"
          className="object-contain object-center"
          height={66}
          width={76}
        />
      </div>

      <div className="absolute top-[20rem] right-[5rem] aspect-[1.1/1] w-[5%]">
        <Image
          src="/images/rocket-02.svg"
          alt="Image"
          className="size-full object-contain object-center"
          width={105}
          height={71}
        />
      </div>

      <div className="container">
        <div className="grid gap-[4rem]">
          <div className="grid grid-cols-1 items-center gap-[2rem] md:gap-[4.8rem] lg:grid-cols-2">
            <h3 className="ibm-font text-[3rem] leading-[4rem] font-medium tracking-[-2px] text-(--base-color-01) md:max-w-[60rem] md:text-[4.5rem] md:leading-[6rem]">
              Trusted Partners Built on trust and expertise.
            </h3>

            <div className="flex flex-col gap-[1.6rem]">
              <span className="text-[1.4rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[2.8rem]">
                We work alongside respected professionals who share our
                commitment to clarity, integrity, and results.
              </span>

              <div>
                <a
                  href="#"
                  className="flex gap-[.8rem] text-[1.6rem] leading-[2.88rem] font-medium text-(--base-color-01) md:text-[1.8rem]"
                >
                  <span>View all</span>
                  <MoveRight className="relative top-[3px] size-[2.4rem] stroke-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[2.4rem] md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {linkItem.map((item) => (
              <div key={item.id}>
                <a
                  href=""
                  className="shadow-02 flex aspect-[1/1] size-full items-center justify-center rounded-[1.2rem] border border-[#d4e0ed] bg-white transition-all duration-300 hover:scale-[1.125] hover:border-(--primary-color) hover:bg-[#f4f8ff]"
                >
                  <Image
                    src={item.img}
                    alt="Icon"
                    className="h-[4rem] object-contain object-center"
                    width={500}
                    height={200}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[2rem] grid grid-cols-1 gap-[3.2rem] lg:grid-cols-2">
          {integrationItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.link}
                className="group grid gap-[1.2rem] overflow-hidden rounded-[2.4rem] border border-[#D4E0ED] bg-white p-[3.2rem]"
              >
                <div className="flex justify-between">
                  <Image
                    src={item.logo}
                    alt={`${item.title} Logo`}
                    className="size-[4rem] object-contain object-center"
                    width={705}
                    height={720}
                  />

                  <ArrowUpRight className="size-[3rem] text-(--base-color-01) transition-all duration-300 group-hover:translate-x-[1rem] group-hover:translate-y-[-1rem]" />
                </div>

                <h3 className="text-[2rem] leading-[2.4rem] font-semibold text-(--base-color-01) md:text-[2.4rem] md:leading-[3.36rem]">
                  {item.title}
                </h3>

                <p className="text-[1.6rem] leading-[2.4rem] text-(--base-color-01) md:text-[1.8rem] md:leading-[2.88rem]">
                  {item.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
