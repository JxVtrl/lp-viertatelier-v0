import React from "react";

type CTAProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  mxAuto?: boolean;
};

const CTA: React.FC<CTAProps> = ({
  onClick = () => null,
  text = "EU QUERO",
  variant = "primary",
  className,
  mxAuto = false,
}) => {
  const primaryVariant = "text-white border border-white ";

  const secondaryVariant = "text-black border border-black";

  return (
    <button
      className={`
      ${variant === "primary" ? primaryVariant : secondaryVariant}
      font-bold py-[16px] md:py-[120px] px-4 rounded
      transition duration-300 ease-in-out
      w-full
      max-w-[250px]
      md:h-[65px]
      md:max-w-[350px]
      ${mxAuto && "mx-auto"}
      uppercase
      ${className}
    `}
      onClick={onClick}
    >
      <span className="text-wrap">{text}</span>
    </button>
  );
};

export default CTA;
