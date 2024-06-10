import React from "react";
import { Logo, Navigation, Midia } from "@/components";

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-3 place-items-center pl-[35px] pt-[35px] pr-[55px]">
      <div className="place-self-start w-full h-full">
        <Logo />
      </div>
      <Navigation />
      <div className="place-self-end">
        <Midia />
      </div>
    </header>
  );
};

export default Header;
