import {
  BanknoteArrowUp,
  Building,
  ClipboardX,
  CornerDownLeft,
  DiamondPercent,
  FilePenLine,
  FileStack,
  Handshake,
  ListTodo,
  MonitorCog,
  MonitorDown,
  MoveRight,
  Scale,
  ScrollText,
  Tag,
  Vote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // or 'swiper/css/bundle' for modular CSS
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const slideData = [
  {
    icon: FilePenLine,
    title: "NTN Registration",
    text: "NTN stands for National Tax Number, a unique identifier assigned by tax authorities to individuals and businesses for tax",
    link: "#",
    color: "#3A53A1",
  },
  {
    icon: ClipboardX,
    title: "Income Tax Return",
    text: "An income tax return is a formal document submitted to tax authorities detailing an individual or business's income, expenses,",
    link: "#",
    color: "#63A079",
  },
  {
    icon: Tag,
    title: "Sales Tax Return",
    text: "A sales tax return is a document filed by businesses to report the amount of sales tax collected from customers and remit it to ta",
    link: "#",
    color: "#9B81B0",
  },
  {
    icon: DiamondPercent,
    title: "Sales Tax Registration",
    text: "Sales tax registration is the process by which businesses register with tax authorities to collect and remit sales tax on",
    link: "#",
    color: "#719EB3",
  },
  {
    icon: MonitorDown,
    title: "Trademark Registration",
    text: "Trademark registration is the legal process of securing exclusive rights to a brand's name, logo, or slogan, protecting it from",
    link: "#",

    color: "#E68B30",
  },
  {
    icon: FileStack,
    title: "Company Registration in SECP",
    text: "Company registration with the Securities and Exchange Commission of Pakistan (SECP) involves formally establishing a",
    link: "#",
    color: "#8DB6B8",
  },
  {
    icon: BanknoteArrowUp,
    title: "DNFPB Registration",
    text: "Designated Non-Financial Businesses and Professions (DNFBPs) refer to sectors such as real estate, legal, and accounting",
    link: "#",
    color: "#289D72",
  },
  {
    icon: Building,
    title: "NGO / NPO Registration",
    text: "Non-Governmental Organization (NGO) or Non-Profit Organization (NPO) registration involves formally establishing an entity",
    link: "#",
    color: "#3A53A1",
  },
  {
    icon: Handshake,
    title: "Partnership deed Registration",
    text: "Partnership deed registration formalizes the agreement between partners outlining the terms of their business",
    link: "#",
    color: "#63A079",
  },
  {
    icon: CornerDownLeft,
    title: "Sindh Service Tax Return and Registration",
    text: "Sindh Service Tax registration is the process through which service providers in Sindh register to collect and remit service tax as",
    link: "#",
    color: "#9B81B0",
  },
  {
    icon: ListTodo,
    title: "SECP Compliance (All kinds of forms)",
    text: "SECP compliance involves adhering to the regulatory requirements set by the Securities and Exchange Commission of",
    link: "#",
    color: "#719EB3",
  },
  {
    icon: ScrollText,
    title: "Income Tax / Sales Tax cases (Appeals & notice Proceedings)",
    text: "Income tax and sales tax cases involve disputes between taxpayers and tax authorities, often arising from assessments,",
    link: "#",
    color: "#E68B30",
  },
  {
    icon: Scale,
    title: "Legal Advisory in Tax Matters",
    text: "Legal advisory in tax matters involves providing expert guidance on compliance with tax laws, structuring transactions, and",
    link: "#",
    color: "#8DB6B8",
  },
  {
    icon: MonitorCog,
    title: "PSEB Registration",
    text: "PSEB Registration empowers IT businesses with official recognition, access to incentives, and opportunities to grow globally.",
    link: "#",
    color: "#289D72",
  },
  {
    icon: Vote,
    title: "PSW Registration",
    text: "PSEB Registration empowers IT businesses with official recognition, access to incentives, and opportunities",
    link: "#",
    color: "#E68B30",
  },
];

type CardSliderProps = {
  swiperRef: React.MutableRefObject<SwiperType | null>;
  onSlideChange: () => void;
};

const CardSlider = ({ swiperRef, onSlideChange }: CardSliderProps) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={false}
        slidesPerView={3}
        spaceBetween={32}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          onSlideChange(); // Call initially
        }}
        onSlideChange={onSlideChange}
        className="mySwiper launch-slider"
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <a
              key={idx}
              href={item.link}
              className="group relative z-[1] grid h-full overflow-hidden rounded-[2.4rem] border border-[var(--primary-color)] bg-white px-[4rem] py-[3.2rem]"
            >
              <div className="relative">
                <div className="flex size-[6rem] items-center justify-center rounded-full bg-[#F6F6F9] transition-all duration-200 group-hover:bg-[transparent]">
                  <item.icon className="size-[3rem] stroke-[1.5px] text-(--base-color-01) transition-all duration-200 group-hover:text-white" />
                </div>
              </div>

              <div className="mt-[4.8rem] mb-[8.8rem]">
                <h4 className="ibm-font text-[2rem] leading-[3rem] font-semibold text-(--base-color-01) transition-all duration-200 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="mt-[1rem] line-clamp-2 text-[1.6rem] leading-[2.2rem] font-normal text-(--base-color-01) transition-all duration-200 group-hover:text-white">
                  {item.text}
                </p>
              </div>

              <div className="flex gap-[.8rem] text-[1.8rem] leading-[2.88rem] font-normal text-white">
                <span>Learn More</span>
                <MoveRight className="relative top-[3px] size-[2.4rem] stroke-1" />
              </div>

              <div
                style={{
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="absolute bottom-[-23.4rem] left-[-7.3rem] z-[-1] size-[37.4rem] rotate-[80deg] group-hover:bottom-[-25rem] group-hover:left-[-28rem] group-hover:size-[97.9rem] group-hover:rotate-[40deg]"
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill={item.color}
                    d="M67,-37.6C81.2,-13.9,83.5,17.8,70.4,40.3C57.2,62.9,28.6,76.2,0.3,76C-27.9,75.8,-55.8,62,-69.2,39.4C-82.6,16.8,-81.4,-14.8,-67.5,-38.3C-53.5,-61.9,-26.8,-77.4,-0.2,-77.2C26.3,-77.1,52.7,-61.3,67,-37.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
