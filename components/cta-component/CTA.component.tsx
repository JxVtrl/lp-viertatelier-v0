import React from "react";

type CTAProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const CTA: React.FC<CTAProps> = ({
  onClick = () => null,
  text = "EU QUERO",
  variant = "primary",
}) => {
  const primaryVariant = "text-white border border-white ";

  const secondaryVariant = "text-black border border-black";

  return (
    <button
      className={`
      ${variant === "primary" ? primaryVariant : secondaryVariant}
      font-bold py-2 px-4 rounded
      transition duration-300 ease-in-out
      w-[60%]
      lg:w-[350px]
        h-[75px]
      w-full
      mx-auto
      uppercase
    `}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default CTA;
