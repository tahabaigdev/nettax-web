import DropdownMenu from "./DropdownMenu";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <ul className="flex items-center gap-[3rem]">
      <li>
        <DropdownMenu
          label="About Us"
          description="Planetary problems. Global solutions. Local deployment."
          image="/images/about-dropdown.jpg"
          href="/"
          items={[
            {
              label: "Who We Are",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Our Mission & Vision",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Our Team",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Why Choose Nettax?",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Dost"
          description="Planetary problems. Global solutions. Local deployment."
          href="/"
          image="/images/nettax-dost-dropdown.gif"
          items={[
            {
              label: "About Nettax Dost",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Nettax Agent",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Account Registration",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Nettax Agent Locator",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Guru"
          description="Planetary problems. Global solutions. Local deployment."
          href="/"
          image="/images/nettax-guru-dropdown.gif"
          items={[
            {
              label: "Resources",
              description:
                "Your go-to knowledge repository for Income Tax information, tailored for both Individuals & Businesses in Pakistan.",
              href: "/",
            },
            {
              label: "Tax Q&A",
              description:
                "Got tax questions? Start your tax journey with Nettax, and we'll simplify the answers for you.",
              href: "/",
            },
            {
              label: "Blog",
              description:
                "Stay updated with the latest tax insights, news, and expert tips from Nettax.",
              href: "/",
            },
            {
              label: "Tools & Calculators",
              description:
                "Untangle your taxes with our free tools & calculators—easy, efficient, and accurate.",
              href: "/",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Our Services"
          description="Planetary problems. Global solutions. Local deployment."
          image="/images/nettax-services-dropdown.gif"
          href="/"
          items={[
            {
              label: "NTN Registration",
              description:
                "A seamless process for obtaining your National Tax Number (NTN), unlocking smoother financial transactions.",
              href: "/",
            },
            {
              label: "Income Tax Return",
              description:
                "Accurate and timely filing to avoid penalties and maximize refunds.",
              href: "/",
            },
            {
              label: "Sales Tax Return & Registration",
              description:
                "Efficient handling of sales tax processes to keep your business compliant and penalty-free.",
              href: "/",
            },
            {
              label: "Trademark & Company Registration",
              description:
                "Secure your brand and formalize your business with ease and confidence.",
              href: "/",
            },
            {
              label: "NGO/NPO Registration",
              description:
                "Supporting your charitable missions with streamlined registration and compliance.",
              href: "/",
            },
            {
              label: "Legal Advisory & SECP Compliance",
              description:
                "Comprehensive legal advisory to meet SECP standards and safeguard your business.",
              href: "/",
            },
          ]}
        />
      </li>

      <li>
        <Navlink href="/contact" label="Contact Us" />
      </li>

      <li>
        <Navlink href="/blog" label="Blog" />
      </li>
    </ul>
  );
};

export default Navbar;
