import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="font-bold uppercase mb-3 pl-5" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
