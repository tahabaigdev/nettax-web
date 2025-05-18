import DropdownMenu from "./DropdownMenu";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <ul className="flex items-center gap-[3rem]">
      <li>
        <DropdownMenu
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
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Dost"
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
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Guru"
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
          ]}
        />
      </li>

      <li>
        <Navlink href="/tax-calculator" label="Tax Calculator" />
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
