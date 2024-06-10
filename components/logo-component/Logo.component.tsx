import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      className="relative max-w-[228px] max-h-[58px] w-full h-full"
      style={{ aspectRatio: 3.93 }}
    >
      <Image src="/assets/brand/logo.png" alt="logo" layout="fill" />
    </div>
  );
};

export default Logo;
