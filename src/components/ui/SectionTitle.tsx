interface SectionTitleProps {
  label: string;
}

const SectionTitle = ({ label }: SectionTitleProps) => {
  return (
    <h2 className="ibm-font max-w-[70rem] text-[3.5rem] leading-[4.5rem] font-medium tracking-[-2px] text-(--base-color-01) md:text-[6rem] md:leading-[7rem]">
      {label}
    </h2>
  );
};

export default SectionTitle;
