import { CTA } from "@/components";
import { useApp } from "@/context/AppContext";
import React from "react";
import localFont from "next/font/local";

const Content: React.FC = () => {
  const {
    device: { isDesktop },
  } = useApp();

  return (
    <div className="flex flex-col gap-y-[20vh] lg:gap-y-[60px] text-center text-[#fff] w-full h-full justify-center">
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[0]">
        <h1 className="text-[80px] tracking-[2px]">Atelier Sob Medida</h1>

        <p className="text-[18px]">
          Conheça nossa seleção de vestidos taylor{!isDesktop ? <br /> : " "}
          made com design autoral e único
        </p>
      </div>

      <CTA mxAuto onClick={() => null} />
    </div>
  );
};

export default Content;
