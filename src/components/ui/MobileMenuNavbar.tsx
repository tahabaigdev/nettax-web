import MobileMenuDropdown from "./MobileMenuDropdown";
import MobileMenuNavlink from "./MobileMenuNavlink";

const MobileMenuNavbar = () => {
  return (
    <ul className="mx-[1.6rem] my-[2rem]">
      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <MobileMenuDropdown
          label="Company"
          description="Planetary problems. Global solutions. Local deployment."
          href="/"
          items={[
            {
              label: "About Us",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Services",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "About Us",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Services",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
            {
              label: "Price List",
              description:
                "Unlock the full production potential of your asset, across the entire lifecycle.",
              href: "/",
            },
          ]}
        />
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <MobileMenuNavlink href="/tax-calculator" label="Tax Calculator" />
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <MobileMenuNavlink href="/contact" label="Contact Us" />
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <MobileMenuNavlink href="/blog" label="Blog" />
      </li>
    </ul>
  );
};

export default MobileMenuNavbar;
