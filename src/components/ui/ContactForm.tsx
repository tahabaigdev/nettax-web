import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

const ContactForm = () => {
  return (
    <div className="shadow-01 overflow-hidden rounded-tl-[1.2rem] rounded-tr-[1.2rem] bg-[#ffffff] px-[2rem] py-[3rem]">
      <form className="grid grid-cols-1 gap-[1rem] gap-y-[2rem] md:grid-cols-2">
        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="fullname">Full Name</Label>

          <Input type="text" name="fullname" placeholder="Your Full Name" />
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="email">Email</Label>

          <Input type="text" name="email" placeholder="Your Email Id" />
        </div>

        <div className="flex flex-col gap-[.5rem] md:col-span-2">
          <Label htmlFor="query">Tell us about your query</Label>

          <Textarea placeholder="Type your query here." />
        </div>

        <div className="flex flex-col gap-[1rem] md:col-span-2">
          <Label htmlFor="email">How can we help?</Label>

          <div className="grid grid-cols-2 gap-y-[1rem] md:grid-cols-3">
            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="ntn-registration" />

              <Label
                htmlFor="ntn-registration"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                NTN Registration
              </Label>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="sales-tax-registration" />

              <Label
                htmlFor="sales-tax-registration"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                Sales Tax Registration
              </Label>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="income-tax-return" />

              <Label
                htmlFor="income-tax-return"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                Income Tax Return
              </Label>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="trademark-registration" />

              <Label
                htmlFor="trademark-registration"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                Trademark Registration
              </Label>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="sales-tax-return" />

              <Label
                htmlFor="sales-tax-return"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                Sales Tax Return
              </Label>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <Checkbox id="other" />

              <Label
                htmlFor="other"
                className="text-[1.2rem] leading-[1.6rem] font-normal"
              >
                Other
              </Label>
            </div>
          </div>
        </div>

        <div className="flex md:col-span-2">
          <Button className="w-[100%]">Submit Now</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
