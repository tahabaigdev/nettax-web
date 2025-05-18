interface SectionDescriptionProps {
  label: string;
}

const SectionDescription = ({ label }: SectionDescriptionProps) => {
  return (
    <p className="max-w-[79.2rem] px-[1rem] text-[1.8rem] leading-[2.4rem] text-(--base-color-01) md:px-[0rem] md:text-[2rem] md:leading-[2.8rem]">
      {label}
    </p>
  );
};

export default SectionDescription;
