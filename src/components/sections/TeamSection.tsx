import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Jahangeer brings a clear vision and strong leadership to the firm. With a deep understanding of law and business.",
    name: "Jahangeer Ansari",
    designation: "Co-Founder & CEO",
    src: "/images/jahangeer.jpg",
  },
  {
    quote:
      "Saiqa plays a key role in shaping the firm’s values, focusing on trust, professionalism, and client care at every step.",
    name: "Saiqa Ansari",
    designation: "Co-Founder & CEO",
    src: "/images/Saiqa.jpg",
  },
  {
    quote:
      "Awais is dedicated to delivering solid legal support, handling each case with focus, integrity, and attention to detail.",
    name: "Awais Alam",
    designation: "Associate Lawyer",
    src: "/images/Awais.jpg",
  },
  {
    quote:
      "Kashaf brings fresh ideas and energy to the team, making sure our services reach the right people with the right message.",
    name: "Kashaf Khan",
    designation: "Marketing Executive",
    src: "/images/dummy-female.jpg",
  },
  {
    quote:
      "Abdul connects the firm with new opportunities, building strong relationships and helping the business grow with purpose.",
    name: "Abdul Ahad",
    designation: "Business Development",
    src: "/images/dummy-men.jpg",
  },
  {
    quote:
      "Noama approaches every case with care and precision, committed to delivering thoughtful and effective legal solutions.",
    name: "Noama Khan",
    designation: "Associate Lawyer",
    src: "/images/dummy-female-2.jpg",
  },
  {
    quote:
      "Saqib Soomro is a Tax Litigation Associate skilled in resolving tax disputes and protecting client interests.",
    name: "Saqib soomro",
    designation: "Tax Litigation Associate",
    src: "/images/Saqib.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="relative bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute right-[5rem] bottom-[50rem] aspect-[1.1/1] w-[4%]">
        <Image
          src="/images/line-04.svg"
          alt="Image"
          className="object-contain object-center"
          width={60}
          height={121}
        />
      </div>

      <div className="absolute top-[10rem] left-[5rem] aspect-[1.1/1] w-[4%]">
        <Image
          src="/images/spring-02.svg"
          alt="Image"
          className="object-contain object-center"
          width={76}
          height={66}
        />
      </div>

      <div className="absolute top-[40rem] right-[50rem] aspect-[1.1/1] w-[4%]">
        <Image
          src="/images/line-03.svg"
          alt="Image"
          className="object-contain object-center"
          width={40}
          height={91}
        />
      </div>

      <div className="container">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TeamSection;
