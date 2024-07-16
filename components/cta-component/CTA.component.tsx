import React from "react";

type CTAProps = {
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  mxAuto?: boolean;
};

const CTA: React.FC<CTAProps> = ({
  href = "",
  onClick,
  text = "EU QUERO",
  variant = "primary",
  className,
  mxAuto = false,
}) => {
  const primaryVariant = "text-white border border-white ";

  const secondaryVariant = "text-black border border-black";

  if (href) {
    return (
      <a
        className={`
        ${variant === "primary" ? primaryVariant : secondaryVariant}
        font-bold py-[1.48vh] md:py-[2.22vh] px-[3.33vw] rounded
        transition duration-300 ease-in-out
        items-center
        justify-center
        flex
      w-full
      max-w-[250px]
      md:max-w-[350px]
      ${mxAuto && "mx-auto"}
      uppercase
      ${className}
      `}
        href={href}
      >
        <span className="text-wrap">{text}</span>
      </a>
    );
  } else {
    return (
      <button
        className={`
        ${variant === "primary" ? primaryVariant : secondaryVariant}
        font-bold py-[1.48vh] md:py-[2.22vh] px-[3.33vw] rounded
        transition duration-300 ease-in-out
      w-full
      max-w-[250px]
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
  }
};

export default CTA;
